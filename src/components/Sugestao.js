export default function Sugestao(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.sugestionImage} alt={props.sugestionName} />
                <div class="texto">
                    <div class="nome">{props.sugestionName}</div>
                    <div class="razao">{props.sugestionStatus}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}