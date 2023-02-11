import React from "react"

export default function Post(props) {
    const [nameSaved, setnameSaved] = React.useState("bookmark-outline")
    const [liked, setLiked] = React.useState("heart-outline")
    const [none, setNone] = React.useState("")
    const [numLikes, setnumLikes] = React.useState(props.likes)
    const [animation, setAnimation] = React.useState("displayNone")

    function markAsLiked(item){
        if (liked === "heart-outline"){
            setLiked("heart");
            setNone("liked");
            setnumLikes(numLikes + 1) 
            setAnimation("animation");
        } else if (liked === "heart" && item !== "image"){
            setLiked("heart-outline");
            setNone("");
            setnumLikes(numLikes - 1)
            setAnimation("displayNone")
        }
    }

    function markAsSaved(){
        if(nameSaved === "bookmark-outline"){
            setnameSaved("bookmark")
        } else if (nameSaved === "bookmark"){
            setnameSaved("bookmark-outline")
        }
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.user} alt={props.name} />
                    {props.name}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onDoubleClick={() => markAsLiked("image")} src={props.content} alt={props.contentName} />
                <ion-icon name="heart" class={animation}></ion-icon>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={liked} class={none} onClick={markAsLiked}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={nameSaved} onClick={markAsSaved} ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likedImage} alt={props.likedName} />
                    <div className="texto">
                        Curtido por <strong>{props.likedName}</strong> e <strong>outras {numLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>


    )
}