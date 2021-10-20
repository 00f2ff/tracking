import React from "react"

type Props = CharacterProps & {
	deleteCharacter: (id: number|null) => void
}

const Character: React.FC<Props> = ({character, deleteCharacter}) => {
	return (
		<div className="character">
			<div>id: {character.id}</div>
			<div>Name: {character.name}</div>
			<div>Strength: {character.strength}</div>
			<div>Dexterity: {character.dexterity}</div>
			<div>Intelligence: {character.intelligence}</div>
			<div>Wisdom: {character.wisdom}</div>
			<div>Charisma: {character.charisma}</div>
			<button
          onClick={() => deleteCharacter(character.id)}
        >
          Delete
        </button>
		</div>
	)
}

export default Character