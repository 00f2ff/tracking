import React, { useEffect, useState } from 'react'
import Character from './components/Character'
import { createCharacter, deleteCharacter, getCharacters, updateCharacter } from './API'
import CreateCharacter from './components/CreateCharacter'
import UpdateCharacter from './components/UpdateCharacter'

const App: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    fetchCharacters()
  }, [])

  const fetchCharacters = (): void => {
    getCharacters()
    .then(({data}: ICharacter[] | any) => {console.log(data); setCharacters(data ? data : [])})
    .catch((err: Error) => console.log(err))
  }

  const handleCreateCharacter = (e: React.FormEvent, character: ICharacter): void => {
    e.preventDefault()
    createCharacter(character)
    .then(({data}: ICharacter | any) => setCharacters(characters.concat(data)))
   .catch((err) => console.log(err))
 }

 const handleUpdateCharacter = (e: React.FormEvent, character: ICharacter): void => { // todo: should replace what we've got for id
  updateCharacter(character)
  .then(({data}: ICharacter | any) => setCharacters(characters.concat(data)))
 .catch((err) => console.log(err))
}

const handleDeleteCharacter = (id: number|null): void => {
  if (id == null) {
    throw Error
  }
  deleteCharacter(id)
  .then(({ data }: number | any) => {
    console.log(data)
      setCharacters(characters.filter(c => c.id !== data))
    })
    .catch((err) => console.log(err))
}

  return (
    <main className='App'>
      <div>
        <h2>Characters</h2>
        {characters.map((character: ICharacter) => (
          <Character
            key={character.id}
            character={character}
            deleteCharacter={handleDeleteCharacter}
          />
        ))}
      </div>
      <div>
        <CreateCharacter saveCharacter={handleCreateCharacter} />
        <UpdateCharacter updateCharacter={handleUpdateCharacter} />
      </div>

    </main>
  )
}

export default App