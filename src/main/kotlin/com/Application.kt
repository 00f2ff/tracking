package com

import com.dao.DB
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.plugins.*
import com.service.CharacterService
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
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
    install(CORS) {
//        host("localhost:3000")
        anyHost()
        method(HttpMethod.Options)
        method(HttpMethod.Get)
        method(HttpMethod.Post)
        method(HttpMethod.Put)
        method(HttpMethod.Delete)
        header("authorization")
        allowCredentials = true
        allowNonSimpleContentTypes = true
    }

    DB().initialize()
    val characterService = CharacterService()
    configureRouting(characterService)
//    configureSecurity()
}

fun main(args: Array<String>): Unit = EngineMain.main(args)
