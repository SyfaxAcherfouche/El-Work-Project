import React from 'react'
import { howItWorksOne, howItWorksThree } from "../components/CommentCaMarche/Data";
import { howItWorksTwo, howItWorksFour } from "../components/CommentCaMarcheTwo/Data";
import Navbar from '../components/Navbar/index'
import HowItWorkSectionOne from '../components/HowItWorkSectionOne/index'
import CommentCaMarche from '../components/CommentCaMarche/index'
import CommentCaMarcheTwo from "../components/CommentCaMarcheTwo/index";
import Footer from "../components/Footer/index";

const howItWorks = ({userContext}) => {
    return (
        <div>
            <Navbar userContext={userContext}/>
            <HowItWorkSectionOne />
            <CommentCaMarche {...howItWorksOne}/>
            <CommentCaMarcheTwo {...howItWorksTwo}/>
            <CommentCaMarche {...howItWorksThree}/>
            <CommentCaMarcheTwo {...howItWorksFour}/>
            <Footer/>
        </div>
    )
}

export default howItWorks
