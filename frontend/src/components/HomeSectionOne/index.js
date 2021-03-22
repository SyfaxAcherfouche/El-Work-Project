import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    Label,
    HeroP,
    HeroBtnWrapper,
    ButtonWrapper,
    SearchIcon
} from "./HomeSectionOneElements";
import { Button } from '../ButtonElement'
import Caroussel from '../Caroussel'

const HomeSectionOne = () => {
    const  [hover, setHover] = useState(false)    
    const onHover = () => {
        setHover(!hover)
    }
    const history = useHistory();
    const path = () =>{
      history.push('/freelance')
    }
    return (
      <HeroContainer>
        <HeroBg>
          <Caroussel />
        </HeroBg>
        <HeroContent>
          <HeroH1>La modestie c'est la housse du talent</HeroH1>
          <HeroP>
            Trouvez le talent nécessaire au développement de votre entreprise
            sur <Label>El Work</Label>
          </HeroP>
          <HeroBtnWrapper>
            <ButtonWrapper>
              <Button>Comment ça marche ?</Button>
              <Button
                to="/signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primery="true"
                onClick={path}
              >
                Trouver
                <SearchIcon />
              </Button>
            </ButtonWrapper>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HomeSectionOne
