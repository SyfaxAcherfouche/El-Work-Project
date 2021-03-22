import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  Label
} from "./AboutSectionFourElements";

const AboutSectionFour = (props) => {
  const {
    lightBg,
    id,
    topLine,
    img,
    alt
  } = props;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Subtitle>
              Les catégories des services qu’on peut trouver sur{" "}
              <Label>El Work®</Label> sont : Développement (Développeurs
              Front-End, Développeurs Back-End, Développeurs Full-Stack,
              Développeurs Mobile, Développeurs CMS, Intégrateur Web), Graphisme
              & Design (Infographiste, Webdesigner, Illustrateur, UX design, UI
              design, Montion Design, Modélisation 2D & 3D), Marketing Digital
              (Réseaux Sociaux, Stratégie de Communication, Rédaction Web,
              Marketing de Contenu, Rédaction SEO, Wordpress, Google Analytics,
              Community Manager, Influenceur) , Visual Art (Photographe,
              Réalisateur Vidéo, Monteur Vidéo), Rédaction & Traduction
              (Concepteur Rédacteur, Traducteur, Relecture & Corrections)
            </Subtitle>
          </TextWrapper>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutSectionFour;
