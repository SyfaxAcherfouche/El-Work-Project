
import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";
import cookie from "react-cookies";
import Spinner from '../Spinner/index'
import {
    ProfileWrapper,
    InfoWrapper,
    ImageWrapper,
    Image,
    UploadInputWrapper,
    InputImage,
    NameWrapper,
    ContactWrapper,
    ButtonWrapper,
    ButtonUpdate,
    CircularWrapper
} from "./AccountElement";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { AccountCircle } from "@material-ui/icons";

//Material ui styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

//Cloudinary setting
const url = "https://api.cloudinary.com/v1_1/dkxt4vhsu/image/upload";
const preset = "zgon55tz";
const options = {
    eager:
        [{ width: 400, height: 300, crop: "pad" }]
}


const Profile = (props) => {
    const [imageurl, setImageurl] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setImage(e.target.files[0]);
        setImageurl(URL.createObjectURL(e.target.files[0]));
    };
    const [infos, setInfos] = useState({});
    useEffect(() => {
        setInfos(cookie.load("user"));
        console.log(infos, "je suis info");
    }, []);
    
    const onSubmit = async () => {
        if(image) {
        const user = cookie.load("user");
        const token = cookie.load("token");
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", preset);
        formData.append("options", options);
        try {
            setLoading(true);
            const res = await axios.post(url, formData);
                            var values = {
                                user_first_name: user.user_first_name,
                                user_last_name: user.user_last_name,
                                user_adress: user.user_adress,
                                user_email: user.user_email,
                                user_gender: user.user_gender,
                                user_img_url: res.data.secure_url,
                                user_password: user.user_password,
                                user_phone_number: user.user_phone_number,
                            };
        const requestOptions = {
            headers: {"Authorization": token },
        };
        const image = await axios.put( "http://localhost:4000/users/"+ user._id +"/update",values)
        cookie.save("user", image.data, {
            path: "/",
        });
        console.log(image, 'je suis la reponse 2')
        setInfos(cookie.load("user"))
        setLoading(false);
        console.log(image.data);
        setImage(image.data.user_img_url);
        } catch (err) {
        console.error(err);
        }
        }else{
            const user = cookie.load('user')
            //const token = cookie.load('token')
            try {
                setLoading(true);
                var values = {
                    user_first_name: user.user_first_name,
                    user_last_name: user.user_last_name,
                    user_adress: user.user_adress,
                    user_email: user.user_email,
                    user_gender: user.user_gender,
                    user_img_url: user.secure_url,
                    user_password: user.user_password,
                    user_phone_number: user.user_phone_number,
                };

                /* const requestOptions = {
                    headers: {"Authorization": token },
                }; */
                const image = await axios.put( "http://localhost:4000/users/"+ user._id +"/update",values)
                cookie.save("user", image.data, {
                    path: "/",
                });
                console.log(image, 'je suis la reponse 2')
                setInfos(cookie.load("user"))
                setLoading(false);
                console.log(image.data);
                setImage(image.data.user_img_url);
            } catch (err) {
            console.error(err);
            }
        }
    }

    const classes = useStyles();
    const user = cookie.load("user");
    return (
        <>
        { loading ? 
        <CircularWrapper>
            <Spinner/> 
        </CircularWrapper>
        :
        <ProfileWrapper>
            <ImageWrapper>
            {imageurl ? (
                <Image src={imageurl} alt="monimage" className="pic" />
            ) : infos.user_img_url ? (
                <Image src={infos.user_img_url} alt="monimage" className="pic" />
            ) : (
                <AccountCircle
                    style={{ color: "#27DEBF", width: "250px", height: "250px" }}
                />
            )}
            <UploadInputWrapper>
                <InputImage type="file" name="image" onChange={onChange} />
            </UploadInputWrapper>
            </ImageWrapper>

            <InfoWrapper>
            <NameWrapper>
                <TextField
                label="Prénom"
                id="first-name"
                defaultValue={user.user_first_name}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
                <TextField
                label="Nom"
                id="last-name"
                defaultValue={user.user_last_name}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
            </NameWrapper>

            <ContactWrapper>
                <TextField
                label="Email"
                id="email"
                defaultValue={user.user_email}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
                <TextField
                label="Téléphone"
                id="téléphone"
                defaultValue={user.user_phone_number}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
            </ContactWrapper>

            <ContactWrapper>
                <TextField
                label="Adress"
                id="adress"
                defaultValue={user.user_adress}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
                <TextField
                label="Genre"
                id="gender"
                defaultValue={user.user_gender}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
            </ContactWrapper>
            <ButtonWrapper>
                <ButtonUpdate onClick={onSubmit}>
                    Update
                </ButtonUpdate>
            </ButtonWrapper>
            </InfoWrapper>

        </ProfileWrapper>
    }
    </>
    );
}
export default Profile;
