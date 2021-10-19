package com.plugins

import com.data.Abbreviation
import com.data.Character
import com.data.Stat

object Utils {
    fun validateCharacterStats(character: Character): Boolean {
        fun valid(value: Int): Boolean = value in 1..20
        val stats = listOf(
            character.strength,
            character.constitution,
            character.dexterity,
            character.intelligence,
            character.wisdom,
            character.charisma
        ).map { it.value }

        return stats.fold(true) {total, value -> total && valid(value)}
    }

//    fun characterToSerializable(character: com.dao.Character): Character {
//        return Character(
//            id = character.id.value,
//            name = character.name,
//            strength = Stat(Abbreviation.STR, character.strength),
//            dexterity = Stat(Abbreviation.DEX, character.dexterity),
//            constitution = Stat(Abbreviation.CON, character.constitution),
//            intelligence = Stat(Abbreviation.INT, character.intelligence),
//            wisdom = Stat(Abbreviation.WIS, character.wisdom),
//            charisma = Stat(Abbreviation.CHA, character.charisma),
//        )
//    }
}