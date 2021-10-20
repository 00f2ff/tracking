package com.service

import com.dao.Characters
import com.data.Character
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

class CharacterService {
    fun create(character: Character): Character {
        if (!character.isValid()) {
            throw Exception("Invalid character stats")
        }
        if (character.id != null) {
            throw Exception("Cannot create character with non-null id")
        }
        val id = transaction {
            Characters.insert {
                it[name] = character.name
                it[strength] = character.strength
                it[dexterity] = character.dexterity
                it[constitution] = character.constitution
                it[wisdom] = character.wisdom
                it[intelligence] = character.intelligence
                it[charisma] = character.charisma
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
                    strength = result[Characters.strength],
                    dexterity = result[Characters.dexterity],
                    constitution = result[Characters.constitution],
                    intelligence = result[Characters.intelligence],
                    wisdom = result[Characters.wisdom],
                    charisma = result[Characters.charisma],
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
                    strength = result[Characters.strength],
                    dexterity = result[Characters.dexterity],
                    constitution = result[Characters.constitution],
                    intelligence = result[Characters.intelligence],
                    wisdom = result[Characters.wisdom],
                    charisma = result[Characters.charisma],
                )
            }
        }
    }

    fun update(character: Character): Character {
        transaction {
            Characters.update({Characters.id eq character.id!!}) {
                it[name] = character.name
                it[strength] = character.strength
                it[dexterity] = character.dexterity
                it[constitution] = character.constitution
                it[wisdom] = character.wisdom
                it[intelligence] = character.intelligence
                it[charisma] = character.charisma
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