import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const api_url = " http://localhost:4000/signin"

const LoginForm = () => {
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
          const payload = {
            email: formData.get("email"),
            password: formData.get("password"),
          };
          const response = await fetch(api_url,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
              "Content-Type":"application/json"
            }
          })
          if (!response.ok) {
            return console.log("failed to create")
            
          }
         const body=await response.json()
         console.log("body",body)
         if (body.success) {
          localStorage.setItem("token",body.data.token) 
          navigate("/welcome")
          
         }
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
            <Label for="examplePassword">Email</Label>
              <Input
                id="examplePassword"
                name="email"
                placeholder="email placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
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
        </Row>        
        <div className="d-flex justify-content-end">
            <Link href="/">Sign up</Link>
        </div>
        <div>
            <Button>Login</Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
