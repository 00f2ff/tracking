import React from "react"

type Props = CharacterProps & {
	deleteCharacter: (id: number|null) => void
}

const Character: React.FC<Props> = ({character, deleteCharacter}) => {
	return (
		<div className="character">
			<table>
				<tbody>
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
				</tbody>
			</table>
			<button
			onClick={() => deleteCharacter(character.id)}
		>
			Delete
		</button>
	</div>
	)
}

export default Character