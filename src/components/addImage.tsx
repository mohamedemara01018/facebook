import React, { useRef, useState } from "react";


function AddImage({ setImg }: { setImg: (img: File) => void }) {

    const [selectedImage, setSelectedImage] = useState<string>('');
    const [toggle, setToggle] = useState(true)
    const fileInputRef = useRef<HTMLInputElement>(null); // Ref to access hidden file input

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0]; // Get the selected file
        setImg(file as File)
        if (file) {
            const reader = new FileReader(); // Create a FileReader to read the image
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setToggle(false) // Set the image as a base64 string
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click(); // Programmatically trigger file input
    };
    return (
        <div className="file-upload-container">
            {toggle ? <div className="content" onClick={() => handleButtonClick()}>
                <i className="fa-solid fa-images"></i>
                <h2>اضافه صوره</h2>
                <p>او اسحب والافلات</p>
            </div> : <div className="image">
                <i className="fa-solid fa-xmark" onClick={() => { setToggle(true); setSelectedImage('') }}></i>
                <img src={selectedImage} alt={selectedImage} />
            </div>}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide default input
            // accept="image/*"
            />
        </div>
    )
}

export default AddImage