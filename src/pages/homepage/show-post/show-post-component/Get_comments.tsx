type commentType = {
    map(arg0: (item: commentType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    author: {
        name: string,
        profile_image: string
    }
    body: string,
    id: number
}
function Get_comments({ comments }: { comments: commentType[] }) {
    return (
        <div className="comment-container">
            {
                comments && comments.map((item: commentType) => {
                    return <div key={item.id} className="comment-content">
                        <div className="pro-file">
                            <h3>{item.author.name}</h3>
                            <p>{item.body}</p>
                        </div>
                        <img src={item.author.profile_image} alt="" />
                    </div>
                })
            }
        </div>
    )
}

export default Get_comments