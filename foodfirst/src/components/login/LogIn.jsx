import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Input
} from "semantic-ui-react";
import "./login.css";

const LogIn = () => {
  const [form, setValues] = useState({ email: "", password: "" });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.prevent.default();
    const data = new FormData(e.target);
  };

  return (
    <Container style={{ margin: 20 }} textAlign="center">
      <Header as="h1">Food 1st</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>email</label>
          <Input
            name="email"
            type="text"
            value={form.email}
            onChange={updateField}
            placeholder="email"
          ></Input>
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={updateField}
            placeholder="password"
          ></Input>
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default LogIn;
