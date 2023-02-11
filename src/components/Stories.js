import Story from "./Story"

export default function Stories() {

    let users = [
        { id: 1, name: "9gag", image: "assets/img/9gag.svg" },
        { id: 2, name: "mewowed", image: "assets/img/meowed.svg" },
        { id: 3, name: "barked", image: "assets/img/barked.svg" },
        { id: 4, name: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
        { id: 5, name: "wawawicomics", image: "assets/img/wawawicomics.svg"},
        { id: 6, name: "memeriagourmet", image: "assets/img/memeriagourmet.svg" },
        { id: 7, name: "filomoderna", image: "assets/img/filomoderna.svg" },
        { id: 8, name: "respondeai", image: "assets/img/respondeai.svg" }
    ]

    return (
        <div className="stories">
            
            {users.map(e => <Story key={e.id} name={e.name} image={e.image}/>)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}




