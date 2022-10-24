import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGithub, FaGoogle,FaFacebook,FaTwitter,FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousal from '../BrandCarousal/BrandCarousal';
import { AuthContext } from '../../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightsideNav = () => {

    const {providerLogIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
providerLogIn(googleProvider)
.then(result =>{
const user = result.user;
console.log(user)
})
.catch(error =>{
    console.error(error)
})
    };
    return (
        <div>
            <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Log in With Google</Button>{' '}
            <Button variant="outline-dark"><FaGithub></FaGithub>  LogIn With Github</Button>
    </ButtonGroup>
    <div className='mt-5'>
        <h5>Find Us On</h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp </ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'> </ListGroup.Item>
    </ListGroup>
    </div>
 <div>
    <BrandCarousal></BrandCarousal>
 </div>
        </div>
    
    );
};

export default RightsideNav;