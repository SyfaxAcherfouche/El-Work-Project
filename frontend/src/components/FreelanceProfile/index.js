import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
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

const FreelanceProfile = () => {
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
  
  const fetchFreelance = async () => {
    setLoading(true);
    const id = window.location.href.split("/").splice(5, 1);
    const token = cookie.load("token");
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    const data = await fetch(`http://localhost:4000/users/${id}`, requestOptions);
    const item = await data.json();
    console.log(item, 'je suis item');
    setFreelance({
      user_last_name: item[0].user_last_name,
      user_first_name: item[0].user_first_name,
      user_email: item[0].user_email,
      user_adress: item[0].user_adress,
      user_img_url: item[0].user_img_url,
      user_phone_number: item[0].user_phone_number,
      freelance_id: item[0].freelance_id,
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
          <Image src={freelance.user_img_url} />
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
          {freelance?.freelance_id?.freelance_competences !== null?.map((chip, key) => (
            <Chip
              key={key}
              label={chip}
              variant="outlined"
              style={{ margin: "0.5em" }}
            />
          ))}
        </Competences>
        <Description>
          <DescriptionTitle>Description</DescriptionTitle>
          <DescriptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, non
            nihil. Porro quas totam adipisci, voluptates maxime dolor? Amet
            voluptates, et suscipit recusandae voluptate repudiandae. Alias
            atque ratione ex provident? Sequi tenetur iste, culpa, maiores rerum
            soluta ducimus quisquam aliquid nulla voluptas neque, est maxime
            esse quidem blanditiis velit delectus totam. Ea dolorum, voluptas
            natus suscipit asperiores expedita magni modi. Natus perferendis
            quae at eius sunt voluptatem voluptate repudiandae ea, obcaecati
            quod vitae incidunt eligendi molestias odit doloremque ipsam minima
            nemo deserunt dolores? Eligendi ex dignissimos architecto iure, sit
            qui.
          </DescriptionText>
        </Description>
      </FreelanceInformation>
    </div>
  );
};

export default FreelanceProfile;
