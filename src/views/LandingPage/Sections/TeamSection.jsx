import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import javacafeLogo from "assets/img/javacafe-logo.png";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Communities</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={javacafeLogo} alt="..." className={imageClasses + " " + classes.padding10} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  자바카페
                  <br />
                  <small className={classes.smallTitle}>#개발자 #스터디</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    자바카페는 개발자들 사이의 네트워크를 구축하여 서로 발전하고 친목을 도모하는 오프라인 커뮤니티 입니다. 위 목적을 위해 오프라인 스터디와 오프 라인 세미나 등 여러 가지 행사를 기획, 진행하고 있습니다.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSib3j1djbGHcQuPfqIwfHZmzjCGHYSXWQQP_w54CIwh6fmicHbnA" alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  미정
                  <br />
                  <small className={classes.smallTitle}>#누구나 #참여가능</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Chainity에서는 커뮤니티들의 참여를 기다리고 있습니다.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSib3j1djbGHcQuPfqIwfHZmzjCGHYSXWQQP_w54CIwh6fmicHbnA" alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  미정
                  <br />
                  <small className={classes.smallTitle}>#누구나 #참여가능</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Chainity에서는 커뮤니티들의 참여를 기다리고 있습니다.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
