package com.dao

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

object Characters: Table("characters") {
    val id = integer("id").autoIncrement()
    val name = varchar("name", 255)
    val strength = integer("strength")
    val dexterity = integer("dexterity")
    val constitution = integer("constitution")
    val intelligence = integer("intelligence")
    val wisdom = integer("wisdom")
    val charisma = integer("charisma")

    override val primaryKey = PrimaryKey(id)
}

class DB {
    fun initialize() {
        Database.connect("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1", driver = "org.h2.Driver")
        transaction {
            addLogger(StdOutSqlLogger)
            SchemaUtils.create(Characters)

            val felix = Characters.insert { // todo: this should be a migration
                it[name] = "Felix the Flatulent"
                it[strength] = 4
                it[dexterity] = 5
                it[constitution] = 18
                it[wisdom] = 3
                it[intelligence] = 3
                it[charisma] = 1
            } get Characters.id
            println(felix)

        }
    }
}