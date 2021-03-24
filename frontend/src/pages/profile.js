import FreelanceNavbar from '../components/FreelanceNavbar/index'
import FreelanceProfile from '../components/FreelanceProfile/index'
import Footer from "../components/Footer/index";
const Profile = ({userContext}) => {

    return (
        <>
        <FreelanceNavbar userContext={userContext}/>
        <FreelanceProfile userContext={userContext} />
        <Footer/>
        </>
    )
}

export default Profile;
