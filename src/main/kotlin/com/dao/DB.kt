package com.dao

import com.data.Abbreviation
import com.data.Character
import com.data.Stat
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
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
        val a = transaction {
            addLogger(StdOutSqlLogger)
            SchemaUtils.create(Characters)

            val agnar = Characters.insert { // todo: this should be a migration
                it[name] = "agnar"
                it[strength] = 1
                it[dexterity] = 1
                it[constitution] = 1
                it[wisdom] = 1
                it[intelligence] = 1
                it[charisma] = 1
            } get Characters.id
            println(agnar)

        }
//        return a
    }
}