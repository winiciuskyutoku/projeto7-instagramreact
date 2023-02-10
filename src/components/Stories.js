import Story from "./Story"

export default function Stories() {

    let users = [
        { name: "9gag", image: "assets/img/9gag.svg" },
        { name: "mewowed", image: "assets/img/meowed.svg" },
        { name: "barked", image: "assets/img/barked.svg" },
        { name: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", image: "assets/img/wawawicomics.svg"},
        { name: "memeriagourmet", image: "assets/img/memeriagourmet.svg" },
        { name: "filomoderna", image: "assets/img/filomoderna.svg" },
        { name: "respondeai", image: "assets/img/respondeai.svg" }
    ]

    return (
        <div class="stories">
            
            {users.map(e => <Story name={e.name} image={e.image}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}




