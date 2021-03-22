import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  Label
} from "./AboutSectionTwoElements";

const AboutSectionTwo = (props) => {
  const {
    lightBg,
    id,
    imgStart,
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
                  <Label>El Work®</Label> est une plateforme de services de
                  freelances en Algérie qui a pour but, d’un coté de permettre
                  aux Jeunes Talents Algériens de pouvoir mettre en valeur leurs
                  compétences et les monétiser. D’un autre côté, de permettre
                  aux Entrepreneurs Algérien de trouver les profiles et les
                  compétences nécessaires pour le développement de leurs
                  entreprises. Et cela en leur donnant le pouvoir de choisir et
                  de négocier avec plusieurs freelances des quatre coins du pays
                  gratuitement et sans engagement ! Chez <Label>El Work®</Label>
                  , nous croyons en une nouvelle méthode et un nouveau monde de
                  travail. Un monde où nous pouvons choisir avec qui travailler
                  et la manière dont nous voulons travailler.
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

export default AboutSectionTwo;
