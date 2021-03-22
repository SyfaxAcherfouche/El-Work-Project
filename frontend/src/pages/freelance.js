import React from 'react'
import FreelanceGrid from '../components/Freelance/index'
import FreelanceSidebar from '../components/Freelance-Sider/index'
import FreelanceNavbar from '../components/FreelanceNavbar/index'

const Freelance = ({item}) => {

    return (
        <div style={{margin: '0', padding: '0'}}>
            <div style={{position: 'fixed', width: '100vw', height: '12vh', top:'0', left:'0', right: '0', zIndex: '999' }} >
            <FreelanceNavbar item={item} />
            </div>
            <div style={{display: 'flex', position: 'absolute', top: '15vh'}}>
                <div style={{
                    position: 'fixed',
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '20vw',
                    height: '100vh',
                }}>
                <FreelanceSidebar />
                </div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'flex-start',
                    marginLeft: '20vw',
                    width: '80vw',
                    height: 'auto',
                    minHeight: '84vh',
                    maxWidth: '100%',
                    backgroundColor: '#ffffff'
                    }}>
                    <FreelanceGrid />
                </div>
            </div>
            
        </div>
    )
}

export default Freelance
