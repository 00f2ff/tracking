import React from "react"

type Props = CharacterProps

const Character: React.FC<Props> = ({character}) => {
	return (
		<div className="character">
			<h2>Character</h2>
			<div>Name: {character.name}</div>
			<div>Strength: {character.strength}</div>
			<div>Dexterity: {character.dexterity}</div>
			<div>Intelligence: {character.intelligence}</div>
			<div>Wisdom: {character.wisdom}</div>
			<div>Charisma: {character.charisma}</div>
		</div>
	)
}

export default Character