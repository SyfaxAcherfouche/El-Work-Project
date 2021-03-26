import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    Label,
} from './HowItWorkSectionOneElements'
import Caroussel from '../Caroussel'

const HowItWorkSectionOne = () => {
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
            <Label>El Work</Label>, Comment Ça Marche ?
          </HeroH1>
        </HeroContent>
      </HeroContainer>
    );
}

export default HowItWorkSectionOne
