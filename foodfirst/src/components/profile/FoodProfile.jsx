import React, { useState } from "react";
import { Button, Container, Grid, Header } from "semantic-ui-react";
import "./foodProfile.css";
import { Link } from "react-router-dom";

const FoodProfile = () => {
  const [form, useForm] = useState({
    restrictions: {
      dietaryNeeds: {
        vegetarian: false,
        pescatarian: false,
        vegan: false
      },
      allergies: {
        peanuts: false,
        shellfish: false,
        wheat: false,
        soy: false,
        fish: false,
        cowMilk: false,
        eggs: false,
        sesame: false,
        treeNut: false
      },
      religiousRestrictions: {
        buddhism: false,
        hinduism: false,
        judaism: false,
        islam: false,
        jainism: false
      }
    }
  });
  return (
    <div className="backgroundImage" style={{ minHeight: 1000 }}>
      <Container style={{ margin: 20 }} textAlign="center">
        <Header as="h1" content="Dietary Needs" inverted></Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Button toggle color="orange" size="medium">
                Vegetarian
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Pescatarian
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Vegan
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as="h2" inverted>
          Allergies
        </Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Button color="orange" size="medium">
                Peanuts
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Shellfish
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Wheat
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button color="orange" size="medium">
                Soy
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Fish
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Cow Milk
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button color="orange" size="medium">
                Eggs
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Sesame
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Tree Nut
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as="h2" inverted>
          Religious Restrictions
        </Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Button color="orange" size="medium">
                Buddhism
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Hinduism
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Judaism
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button color="orange" size="medium">
                Islam
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="orange" size="medium">
                Jainism
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Link to="/list">
          <Button primary style={{ marginTop: 50 }} size="large">
            {" "}
            Next Page
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default FoodProfile;
