import React, { useState } from "react";
import { Button, Container, Form, Input, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [form, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    zip_code: "",
    years: false,
    terms: false
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <div className="backgroundImage">
      <Container textAlign="center" className="container">
        <Header className="header" as="h1">
          Create your profile
        </Header>
        <Form onSubmit={handleSubmit()} className="border">
          <Form.Field>
            <label>First Name</label>
            <Input
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={updateField}
              placeholder="first_name"
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={updateField}
              placeholder="last_name"
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input
              name="email"
              type="text"
              value={form.email}
              onChange={updateField}
              placeholder="email"
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              name="password"
              type="text"
              value={form.password}
              onChange={updateField}
              placeholder="password"
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Input
              name="confirm_password"
              type="text"
              value={form.confirm_password}
              onChange={updateField}
              placeholder="confirm password"
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Zip Code</label>
            <Input
              name="zip_code"
              type="text"
              value={form.zip_code}
              onChange={updateField}
              placeholder="Zip Code"
            ></Input>
          </Form.Field>
          <div>
            <label>
              <input
                name="years"
                type="checkbox"
                checked={form.years ? true : false}
                onChange={updateField}
              />
              18 years or older
            </label>
          </div>
          <div className="label">
            <label>
              <input
                name="terms"
                type="checkbox"
                checked={form.terms ? true : false}
                onChange={updateField}
              />
              Agree to Terms and Services
            </label>
          </div>
          <Link to="/foodprofile">
            <div>
              <Button className="next-button">Next</Button>
            </div>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;
