import React, { useState, useEffect } from 'react'
import Navbar from "../components/FreelanceNavbar/index";
import Profile from "../components/Account/index"

const Account = ({userContext}) => {
    return (
        <div>
            <Navbar userContext={userContext} />
            <Profile />
        </div>  
    )
}

export default Account
