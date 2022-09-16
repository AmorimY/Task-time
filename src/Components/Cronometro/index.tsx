import Button from "../botao"
import Relogio  from "./Relogio"
import style from "./cronometro.module.scss"
export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um car e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>

        <Relogio/>
        </div>
        <Button>
            Começar
        </Button>
        </div>

    )
}