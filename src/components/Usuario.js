import React from "react"

export default function Usuario(props) {
    const [user, setUser] = React.useState(props.text);
    const [image, setImage]= React.useState(props.image);

    function changeUser(){
        const newUser = prompt("Qual o seu nome?");
        if (newUser === "" || newUser === undefined || newUser === null){
            return
        }
        setUser(newUser);
    }

    function changeImage(){
        const newImage = prompt("Qual a sua foto de perfil?");
        if (newImage === "" || newImage === undefined || newImage === null){
            return
        }
        setImage(newImage);
    }

    return (
        <div className="usuario">
            <img src={image} alt={user} onClick={changeImage}/>
            <div className="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon name="pencil" onClick={changeUser}></ion-icon>
                </span>
            </div>
        </div>
    )
}
