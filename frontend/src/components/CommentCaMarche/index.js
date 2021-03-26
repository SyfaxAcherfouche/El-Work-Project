import React from "react";
import {
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    TopLine,
    Subtitle,
    ImgWrap,
    Img,
} from "./commentCaMarcheElements";

const CommentCaMarche = (props) => {
    const { lightBg, id, topLine, description, img, alt } = props;
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle>
                {description}
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

export default CommentCaMarche;
