import React, { useState } from 'react'

type Props = { 
  saveCharacter: (e: React.FormEvent, character: ICharacter | any) => void 
}

const CreateCharacter: React.FC<Props> = ({ saveCharacter }) => {
  const [character, setCharacter] = useState<ICharacter | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setCharacter({
      ...character,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveCharacter(e, character)}>
			<h2>Create Character</h2>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='strength'>Strength</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='strength' />
        </div>
				<div>
          <label htmlFor='dexterity'>Dexterity</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='dexterity' />
        </div>
				<div>
          <label htmlFor='constitution'>Constitution</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='constitution' />
        </div>
				<div>
          <label htmlFor='intelligence'>Intelligence</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='intelligence' />
        </div>
				<div>
          <label htmlFor='wisdom'>Wisdom</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='wisdom' />
        </div>
				<div>
          <label htmlFor='charisma'>Charisma</label>
          <input onChange={handleForm} type='number' min='1' max='20' id='charisma' />
        </div>
      </div>
      <button disabled={character === undefined ? true: false} >Add Character</button>
    </form>
  )
}

export default CreateCharacter