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
    const [values, setValues] = React.useState({
        password: "", // password value
        showPassword: false,
    });
    const [passwordConfi, setPasswordConfi] = useState(""); // password confirmation value
    const [gender, setGender] = useState("homme"); // gender value
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // set values
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
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };
    const handleChangePasswordConfi = (e) => {
        setPasswordConfi(e.target.value);
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
            user_password: values.password,
            user_first_name: firstName,
            user_last_name: lastName,
            user_phone_number: phoneNumber,
            user_adress: adress,
            user_gender: gender,
            freelance_id: {},
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
            console.log(values.password, email, firstName);
            setIsLoading(false);
        });
        console.log(values.password, email, firstName, lastName, adress, phoneNumber, gender, passwordConfi);
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
                <Grid container spacing={6}>
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
                    className={classes.field}
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
                    label="Prénom"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={handleChangeFirstName}
                    />
                </Grid>
                <Grid xs={6}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Téléphone"
                    name="tel"
                    autoComplete="tel"
                    autoFocus
                    onChange={handleChangePhoneNumber}
                    />
                </Grid>
                <Grid xs={6}>
                    <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    >
                    <InputLabel id="demo-simple-select-filled-label">
                        Votre localité
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
                        <MenuItem value="Bejaïa">Bejaïa</MenuItem>
                        <MenuItem value="Biskra">Biskra</MenuItem>
                        <MenuItem value="Béchar">Béchar</MenuItem>
                        <MenuItem value="Blida">Blida</MenuItem>
                        <MenuItem value="Bouira">Bouira</MenuItem>
                        <MenuItem value="Tamanrasset">Tamanrasset</MenuItem>
                        <MenuItem value="Tébessa">Tébessa</MenuItem>
                        <MenuItem value="Tlemcen">Tlemcen</MenuItem>
                        <MenuItem value="Tiaret">Tiaret</MenuItem>
                        <MenuItem value="Tizi-Ouzou">Tizi-Ouzou</MenuItem>
                        <MenuItem value="Alger">Alger</MenuItem>
                        <MenuItem value="Djelfa">Djelfa</MenuItem>
                        <MenuItem value="Jijel">Jijel</MenuItem>
                        <MenuItem value="Sétif">Sétif</MenuItem>
                        <MenuItem value="Saïda">Saïda</MenuItem>
                        <MenuItem value="Skikda">Skikda</MenuItem>
                        <MenuItem value="Sidi Bel Abbès">Sidi Bel Abbès</MenuItem>
                        <MenuItem value="Annaba">Annaba</MenuItem>
                        <MenuItem value="Guelma">Guelma</MenuItem>
                        <MenuItem value="Constantine">Constantine</MenuItem>
                        <MenuItem value="Médéa">Médéa</MenuItem>
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
                        <MenuItem value="Boumerdès">Boumerdès</MenuItem>
                        <MenuItem value="El Tarf">El Tarf</MenuItem>
                        <MenuItem value="Tindouf">Tindouf</MenuItem>
                        <MenuItem value="Tissemsilt">Tissemsilt</MenuItem>
                        <MenuItem value="El Oued">El Oued</MenuItem>
                        <MenuItem value="Khenchela">Khenchela</MenuItem>
                        <MenuItem value="Souk Ahras">Souk Ahras</MenuItem>
                        <MenuItem value="Tipaza">Tipaza</MenuItem>
                        <MenuItem value="Mila">Mila</MenuItem>
                        <MenuItem value="Aïn Defla">Aïn Defla</MenuItem>
                        <MenuItem value="Naâma">Naâma</MenuItem>
                        <MenuItem value="Aïn Témouchent">Aïn Témouchent</MenuItem>
                        <MenuItem value="Ghardaïa">Ghardaïa</MenuItem>
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
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                </Grid>
                <Grid xs={12}>
                    <TextField
                    value={passwordConfi}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirmez votre Mot de passe"
                    type="password"
                    id="password-confirm"
                    autoComplete="new-password"
                    onChange={handleChangePasswordConfi}
                    />
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
                onClick={passwordConfi === values.password ? submit : error}
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
                    Vous avez déjà un compte ?
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
