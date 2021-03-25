import React, { useState, useEffect, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chip,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Spinner from '../Spinner/index'
import { CompetencesSuggestion, CatégorySuggestion } from "./Data";
import {
  Profile,
  ProfileImage,
  Image,
  ProfileInfo,
  Name,
  Title,
  Adress,
  ProfileCategory,
  FreelanceInformation,
  Competences,
  Description,
  DescriptionTitle,
  DescriptionText,
  SpinnerWrapper,
  ButtonWrapper,
  ButtonUpdate
} from "./UserFreelanceProfileElements";
//import TransferList from '../ListTransfert/index'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
const FreelanceProfile = ({userContext}) => {
  const classes = useStyles();
  /* const [values, setValues] = React.useState({
    amount: "",
    weight: "",
    weightRange: ""
  }); */
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useContext(userContext);
  const name = token?.user?.user_first_name + " " + token?.user?.user_last_name;
  /*  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }; */
  const [competences, setCompetences] = useState([])
  const [title, setTitle] = useState('');
  const [tarif, setTarif] = useState('');
  const [description, setDescription] = useState([]);
  const [category, setCategory] = useState([])  
  const handleChangeCompetence = (e) => {
    setCompetences(e.target.value);
  }
  const handleChangeTitle= (e) => {
    setTitle(e.target.value);
  }
  const handleChangeTarif = (e) => {
    setTarif(e.target.value);
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }

  const update = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const requestOptions = {
      method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          freelance_competences: competences,
          freelance_title: title,
          freelance_tarif: tarif,
          freelance_description: description, 
          user_id: token.user._id,
          category_id: category
        })
      };
      fetch("http://localhost:4000/freelance", requestOptions)
      .then((response) => response.json())
      .then(setLoading(false))
      .catch((err) => {
        console.log(err);
            setLoading(false);
          });
      
  }
  return loading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <div>
      <Profile>
        <ProfileImage>
          {token?.user.user_img_url ? (
            <Image src={token?.user.user_img_url} />
          ) : (
            <Image src="images/AnonymeProfileImage.png" />
          )}
        </ProfileImage>
        <ProfileInfo>
          <Name>{name}</Name>
          <Title>
            <TextField
              label="Titre"
              id="title"
              defaultValue={token?.user?.freelance_id?.freelance_title}
              className={classes.textField}
              onChange={handleChangeTitle}
              margin="normal"
              variant="outlined"
            />
          </Title>
          <Adress>
            <MdLocationOn style={{ marginRight: "2px" }} />
            {token?.user?.user_adress}
          </Adress>
          <TextField
            label="Prix"
            id="tarif"
            defaultValue={token?.user?.freelance_id?.freelance_tarif}
            onChange={handleChangeTarif}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </ProfileInfo>
      </Profile>
      <FreelanceInformation>
        <Competences>
          <DescriptionTitle>Competences</DescriptionTitle>
          <Autocomplete
            multiple
            id="tags-filled"
            options={CompetencesSuggestion.map((option) => option.title)}
            defaultValue={[
              token.token?.user?.freelance_id?.freelance_competences,
            ]}
            onChange={handleChangeCompetence}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Competences"
                placeholder="Competences"
              />
            )}
          />
          <DescriptionTitle>Catégories</DescriptionTitle>
          <Autocomplete
            multiple
            id="tags-filled-2"
            options={CatégorySuggestion.map((option) => option.title)}
            onChange={handleChangeCompetence}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Competences"
                placeholder="Competences"
              />
            )}
          />
        </Competences>
        <Description>
          <DescriptionTitle>Mon Profile</DescriptionTitle>
          <DescriptionText>
            <TextField
              id="outlined-multiline-static"
              label="Mon Profile"
              defaultValue={
                token.token?.user?.freelance_id?.freelance_description
              }
              onChange={handleChangeDescription}
              multiline
              rows={12}
              fullWidth
              variant="filled"
            />
          </DescriptionText>
        </Description>
      </FreelanceInformation>
      <ButtonWrapper>
        <ButtonUpdate>Enregistrer</ButtonUpdate>
      </ButtonWrapper>
    </div>
  );
};

export default FreelanceProfile;
