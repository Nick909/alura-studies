import ITarefa from '../../../interfaces/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
    tarefa,
    tempo,
    completado,
    selecionado,
    id,
    selecionaTarefa
  }: Props) {
  return (
    <li 
      className={`
        ${style.item} 
        ${selecionado ? style.itemSelecionado: ''}
        ${completado ? style.itemCompletado: ''}  
      `} 
      
      onClick={() => !completado && selecionaTarefa({
        tarefa, 
        tempo, 
        completado, 
        selecionado, 
        id
      })}>
    <h3>{tarefa}</h3>
    <span>{tempo}</span>
    {completado && 
      <span className={style.concluido} aria-label='item completada'></span>
    }
  </li>
  );
}