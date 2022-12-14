import Item from './item';
import style from './Lista.module.scss';
import ITarefa from '../../interfaces/tarefa';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista ({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className={style.tarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;