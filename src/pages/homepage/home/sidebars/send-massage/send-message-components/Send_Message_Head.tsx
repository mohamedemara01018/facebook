import { useDispatch } from "react-redux"
import { set_user_id } from "../../../../../../2-rtk/slices/showUserslice"


function Send_Message_Head({ image, name }: { image: string, name: string }) {
    const dispatch = useDispatch()
    return (
        <div className="send-message-head-container">
            <i className="fa-solid fa-x" onClick={() => dispatch(set_user_id({ value: 1, state: false }))}></i>
            <div className="right-part">
                <div>
                    <h3>{name}</h3>
                    <p>نشط الان</p>
                </div>
                <img src={image} alt='pro_img' />
            </div>
        </div>
    )
}

export default Send_Message_Head