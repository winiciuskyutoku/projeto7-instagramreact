export default function Usuario(props) {


    return (
        <div class="usuario">
            <img src={props.image} alt={props.text} />
            <div class="texto">
                <span>
                    <strong>{props.text}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}
