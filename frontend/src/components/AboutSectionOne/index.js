import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    Label,
    HeroBtnWrapper,
    ButtonWrapper,
    SearchIcon
} from './AboutSectionOneElements'
import { Button } from '../ButtonElement'
import Caroussel from '../Caroussel'

const AboutSectionOne = () => {
    const history = useHistory()
    const path = () => {
        history.push("/freelance")
    }
    return (
      <HeroContainer>
        <HeroBg>
          <Caroussel />
        </HeroBg>
        <HeroContent>
          <HeroH1>
            Grâce à <Label>El Work</Label> Choisissez ! <br /> Avec Qui ? 
            Où ? Quand ? Comment ? <br />
            Travaillez !
          </HeroH1>
          <HeroBtnWrapper>
            <ButtonWrapper>
              <Button onClick={path} >
                Commencer
                <SearchIcon />
              </Button>
            </ButtonWrapper>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default AboutSectionOne
