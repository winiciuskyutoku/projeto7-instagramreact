import Post from "./Post"

export default function Posts() {
    let posts = [
        { user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai" },
        { user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai" },
        { user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai" }
    ]
    return (
        <div class="posts">
            {posts.map(e => <Post user={e.user} name={e.name} content={e.content} contentName={e.contentName} likedImage={e.likedImage} likedName={e.likedName}/>)}
        </div>
    )
}