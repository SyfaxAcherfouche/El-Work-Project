import React from 'react';
import { useHistory } from 'react-router-dom'
import {
    FooterComposant,
    FooterSections,
    FooterTitle,
    FooterList,
    FooterRow,
    Path,
    SocialMedia,
    Facebook,
    Instagram,
    Linkedin,
    Label,
    Maps

} from './FooterElements'
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    HomeOutlined
} from "@ant-design/icons";
const Footer = () => {
    const history = useHistory();
    const pathToAboutPage = () => {
        history.push('/about')
    }
    const pathToFreelancePage = () => {
        history.push("/freelance");
    };
    const pathToHowItWorksPage = () => {
        history.push("/comment-ça-marche");
    };
    return (
        <FooterComposant>
            <FooterSections>
                <FooterTitle>
                    A PROPOS
                </FooterTitle>
                <FooterList>
                    <FooterRow onClick={pathToAboutPage} >Qui sommes nous ?</FooterRow>
                    <FooterRow onClick={pathToHowItWorksPage} >Comment ça marche ?</FooterRow>
                    <FooterRow>Pourquoi <Label>El Work</Label>?</FooterRow>
                    <FooterRow>Comment commander ?</FooterRow>
                </FooterList>
            </FooterSections>
            <FooterSections>
                <FooterTitle>
                    FREELANCE
                </FooterTitle>
                <FooterList>
                    <FooterRow>Devenir Freelance</FooterRow>
                    <FooterRow onClick={pathToFreelancePage}>Trouver un Freelance</FooterRow>
                    <FooterRow>Termes et conditions</FooterRow>
                    <FooterRow>Politique de confidentialité</FooterRow>
                </FooterList>
            </FooterSections>
            <FooterSections>
                <FooterTitle>
                    RENCONTREZ-NOUS
                </FooterTitle>
                <FooterList>
                    <FooterRow style={{display: 'flex'}}>
                        <EnvironmentOutlined style={{margin: '.3em .5em 0 0'}}/>Rue vers Tifra, Tigzirt 15019, <br/>Tizi-Ouzou
                    </FooterRow>
                    <FooterRow>
                        <Maps title='adress' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.7608993988739!2d4.136349758560575!3d36.88930527502884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d95f16c0c5d3f%3A0xf129fc38baa66613!2srocade%20S%2C%20Tigzirt!5e0!3m2!1sfr!2sdz!4v1614643363852!5m2!1sfr!2sdz" allowFullScreen="" loading="lazy"></Maps>
                    </FooterRow>                
                </FooterList>    
            </FooterSections>
            <FooterSections>
                <FooterTitle>
                    CONTACTEZ-NOUS
                </FooterTitle>
                <FooterList>
                    <Path href='mailto:syfax15_98@outlook.fr'>
                        <MailOutlined style={{marginRight: '.5em'}}/>
                        <FooterRow>contact@elwork.dz</FooterRow>
                    </Path>
                    <Path href='tel:+213666841944'>
                        <PhoneOutlined style={{marginRight: '.5em'}} />
                        <FooterRow>+231 666 84 19 44</FooterRow>
                    </Path>
                    <Path href='/#'>
                        <HomeOutlined style={{marginRight: '.5em'}}/>
                        <FooterRow>026 25 75 16</FooterRow>
                    </Path>                  
                </FooterList>
            </FooterSections>
            <SocialMedia>
                <Path href='/#' target='_blank' rel='noreferrer'>
                    <Facebook/>
                </Path>
                <Path href='/#' target='_blank' rel='noreferrer'>
                    <Instagram/>
                </Path>
                <Path href='/#' target='_blank' rel='noreferrer'>
                    <Linkedin/>
                </Path>
            </SocialMedia>  
        </FooterComposant>
    );
}

export default Footer;