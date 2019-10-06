import React, { Component } from "react";
import {
  Container,
  Header,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "./landingPage.css";
import Login from "../login/LogIn";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as="h1"
        content="Food First"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
      />
      <Header
        as="h2"
        content="Stopping Hunger with 5g"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      <Login />
    </Container>
  );
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        className="backgroundImage"
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign="center"
            style={{ minHeight: 1000, padding: "1em 0em" }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        className="backgroundImage"
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Segment
          textAlign="center"
          style={{ minHeight: 640, padding: "7em 0em" }}
          vertical
        >
          <HomepageHeading mobile />
        </Segment>

        {children}
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

const LandingPage = () => {
  return <ResponsiveContainer></ResponsiveContainer>;
};

export default LandingPage;
