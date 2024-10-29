import { useSelector } from "react-redux"
import Send_Message_body from "./send-message-components/Send_Message_body"
import Send_Message_Footer from "./send-message-components/Send_Message_Footer"
import Send_Message_Head from "./send-message-components/Send_Message_Head"
import './send-message.css'
import { useEffect, useState } from "react"
type userdataType = {
    data: {
        profile_image: string,
        username: string
    }
}
function Send_Message() {
    const [userData, setUserData] = useState<userdataType>({} as userdataType)
    const user_id = useSelector((state: { showUser: { value: number } }) => state.showUser.value);

    async function fetchUser(id: number) {
        const url = `https://tarmeezacademy.com/api/v1/users/${id}`
        const response = await fetch(url);
        const json = await response.json()
        setUserData(json)
    }

    useEffect(() => {
        fetchUser(user_id)
    }, [user_id])
    const img = userData && userData.data ? userData.data.profile_image : ''
    const name = userData && userData.data ? userData.data.username : ''

    const stateOfShowing = useSelector((state: { showUser: { state: boolean } }) => state.showUser.state);
    return (
        <div className="send-message-container" data-show={stateOfShowing ? 'true' : 'false'} >
            <Send_Message_Head image={img} name={name} />
            <Send_Message_body image={img} name={name} />
            < Send_Message_Footer />
        </div>
    )
}

export default Send_Message