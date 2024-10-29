import { useRef, useState } from "react"


function Create_post_img({ setImg }: { setImg: (img: File) => void }) {
    const [selectedImage, setSelectedImage] = useState<string>('')
    const [toggle, setToggle] = useState(true)
    const input_file = useRef<HTMLInputElement>(null)

    function handleClickOnContent() {
        input_file.current?.click();
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];
        setImg(file as File)
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setToggle(false)
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="image-loading-container">

            {toggle ? <div className="image-loading-content" onClick={(handleClickOnContent)}>
                <i className="fa-solid fa-images"></i>
                <h3>اضافة صورة</h3>
                <p>او السحب والافلات</p>
            </div> : <div className="img-part">
                <i className="fa-solid fa-x" onClick={() => { setToggle(true); setSelectedImage("") }}></i>
                <img src={selectedImage} />
            </div>}
            <input type="file" ref={input_file} onChange={handleFileChange} style={{ display: 'none' }} />
        </div>
    )
}

export default Create_post_img