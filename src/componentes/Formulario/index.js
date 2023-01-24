import { useState } from 'react'
import Botao from '../Botao'
import './formulario.css'

export const Formulario = () => {
  return (
    <div className="formulario">
        <h1>Cadastro de Ingressantes</h1>
        <form>
          <label>Nome
            <input />
          </label>
  
          <label>Curso
          <select name='Curso'>
            <option value="">Selecione</option>
            <option value="1">Matemática</option>
            <option value="2">Letras</option>
            <option value="3">Geogradia</option>
          </select>
          </label>

          <label>Estado
            <select name='Estado'>
              <option value="">Selecione</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Minas Gerais</option>
            </select>
          </label>

          <label>Cidade
            <select name='Cidade'>
              <option value="">Selecione</option>
              <option value="1">Mogi das Cruzes</option>
              <option value="2">Suzano</option>
              <option value="3">Poá</option>
              <option value="4">Angra dos Reis</option>
              <option value="5">Niterói</option>
              <option value="6">Itaboraí</option>
              <option value="7">Belo Horizonte</option>
              <option value="8">Monte Azul</option>
              <option value="9">Muzambinho</option>
            </select>
          </label>
          <Botao />
        </form>
      </div>
  );
}

export default Formulario;