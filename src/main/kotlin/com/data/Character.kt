package com.data

import kotlinx.serialization.Serializable

@Serializable
data class Character(
    val id: Int? = null,
    val name: String,
    val strength: Int,
    val dexterity: Int,
    val constitution: Int,
    val intelligence: Int,
    val wisdom: Int,
    val charisma: Int
) {
    fun isValid(): Boolean {
        fun valid(value: Int): Boolean = value in 1..20
        return listOf(
            this.strength,
            this.constitution,
            this.dexterity,
            this.intelligence,
            this.wisdom,
            this.charisma
        ).fold(true) {total, value -> total && valid(value)}

    }
}