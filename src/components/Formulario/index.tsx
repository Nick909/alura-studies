import React, { useState } from "react";
import ITarefa from "../../interfaces/tarefa";
import Botao from "../Botao"
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';


function Formulario ({setTarefas}: {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}) {
  const [tarefa, setTarefa] = useState({
    tarefa: '', 
    tempo: '00:00:00', 
  });

  const adicionarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTarefas(tarefasAntigas => [...tarefasAntigas, {
      ...tarefa, 
      selecionado: false,
      completado: false,
      id: uuidv4()}
    ]);
    setTarefa({
      tarefa: '', 
      tempo: '00:00:00', 
    });
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input 
          type="text"
          name="tarefa"
          value={tarefa.tarefa}
          onChange={event => setTarefa({...tarefa, tarefa: event.target.value})}
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input 
          type="time"
          step="1"
          name="tempo"
          value={tarefa.tempo}
          onChange={event => setTarefa({...tarefa, tempo: event.target.value})}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Botao texto="Adicionar" type="submit"/>
    </form>
  );
}

export default Formulario;