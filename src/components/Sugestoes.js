import Sugestao from "./Sugestao"

export default function Sugestoes() {

    let sugestions = [
        {id: 1, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 2, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 3, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 4, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 5, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 6, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 7, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 8, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"},
        {id: 9, sugestionImage: "assets/img/bad.vibes.memes.svg", sugestionName: "bad.vibes.memes",sugestionStatus: "Segue você"}
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestions.map(e => <Sugestao key={e.id} sugestionImage={e.sugestionImage} sugestionName={e.sugestionName} sugestionStatus={e.sugestionStatus}/>)}

            {/* <div className="sugestao">
                <div className="usuario">
                    <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" />
                    <div className="texto">
                        <div className="nome">bad.vibes.memes</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="assets/img/chibirdart.svg" alt="chibirdart" />
                    <div className="texto">
                        <div className="nome">chibirdart</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                    <div className="texto">
                        <div className="nome">razoesparaacreditar</div>
                        <div className="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div className="texto">
                        <div className="nome">adorable_animals</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="assets/img/smallcutecats.svg" alt="smallcutecats" />
                    <div className="texto">
                        <div className="nome">smallcutecats</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div> */}
        </div>
    )
}