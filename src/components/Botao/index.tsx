import style from './Botao.module.scss';

type userProps  =  {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao ({texto, type, onClick}:userProps) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Botao; 