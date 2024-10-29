import { useEffect, useState } from "react"


function Send_Message_Footer() {
    const [input, setInput] = useState('');
    const [color, setColor] = useState(false);

    useEffect(() => {
        if (input.length == 0) {
            setColor(false)
        }

    }, [input])
    const handleClick = () => {
        setInput("لا يصلح ارسال رسائل");
        setColor(true)
    }
    return (
        <div className="send-message-footer-container">
            <div className="send-part">
                {input && <i className="fa-solid fa-paper-plane" onClick={handleClick}></i>}
                <div className="input">
                    <input type="text" dir="rtl" placeholder="Aa" value={input} onChange={(e) => setInput(e.target.value)} data-color={color && input.length ? 'true' : 'false'} />
                </div>
            </div>
        </div>
    )
}

export default Send_Message_Footer