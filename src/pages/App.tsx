import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import ITarefa from '../interfaces/tarefa';
import style from './App.module.scss';


function App() {
  const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa (tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setListaTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({ 
      ...tarefa, 
      selecionado: (tarefa.id === tarefaSelecionada.id)? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setListaTarefas(tarefasAntigas => tarefasAntigas.map(
        (tarefa => {
          if( tarefa.id === selecionado.id) {
            return {
              ...tarefa, 
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        })
      ))
    }
  }

  return (
    <div className={style.AppStyles}>
      <Formulario setTarefas={setListaTarefas} />
      <Lista 
        tarefas={listaTarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa}
        />
    </div>
  );
}

export default App;
