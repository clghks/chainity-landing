import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import chainityLogoText from "assets/img/logo_yellow_text.png";
import javacafeLogo from "assets/img/javacafe-logo.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import { logout } from "../LoginPage/LoginPage";

const groupItem = classes => {
  return (
    <GridItem xs={12} sm={6} md={4}>
      <Card>
        <img
          src={chainityLogoText}
          alt="..."
          className={classes.imgCardTop + " " + classes.padding30}
        />
        <CardBody>
          <h4 className={classes.cardTitle}>미정</h4>
          <p>
            A.I 기반의 추천 시스템으로 선별된 그룹을 추천해 드릴 예정입니다.{" "}
          </p>
          {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
          <Button color="primary" disabled>
            가입하기
          </Button>
        </CardBody>
      </Card>
    </GridItem>
  );
};

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.imgCardTop
    );
    return (
      <div>
        <Header
          color="transparent"
          routes={{ pathname: "/" }}
          brand="Chainity"
          rightLinks={
            <HeaderLinks
              location={this.props.location}
              history={this.props.history}
              clickLogout={logout}
            />
          }
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              {/* <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer> */}
              <div className={classes.title}>
                <h3>
                  활동 그룹
                  <br />
                  <small>이미 가입하여 활동 중인 그룹 목록입니다.</small>
                </h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                  <Card>
                    <img
                      src={javacafeLogo}
                      alt="..."
                      className={classes.imgCardTop + " " + classes.padding30}
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>자바카페</h4>
                      <p>
                        자바카페는 개발자들 사이의 네트워크를 구축하여 서로
                        발전하고 친목을 도모하는 오프라인 커뮤니티 입니다. 위
                        목적을 위해 오프라인 스터디와 오프 라인 세미나 등 여러
                        가지 행사를 기획, 진행하고 있습니다.
                      </p>
                      <Button
                        color="success"
                        // TODO : 오픈 후 위 3라인 삭제 및 아래 2라인 주석 제거
                        href="https://javacafe.chainity.co.kr"
                        target="_blank"
                      >
                        이동하기
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <div className={classes.title}>
                <h3>
                  추천 그룹
                  <br />
                  <small>A.I가 당신에게 적합한 그룹을 추천합니다.</small>
                </h3>
              </div>
              <GridContainer>
                {[...Array(3)].map(() => {
                  return groupItem(classes);
                })}
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
