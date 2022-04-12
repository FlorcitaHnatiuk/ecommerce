import { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //prevengo que se actualice la página
        console.log(input)
    }
    
    const handleKeyDown = (e) => {
        console.log(e)
        if(e.code === 'Space') { // evita que se escriban espacios en ese input
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}/>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form