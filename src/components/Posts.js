import Post from "./Post"

export default function Posts() {
    let posts = [
        { id: 1, user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai", likes: 329},
        { id: 2, user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai", likes: 38129381},
        { id: 3, user: "assets/img/meowed.svg", name: "meowed", content: "assets/img/gato-telefone.svg", contentName: "gato-telefone", likedImage: "assets/img/respondeai.svg", likedName: "respondeai", likes: 1293}
    ]

    return (
        <div className="posts">
            {posts.map(e => <Post key={e.id} user={e.user} name={e.name} content={e.content} contentName={e.contentName} likedImage={e.likedImage} likedName={e.likedName} likes={e.likes}/>)}
        </div>
    )
}