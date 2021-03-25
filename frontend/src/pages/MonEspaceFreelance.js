import React, { useState, useEffect } from 'react'
import Navbar from '../components/FreelanceNavbar/index'
import FreelanceProfile from "../components/UserFreelanceProfile/index";

const UserFreelanceProfile = ({userContext}) => {
    return (
        <div>
            <Navbar userContext={userContext}/>
            <FreelanceProfile userContext={userContext} />
        </div>  
    )
}

export default UserFreelanceProfile
