
import { commentType } from "../../../../types"

function Send_comment({ stateOfIcon, user, input, setInput, setStateOfIcon, setComment, id }: commentType) {
    const token = JSON.parse(String(localStorage.getItem('token')))
    async function fetchComment(id: number) {
        const url = `https://tarmeezacademy.com/api/v1/posts/${id}/comments`
        const responsive = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "body": input
            })
        })
        const json = await responsive.json();
        setComment(json)
    }
    return (
        <div className="send-comment">
            <div className="inputs">
                {stateOfIcon.state && <i className="fa-solid fa-paper-plane" onClick={() => fetchComment(id)} data-color={stateOfIcon.color ? 'true' : 'false'}></i>}
                <input dir="rtl" type="text" placeholder="اكتب تعليقا..." value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setStateOfIcon({ ...stateOfIcon, state: true })} onBlur={input.length ? () => setStateOfIcon({ ...stateOfIcon, state: true }) : () => setStateOfIcon({ ...stateOfIcon, state: false })} />
            </div>
            {user && <img src={user.profile_image} alt="" />}
        </div>
    )
}

export default Send_comment