import React, { useState } from 'react'

type Props = { 
  updateCharacter: (e: React.FormEvent, character: ICharacter | any) => void 
}

const UpdateCharacter: React.FC<Props> = ({ updateCharacter }) => {
  const [character, setCharacter] = useState<ICharacter | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setCharacter({
      ...character,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => updateCharacter(e, character)}>
      <h2>Update Character</h2>
      <div>
        <div>
          <label htmlFor='id'>ID</label>
          <input onChange={handleForm} type='text' id='id' />
        </div>
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
      <button disabled={character === undefined ? true: false} >Update character</button>
    </form>
  )
}

export default UpdateCharacter