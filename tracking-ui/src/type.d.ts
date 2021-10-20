interface ICharacter {
	id: number|null
	name: string
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

interface CharacterProps {
  character: ICharacter
}

type ApiDataType = {
  // message: string
  status: string
  characters: ICharacter[]
	character?: ICharacter
}