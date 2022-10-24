import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser,updateUserProfile ,verifyEmail} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted,setAccepted] = useState(false)
  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photo.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name,photoURL);
        handleEmailVerification();
        toast.success('please Check Your Email To Verify Email.')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleAccepted = (event)=>{
    setAccepted(event.target.checked)

  };

  const handleUpdateUserProfile = (name,photoURL)=>{
    const profile = {
        displayName:name,
        photoURL:photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(e =>console.error(e))

  }

  const handleEmailVerification = ()=>{
    verifyEmail()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo URl" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <br />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
