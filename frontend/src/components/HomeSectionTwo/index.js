import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
} from "./HomeSectionTwoElements";

const HomeSectionTwoElements = (props) => {
  const { lightBg, id, topLine, img, alt, description } = props;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Subtitle>{description} </Subtitle>
          </TextWrapper>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default HomeSectionTwoElements;
