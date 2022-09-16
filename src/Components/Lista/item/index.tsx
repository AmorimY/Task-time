import style from '../lista.module.scss'

export default function item({tarefa,tempo} : {tarefa :string,tempo :string}): JSX.Element{
    return (
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}