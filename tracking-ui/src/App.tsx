import React, { useEffect, useState } from 'react'
import Character from './components/Character'
import { getCharacters } from './API'

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

  return (
    <main className='App'>
      <h1>My Characters</h1>
      {characters.map((character: ICharacter) => (
        <Character
          key={character.id}
          character={character}
          // updateTodo={handleUpdateTodo}
          // deleteTodo={handleDeleteTodo}
          // todo={todo}
        />
      ))}
    </main>
  )
}

export default App