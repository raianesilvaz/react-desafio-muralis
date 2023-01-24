import { useState } from 'react'
import './botao.css'

export const Botao = (props) => {
    return (
        <div className='divbotao'>
            <button className='button1' type='submit'>Voltar</button>
            <button className='button2' type='submit'>Gravar</button>
        </div>
    )
}

export default Botao;



