package com

import com.dao.DB
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.plugins.*
import com.service.CharacterService
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import mu.KotlinLogging
import org.jetbrains.exposed.sql.Database
import kotlin.text.get

private val logger = KotlinLogging.logger {}

fun Application.module() {
    install(ContentNegotiation) {
        json()
    }

    val db = DB()
    db.initialize()
    val characterService = CharacterService(db)
    configureRouting(characterService)
//    configureSecurity()
}

fun main(args: Array<String>): Unit = EngineMain.main(args)
