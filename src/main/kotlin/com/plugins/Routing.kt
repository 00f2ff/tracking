package com.plugins

import com.dao.DB
import com.data.Character
import com.data.characterStorage
import com.service.CharacterService
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.encodeToJsonElement
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

fun Application.configureRouting(characterService: CharacterService) {
    routing {
        route("/character") {
            get {
                val result = characterService.read()
                call.respond(Json.encodeToJsonElement(result))
            }

            get("{id}") {
                val id = call.parameters["id"]
                if (id.isNullOrBlank()) {
                    call.respond(HttpStatusCode.BadRequest, "Missing id")
                }
                val result = characterService.read(id!!.toInt())
                call.respond(HttpStatusCode.Found, Json.encodeToJsonElement(result))
            }

            post {
                val character = call.receive<Character>()
                if (!character.isValid()) {
                    call.respond(HttpStatusCode.BadRequest, "Character stats must be between 1 and 20")
                }
                val result = characterService.create(character)
                call.respond(HttpStatusCode.Created, Json.encodeToJsonElement(result))
            }
//
            put {
                val character = call.receive<Character>()
                if (!character.isValid()) {
                    call.respond(HttpStatusCode.BadRequest, "Character stats must be between 1 and 20")
                }
                val result = characterService.update(character)
//                val oldCharacter = characterStorage.find { it.id == character.id }
//                if (oldCharacter == null) {
//                    call.respond(HttpStatusCode.NotFound, "Character with id ${character.id} not found")
//                }
//                val index = characterStorage.indexOf(oldCharacter)
//                characterStorage[index] = character
                call.respond(HttpStatusCode.OK, Json.encodeToJsonElement(result))
            }
//
            delete("{id}") {
                val id = call.parameters["id"]
                if (id.isNullOrBlank()) {
                    call.respond(HttpStatusCode.BadRequest, "Invalid id $id")
                }
                val deletedId = characterService.delete(id!!.toInt())
                call.respond(HttpStatusCode.OK, deletedId)
            }
        }
    }
}
