

function Send_Message_body({ image, name }: { image: string, name: string }) {
    return (
        <div className="send-message-body-container">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>انتم اصدقاء علي الفيسبوك</p>
        </div>
    )
}

export default Send_Message_body