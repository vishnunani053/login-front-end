import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";


const api_url = " http://localhost:4000/signup"
const SignUpForm = () => {
  const [message,setMessage]=useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        mobileNumber: formData.get("mobileNumber"),
      };
      const response = await fetch(api_url,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-Type":"application/json"
        }
      })
      if (!response.ok) {
        setMessage("failed to create user")        
        return console.log("failed to create")
      }
     const body=await response.json()
     console.log("body",body)
     setMessage("user created sucessfully")
    } catch (error) {
      console.log("error",error)
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="p-5 m-5">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input
                id="examplePassword"
                name="email"
                placeholder="email placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input
                id="exampleEmail"
                name="password"
                placeholder="with a placeholder"
                type="password"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Mobile Number</Label>
              <Input
                id="examplePassword"
                name="mobileNumber"
                placeholder="password placeholder"
                type="text"
              />
            </FormGroup>
          </Col>
          <div>
            <p>{message}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Link href="/login">Sign in</Link>
          </div>
          <div>
            <Button
              className="btn-primary"
              type="submit"
              style={{ width: "200px", height: "auto" }}
            >
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default SignUpForm;
