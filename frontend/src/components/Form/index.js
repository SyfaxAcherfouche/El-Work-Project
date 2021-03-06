import React, { useState } from "react";
import { Link as LinkN, useHistory } from "react-router-dom";
import Spinner from "../Spinner/index";
import Copyright from "../Copyright/Copyright";
import clsx from "clsx";
import {
    Avatar,
    CssBaseline,
    TextField,
    Box,
    Typography,
    makeStyles,
    Container,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Grid,
    MenuItem,
    Select,
    InputLabel,
    Button,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";



// material-ui style
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "1em",
    },
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "url(images/Carousel-2.jpg) no-repeat center center fixed",
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        margin: "0",
    },
    paper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(3, 6, 3, 3),
        backgroundColor: "rgba(200, 200, 200, 0.6)",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#FF1744",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    gender: {
        display: "flex",
        flexFlow: "row nowrap",
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
    },
    icon: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "2.5em",
    },
    h1: {
        color: "#FF1744",
    },
    lien1: {
        color: "#564C47",
        fontSize: "12px",
        marginTop: "1em",
    },
    lien: {
        color: "#3F51B5",
            fontSize: "12px",
            marginLeft: "6px",
        },
    margin: {
        marginBottom: "12px"
    },
    paddingRight: {
        padding: theme.spacing(0, .5, 0, 0)
    },
    paddingLeft: {
        padding: theme.spacing(0, 0, 0, .5)
    }
}));

const Form = () => {
    const classes = useStyles(); // style
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false); // hook for spinner

    //from values
    const [firstName, setFirstName] = useState(""); // first name value
    const [lastName, setLastName] = useState(""); // last name value
    const [phoneNumber, setPhoneNumber] = useState(""); // phone number value
    const [adress, setAdress] = useState(""); // adress value
    const [email, setEmail] = useState(""); // email value
    const [password, setPassword] = React.useState({
        password: "", // password value
        showPassword: false,
    });
    const [passwordConfi, setPasswordConfi] = React.useState({
        password: "", // password confirmation value
        showPassword: false,
    });
    const [gender, setGender] = useState("homme"); // gender value
    

    // setValues 

    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPasswordConfi = () => {
        setPasswordConfi({ ...passwordConfi, showPassword: !passwordConfi.showPassword });
    };
    const handleMouseDownPasswordConfi = (event) => {
        event.preventDefault();
    };
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (prop) => (e) => {
        setPassword({ ...password, [prop]: e.target.value });
    };
    const handleChangePasswordConfi = (prop) => (e) => {
        setPasswordConfi({ ...password, [prop]: e.target.value });
    };
    const handleChangeAdress = (e) => {
        setAdress(e.target.value);
    };
    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };

  // POST request (register)
    const submit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_email: email,
            user_password: password.password,
            user_first_name: firstName,
            user_last_name: lastName,
            user_phone_number: phoneNumber,
            user_adress: adress,
            user_gender: gender,
            user_isFreelance: false,
        }),
        };
        fetch("http://localhost:4000/register", requestOptions)
        .then((response) => response.json())
        .then((res) => {
            setIsLoading(false);
        })
        .then(history.push("/"))
        .catch((err) => {
            console.log(err);
            console.log(password.password, email, firstName);
            setIsLoading(false);
        });
        console.log(password.password, email, firstName, lastName, adress, phoneNumber, gender, passwordConfi.password);
    };
    const error = () => {
        alert("Mot de passe non identique !");
    }; 
    return (
        <div className={classes.page}>
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.icon}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.h1}>
                    S'inscrire
                    </Typography>
                </div>
            <form className={classes.root} id="form">
                <Grid container spacing={7}>
                <Grid xs={6}>
                    <TextField
                    value={lastName}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Nom"
                    name="lastname"
                    autoComplete="name"
                    autoFocus
                    onChange={handleChangeLastName}
                    className={classes.paddingRight}
                    />
                </Grid>
                <Grid xs={6}>
                    <TextField
                    value={firstName}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first_name"
                    label="Pr??nom"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={handleChangeFirstName}
                    className={classes.paddingLeft}
                    />
                </Grid>
                <Grid xs={6}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="T??l??phone"
                    name="tel"
                    autoComplete="tel"
                    autoFocus
                    onChange={handleChangePhoneNumber}
                    className={classes.paddingRight}
                    />
                </Grid>
                <Grid xs={6}>
                    <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    className={classes.paddingLeft}
                    >
                    <InputLabel id="demo-simple-select-filled-label">
                        Votre localit??
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={adress}
                        onChange={handleChangeAdress}
                    >
                        <MenuItem value="Adrar">Adrar</MenuItem>
                        <MenuItem value="Chlef">Chlef</MenuItem>
                        <MenuItem value="Laghouat">Laghouat</MenuItem>
                        <MenuItem value="Oum El Bouaghi">Oum El Bouaghi</MenuItem>
                        <MenuItem value="Batna">Batna</MenuItem>
                        <MenuItem value="Beja??a">Beja??a</MenuItem>
                        <MenuItem value="Biskra">Biskra</MenuItem>
                        <MenuItem value="B??char">B??char</MenuItem>
                        <MenuItem value="Blida">Blida</MenuItem>
                        <MenuItem value="Bouira">Bouira</MenuItem>
                        <MenuItem value="Tamanrasset">Tamanrasset</MenuItem>
                        <MenuItem value="T??bessa">T??bessa</MenuItem>
                        <MenuItem value="Tlemcen">Tlemcen</MenuItem>
                        <MenuItem value="Tiaret">Tiaret</MenuItem>
                        <MenuItem value="Tizi-Ouzou">Tizi-Ouzou</MenuItem>
                        <MenuItem value="Alger">Alger</MenuItem>
                        <MenuItem value="Djelfa">Djelfa</MenuItem>
                        <MenuItem value="Jijel">Jijel</MenuItem>
                        <MenuItem value="S??tif">S??tif</MenuItem>
                        <MenuItem value="Sa??da">Sa??da</MenuItem>
                        <MenuItem value="Skikda">Skikda</MenuItem>
                        <MenuItem value="Sidi Bel Abb??s">Sidi Bel Abb??s</MenuItem>
                        <MenuItem value="Annaba">Annaba</MenuItem>
                        <MenuItem value="Guelma">Guelma</MenuItem>
                        <MenuItem value="Constantine">Constantine</MenuItem>
                        <MenuItem value="M??d??a">M??d??a</MenuItem>
                        <MenuItem value="Monstaganem">Monstaganem</MenuItem>
                        <MenuItem value="M'Sila">M'Sila</MenuItem>
                        <MenuItem value="Mascara">Mascara</MenuItem>
                        <MenuItem value="Ouargla">Ouargla</MenuItem>
                        <MenuItem value="Oran">Oran</MenuItem>
                        <MenuItem value="El Bayadh">El Bayadh</MenuItem>
                        <MenuItem value="Illizi">Illizi</MenuItem>
                        <MenuItem value="Bordj Bou Arreridj">
                        Bordj Bou Arreridj
                        </MenuItem>
                        <MenuItem value="Boumerd??s">Boumerd??s</MenuItem>
                        <MenuItem value="El Tarf">El Tarf</MenuItem>
                        <MenuItem value="Tindouf">Tindouf</MenuItem>
                        <MenuItem value="Tissemsilt">Tissemsilt</MenuItem>
                        <MenuItem value="El Oued">El Oued</MenuItem>
                        <MenuItem value="Khenchela">Khenchela</MenuItem>
                        <MenuItem value="Souk Ahras">Souk Ahras</MenuItem>
                        <MenuItem value="Tipaza">Tipaza</MenuItem>
                        <MenuItem value="Mila">Mila</MenuItem>
                        <MenuItem value="A??n Defla">A??n Defla</MenuItem>
                        <MenuItem value="Na??ma">Na??ma</MenuItem>
                        <MenuItem value="A??n T??mouchent">A??n T??mouchent</MenuItem>
                        <MenuItem value="Gharda??a">Gharda??a</MenuItem>
                        <MenuItem value="Relizane">Relizane</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid xs={12}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChangeEmail}
                    />
                </Grid>
                <Grid xs={12}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={password.showPassword ? 'text' : 'password'}
                        value={password.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {password.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                        required
                        margin="normal"
                        name="password"
                        autoComplete="new-password"
                    />
                </FormControl>
                </Grid>
                <Grid sl={12}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirmez votre mot de passe</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-passwordConfi"
                            type={passwordConfi.showPassword ? 'text' : 'password'}
                            value={passwordConfi.password}
                            onChange={handleChangePasswordConfi('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPasswordConfi}
                                    onMouseDown={handleMouseDownPasswordConfi}
                                    edge="end"
                                    >
                                    {passwordConfi.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                            required
                            margin="normal"
                            name="password"
                            autoComplete="new-password"
                        />
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl component="fieldset">
                        <RadioGroup
                            required
                            aria-label="gender"
                            name="gender"
                            className={classes.gender}
                            value={gender}
                            onChange={handleChangeGender}
                        >
                            <FormControlLabel
                            value="homme"
                            control={<Radio color="primary" />}
                            label="Homme"
                            />
                            <FormControlLabel
                            value="femme"
                            control={<Radio color="secondary" />}
                            label="Femme"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={passwordConfi.password === password.password ? submit : error}
                >
                {isLoading ? <Spinner style={{width: '100%', height: '100%'}} /> : "S'inscrire"}
                </Button>
                <Grid item xs={12} sm container>
                <Grid
                    item
                    className={classes.lien1}
                    justify="center"
                    alignItems="center"
                >
                    Vous avez d??j?? un compte ?
                    <LinkN to="/login" className={classes.lien} variant="body2">
                    Se connecter
                    </LinkN>
                </Grid>
                </Grid>
            </form>
            </div>
            <Box mt={8}>
            <Copyright />
            </Box>
        </Container>
        </div>
    );
};

export default Form;
