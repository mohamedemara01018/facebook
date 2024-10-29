
import { useDispatch } from "react-redux"
import { post_footer_data } from "../../../homeData"
import { set_post_id } from "../../../../../../2-rtk/slices/showPostSice"



function Post_footer({ id }:{id:number}) {
    const dispatch = useDispatch()
    return (
        <div className="post-footer">
            {
                post_footer_data().map((item) => {
                    return <div key={item.id} onClick={() => dispatch(set_post_id({ value: id, state: true }))}>
                        <p >{item.data}</p>
                        <i className={item.icon}></i>
                    </div>
                })
            }
        </div>
    )
}

export default Post_footer