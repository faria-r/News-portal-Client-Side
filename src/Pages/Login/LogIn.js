import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {
  const {logIn,setLoading} = useContext(AuthContext);
  const [error,setError] = useState('');
  const navigate= useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
  const handleSubmit = (event)=>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
logIn(email,password)
.then(result =>{
  const user = result.user;
  console.log(user);
  form.reset();
  setError('');
  if(user.emailVerified){
    navigate(from,{replace:true});
  }
  else{
    toast.error('You cant log in Before Verify Your Email')
  }
 
})
.catch(e => {
  console.error(e);
  setError(e.message);
})
.finally(()=>{
setLoading(false)
})
  }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>
      <br />
      <Form.Text className="text-danger">
        {error}
        </Form.Text>
      
    </Form>
    );
};

export default LogIn;