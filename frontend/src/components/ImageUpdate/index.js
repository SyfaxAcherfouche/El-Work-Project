import React, { useState, useEffect } from 'react'
import axios from 'axios';


const ImageUpdate = () => {
    const url = 'https://api.cloudinary.com/v1_1/dkxt4vhsu'
    const preset = 'MonProjet'

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const onChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', preset);
        try {
        setLoading(true);
        const res = await axios.post(url, formData);
        const user_img_url = res.data.secure_url;
        const image = await axios.post('http://localhost:3000/users', {
            user_img_url
        });
        setLoading(false);
        setImage(image.data);
        } catch (err) {
        console.error(err);
        }
    };
    return (
        <div className="container">
            <h1 className="center red-text">React Image Upload</h1>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Browse</span>
                    <input type="file" name="image" onChange={onChange} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <div className="center">
                <button onClick={onSubmit} className="btn center">
                    upload
                </button>
            </div>
        </div>
    );
}

export default ImageUpdate
