import { useDispatch } from "react-redux"
import { set_post_id } from "../../../../2-rtk/slices/showPostSice"
type postType = {
    id: number,
    body: string,
    author: {
        name: string,
        profile_image: string
    },
    comments_count: number,
    image: string,
    created_at: string
}
function Post_who({ post }: { post: postType }) {
    const dispatch = useDispatch()
    return (
        <div className="post-who">
            <i className="fa-solid fa-x" onClick={() => dispatch(set_post_id({ value: 1, state: false }))}></i>
            {post.author && <p dir="rtl">{`منشور ${post.author.name}`}</p>}
            <div></div>
        </div>
    )
}

export default Post_who