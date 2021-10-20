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
      <table>
        <tbody>
          <tr>
            <th><label htmlFor='name'>Name</label></th>
            <td><input onChange={handleForm} type='text' id='name' /></td>
          </tr>
          <tr>
            <th><label htmlFor='strength'>Strength</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='strength' /></td>
          </tr>
          <tr>
            <th><label htmlFor='dexterity'>Dexterity</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='dexterity' /></td>
          </tr>
          <tr>
            <th><label htmlFor='constitution'>Constitution</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='constitution' /></td>
          </tr>
          <tr>
            <th><label htmlFor='intelligence'>Intelligence</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='intelligence' /></td>
          </tr>
          <tr>
            <th><label htmlFor='wisdom'>Wisdom</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='wisdom' /></td>
          </tr>
          <tr>
            <th><label htmlFor='charisma'>Charisma</label></th>
            <td><input onChange={handleForm} type='number' min='1' max='20' id='charisma' /></td>
          </tr>
        </tbody>
      </table>
      <button disabled={character === undefined ? true: false} >Add Character</button>
    </form>
  )
}

export default CreateCharacter