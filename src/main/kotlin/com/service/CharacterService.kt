package com.service

import com.dao.Characters
import com.dao.DB
import com.data.Abbreviation
import com.data.Character
import com.data.Stat
import com.plugins.Utils
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

class CharacterService(val db: DB) {
    fun create(character: Character): Character {
        if (!character.isValid()) {
            throw Exception("Invalid character stats")
        }
        val id = transaction {
            Characters.insert {
                it[name] = character.name
                it[strength] = character.strength.value
                it[dexterity] = character.dexterity.value
                it[constitution] = character.constitution.value
                it[wisdom] = character.wisdom.value
                it[intelligence] = character.intelligence.value
                it[charisma] = character.charisma.value
            } get Characters.id
        }
        return character.copy(id = id)
    }

    fun read(id: Int): Character {
        val result = transaction {
            Characters.select { Characters.id eq id }.map { result ->
                Character(
                    id = result[Characters.id],
                    name = result[Characters.name],
                    strength = Stat(Abbreviation.STR, result[Characters.strength]),
                    dexterity = Stat(Abbreviation.DEX, result[Characters.dexterity]),
                    constitution = Stat(Abbreviation.CON, result[Characters.constitution]),
                    intelligence = Stat(Abbreviation.INT, result[Characters.intelligence]),
                    wisdom = Stat(Abbreviation.WIS, result[Characters.wisdom]),
                    charisma = Stat(Abbreviation.CHA, result[Characters.charisma]),
                )
            }
        }
        if (result.isEmpty()) {
            throw Exception("Could not find character with id $id")
        }
        return result.single()
    }

    fun read(): List<Character> {
        return transaction {
            Characters.selectAll().toList().map { result ->
                Character(
                    id = result[Characters.id],
                    name = result[Characters.name],
                    strength = Stat(Abbreviation.STR, result[Characters.strength]),
                    dexterity = Stat(Abbreviation.DEX, result[Characters.dexterity]),
                    constitution = Stat(Abbreviation.CON, result[Characters.constitution]),
                    intelligence = Stat(Abbreviation.INT, result[Characters.intelligence]),
                    wisdom = Stat(Abbreviation.WIS, result[Characters.wisdom]),
                    charisma = Stat(Abbreviation.CHA, result[Characters.charisma]),
                )
            }
        }
    }

    fun update(character: Character): Character {
        transaction {
            Characters.update({Characters.id eq character.id!!}) {
                it[name] = character.name
                it[strength] = character.strength.value
                it[dexterity] = character.dexterity.value
                it[constitution] = character.constitution.value
                it[wisdom] = character.wisdom.value
                it[intelligence] = character.intelligence.value
                it[charisma] = character.charisma.value
            }
        }
        return character
    }

    fun delete(id: Int): Int {
        transaction {
            Characters.deleteWhere { Characters.id eq id }
        }
        return id
    }

}