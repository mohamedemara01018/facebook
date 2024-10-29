
import Post_head from "../home/home-middle/posts/posts-components/Post_head"
import './show-post.css'
import { useEffect, useState } from "react";
import Get_comments from "./show-post-component/Get_comments";
import Post_who from "./show-post-component/Post-who";
import Send_comment from "./show-post-component/Send_comment";
import { useSelector } from "react-redux";

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


function Show_post() {
    const user = JSON.parse(String(localStorage.getItem('user')))
    const [post, setPost] = useState<postType>({} as postType)
    const [comments, setComments] = useState([]);
    const [stateOfIcon, setStateOfIcon] = useState({ state: false, color: false });
    const [input, setInput] = useState('');
    const [comment, setComment] = useState({})
    const id = useSelector((state: { showPost: { value: number } }) => state.showPost.value)
    const state = useSelector((state: { showPost: { state: boolean } }) => state.showPost.state)
    
    async function fetchSpecificPost(id: number) {
        const url = `https://tarmeezacademy.com/api/v1/posts/${id}`
        const responsive = await fetch(url);
        const json = await responsive.json()
        setPost(json.data)
        setComments(json.data.comments)
    }

    useEffect(() => {
        fetchSpecificPost(id)
    }, [id, comment])


    useEffect(() => {
        if (input.length > 0) {
            setStateOfIcon({ ...stateOfIcon, color: true })
        }
        else {
            setStateOfIcon({ ...stateOfIcon, color: false })
        }
    }, [input])


    return (

        <div className="show-post-container" data-show={state ? 'true' : 'false'}>
            <div className="---show-post-container">

                <Post_who post={post} />

                {post && post.author && <div className="show-post-content" >
                    <Post_head name={post.author.name} created_at={post.created_at} profile_image={post.author.profile_image} flag={false} />
                    <div className="post-para" >
                        <p>{post.body}</p>
                    </div>
                    <div className="post-img">
                        <img src={post.image} alt="" />
                    </div>
                    <hr />
                    <h1 dir="rtl">{post.comments_count} تعليق</h1>
                    <hr />
                    {comments.length ? <Get_comments comments={comments} /> : <div>
                        <h2 style={{ textAlign: 'center' }}>لا يوجد تعليقات</h2>
                    </div>}
                </div>}

                <Send_comment stateOfIcon={stateOfIcon} user={user} input={input} setInput={setInput} setStateOfIcon={setStateOfIcon as () => void} setComment={setComment} id={id} />

            </div>
        </div>
    )
}

export default Show_post