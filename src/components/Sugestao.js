export default function Sugestao(props) {
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.sugestionImage} alt={props.sugestionName} />
                <div className="texto">
                    <div className="nome">{props.sugestionName}</div>
                    <div className="razao">{props.sugestionStatus}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}