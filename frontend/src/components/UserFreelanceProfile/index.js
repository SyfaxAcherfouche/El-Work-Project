import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import { MdLocationOn } from "react-icons/md";
import { Chip } from "@material-ui/core";
import Spinner from '../Spinner/index'
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
  SpinnerWrapper
} from "./UserFreelanceProfileElements";

const UserFreelanceProfile = () => {

  const [loading, setLoading] = useState(false);
  const user = cookie.load("user");
  useEffect(() => {
    
  }, []);

  return loading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <div>
      <Profile>
        <ProfileImage>
          <Image src={user.user_img_url} />
        </ProfileImage>
        <ProfileInfo>
          <Name>{user.name}</Name>
          <Title>{user.freelance_id.freelance_title} </Title>
          <Adress>
            <MdLocationOn style={{ marginRight: "2px" }} />
            {user.user_adress}
          </Adress>
          <Price>A Partir de {user.freelance_id.freelance_tarif} DA</Price>
        </ProfileInfo>
        <ProfileContact>
          <a href={`mailto:${user.user_email}`}>
            <Button>Contacter</Button>
          </a>
        </ProfileContact>
      </Profile>
      <FreelanceInformation>
        <Competences>
          <DescriptionTitle>Competences</DescriptionTitle>
          {user.freelance_id.freelance_competences.map((chip) => (
            <Chip label={chip} variant="outlined" style={{ margin: "0.5em" }} />
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
            qui. Alias asperiores dolores soluta odit illum fuga qui ea, dolor
            laboriosam at quod nam vitae corporis? Iste recusandae eum possimus,
            assumenda quis provident rerum voluptate, explicabo maxime quo,
            impedit autem? Quis cupiditate commodi vel expedita, amet
            accusantium recusandae, magni praesentium, maxime temporibus numquam
            molestias deserunt. Possimus eum, aliquid nesciunt autem iure porro
            modi accusantium rerum voluptate incidunt quia dicta sit? Laudantium
            nostrum aliquam nulla. Alias officiis facere natus atque neque
            voluptatem blanditiis assumenda vero quibusdam nulla excepturi nam
            deleniti repellendus veniam, tempora nostrum iure provident
            voluptatum! Reprehenderit voluptatum laboriosam dolorum. Incidunt
            consectetur quo magni culpa dolorem provident fuga laudantium
            molestias at laboriosam, nihil minima totam nobis excepturi
            corrupti, repudiandae pariatur earum. Dolores necessitatibus
            adipisci impedit nobis sint rerum molestias animi. Cupiditate iusto
            ipsa deserunt, facilis amet aperiam suscipit blanditiis accusamus
            pariatur velit corporis sint debitis esse illo voluptatum, delectus,
            tempore itaque sit! Earum culpa saepe veritatis quas tenetur, error
            quaerat? Ducimus voluptates saepe id ex libero cupiditate possimus
            reprehenderit facere quia laborum aperiam fugiat excepturi dolores
            vero consequatur natus, sint nesciunt labore fuga quod quaerat?
            Reprehenderit rem omnis facilis. Voluptatum. Doloremque illo
            eligendi, eveniet minima nemo iste voluptatem modi. Explicabo, modi!
            Qui sunt itaque et error praesentium quos, eligendi similique
            obcaecati repellendus quidem, eius sapiente quas quo doloribus, sed
            assumenda?
          </DescriptionText>
        </Description>
      </FreelanceInformation>
    </div>
  );
};

export default UserFreelanceProfile;
