package com.data

import kotlinx.serialization.Serializable

@Serializable
enum class Abbreviation(val value: String) {
    STR("Strength"),
    DEX("Dexterity"),
    CON("Constitution"),
    INT("Intelligence"),
    WIS("Wisdom"),
    CHA("Charisma")
}

@Serializable
data class Stat(val abbreviation: Abbreviation, val value: Int)

@Serializable
data class Character(
    val id: Int? = null,
    val name: String,
    val strength: Stat,
    val dexterity: Stat,
    val constitution: Stat,
    val intelligence: Stat,
    val wisdom: Stat,
    val charisma: Stat
) {
    fun isValid(): Boolean {
        fun valid(value: Int): Boolean = value in 1..20
        val stats = listOf(
            this.strength,
            this.constitution,
            this.dexterity,
            this.intelligence,
            this.wisdom,
            this.charisma
        ).map { it.value }

        return stats.fold(true) {total, value -> total && valid(value)}
    }
}

val characterStorage = mutableListOf<Character>()