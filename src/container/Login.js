import React, { useState } from "react";
import { Button, FormGroup, FormControl, label, ButtonToolbar, Navbar, Nav, Form } from "react-bootstrap";
import "./Login.css";



export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName ] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    console.log( email, password, userName);
    

     event.preventDefault();
  }

  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    */}
    </Nav> 
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

    <div className="Login">
      <form onSubmit={handleSubmit}>
      <label className={'label-cls'} >Username</label>
        <FormGroup controlId="username" bsSize="large">
          <FormControl
            autoFocus
            type="username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder={'user name'}
          />
        </FormGroup>
      <label className={'label-cls'} >Email</label>
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'email'}
          />
        </FormGroup>
        <label className={'label-cls'} >Password</label>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder={'password'}
          />
        </FormGroup>
        <ButtonToolbar>
         <Button variant="primary" className={ 'login-cls'} type={'submit'} > Login </Button>
      </ButtonToolbar>
      </form>
    </div>
    </>
  );
}