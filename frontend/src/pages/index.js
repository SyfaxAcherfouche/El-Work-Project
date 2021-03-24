import React, { useState, useEffect } from 'react'
import cookie from 'react-cookies'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSectionOne from '../components/HomeSectionOne'
import HomeSectionTwo from "../components/HomeSectionTwo";
import { homeObjOne } from '../components/HomeSectionTwo/Data'
import Footer from '../components/Footer'
const Home = ({userContext}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    console.log(userContext, 'f el home')
    useEffect(() => {
        console.log(cookie.loadAll())
    }, [])
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} userContext={userContext} />
            <HomeSectionOne />
            <HomeSectionTwo {...homeObjOne} />
            <Footer />
        </>
    );
}

export default Home;
