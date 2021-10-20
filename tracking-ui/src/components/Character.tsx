import React from "react"

type Props = CharacterProps & {
	deleteCharacter: (id: number|null) => void
}

const Character: React.FC<Props> = ({character, deleteCharacter}) => {
	return (
		<table className="character">
			<tr>
				<th>id</th>
				<td>{character.id}</td>
			</tr>
			<tr>
				<th>Name</th>
				<td>{character.name}</td>
			</tr>
			<tr>
				<th>Strength</th>
				<td>{character.strength}</td>
			</tr>
			<tr>
				<th>Dexterity</th>
				<td>{character.dexterity}</td>
			</tr>
			<tr>
				<th>Constitution</th>
				<td>{character.constitution}</td>
			</tr>
			<tr>
				<th>Intelligence</th>
				<td>{character.intelligence}</td>
			</tr>
			<tr>
				<th>Wisdom</th>
				<td>{character.wisdom}</td>
			</tr>
			<tr>
				<th>Charisma</th>
				<td>{character.charisma}</td>
			</tr>
			{/* <div>id: {character.id}</div>
			<div>Name: {character.name}</div>
			<div>Strength: {character.strength}</div>
			<div>Dexterity: {character.dexterity}</div>
			<div>Intelligence: {character.intelligence}</div>
			<div>Wisdom: {character.wisdom}</div>
			<div>Charisma: {character.charisma}</div> */}
			<button
          onClick={() => deleteCharacter(character.id)}
        >
          Delete
        </button>
		</table>
	)
}

export default Character