import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";
import { logout } from "../LoginPage/LoginPage";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: !!window.sessionStorage.getItem("userInfo")
    };
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Chainity"
          rightLinks={
            <HeaderLinks
              location={this.props.location}
              history={this.props.history}
              isLogin={this.state.isLogin}
              clickLogout={logout}
            />
          }
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Blockchain과 Community가 만나다!</h1>
                <h4>
                  <b>Chainity</b>는 Blockchain + Community의 합성어로
                  <br />
                  <b>블록체인 기반의 커뮤니티 활동 보상 플랫폼</b> 입니다.
                </h4>
                <Button
                  color="success"
                  size="lg"
                  onClick={() => {
                    alert("[클로즈 베타 진행 중] 정식 오픈을 기다려주세요^^");
                  }}
                >
                  무료로 가입하기
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
