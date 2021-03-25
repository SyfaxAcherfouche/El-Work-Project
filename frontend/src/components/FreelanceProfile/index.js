import React, { useState, useEffect, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { Chip } from "@material-ui/core";
import Spinner from "../Spinner/index";
import {
  Profile,
  ProfileImage,
  Image,
  ProfileInfo,
  Name,
  Title,
  Adress,
  Price,
  ProfileContact,
  Button,
  FreelanceInformation,
  Competences,
  Description,
  DescriptionTitle,
  DescriptionText,
  SpinnerWrapper,
} from "./FreelanceProfileElements";

const FreelanceProfile = ({userContext}) => {
  var obj = {
    user_last_name: "",
    user_first_name: "",
    user_email: "",
    user_adress: "",
    user_img_url: "",
    user_phone_number: "",
    freelance_id: "",
    name: "",
  };

  const [loading, setLoading] = useState(false);
  const [freelance, setFreelance] = useState(obj);
  const { token, setToken } = useContext(userContext);
  
  const fetchFreelance = async () => {
    setLoading(true);
    const id = window.location.href.split("/").splice(5, 1);
    const Auth = token?.token
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Auth
      }
    }
    const data = await fetch(`http://localhost:4000/users/${id}`, requestOptions);
    const item = await data.json();
    console.log(freelance, 'je suis freelanceeeee');
    setFreelance({
      user_last_name: item[0].user_last_name,
      user_first_name: item[0].user_first_name,
      user_email: item[0].user_email,
      user_adress: item[0].user_adress,
      user_img_url: item[0].user_img_url,
      user_phone_number: item[0].user_phone_number,
      freelance_id: item[0].freelance_id,
      freelance_competences: item[0].freelance_id.freelance_competences,
      name: item[0].user_last_name + " " + item[0].user_first_name,
    })
  };
  useEffect(() => {
    fetchFreelance()
    setLoading(false);
  }, [setFreelance]);

  return loading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <div>
      <Profile>
        <ProfileImage>
          {freelance?.user_img_url ? (
            <Image src={freelance?.user_img_url} />
          ) : (
            <Image src="images/AnonymeProfileImage.png" />
          )}
        </ProfileImage>
        <ProfileInfo>
          <Name>{freelance.name}</Name>
          <Title>{freelance.freelance_id.freelance_title} </Title>
          <Adress>
            <MdLocationOn style={{ marginRight: "2px" }} />
            {freelance.user_adress}
          </Adress>
          <Price>A Partir de {freelance.freelance_id.freelance_tarif} DA</Price>
        </ProfileInfo>
        <ProfileContact>
          <a href={`mailto:${freelance.user_email}`}>
            <Button>Envoyer un mail</Button>
          </a>
          <a href={`tel:${freelance.user_phone_number}`}>
            <Button>Appeler</Button>
          </a>
        </ProfileContact>
      </Profile>
      <FreelanceInformation>
        <Competences>
          <DescriptionTitle>Competences</DescriptionTitle>
          {freelance?.freelance_competences?.map((chip, key) => (
            <Chip
              key={key}
              label={chip}
              variant="outlined"
              style={{ margin: "0.5em" }}
            />
          ))}
        </Competences>
        <Description>
          <DescriptionTitle>
            {freelance.name} en quelques mots{" "}
          </DescriptionTitle>
          <DescriptionText>
            {freelance?.freelance_id?.freelance_description}
          </DescriptionText>
        </Description>
      </FreelanceInformation>
    </div>
  );
};

export default FreelanceProfile;
