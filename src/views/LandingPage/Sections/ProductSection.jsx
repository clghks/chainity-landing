import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Hearing from "@material-ui/icons/Hearing";
import Security from "@material-ui/icons/Security";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
              커뮤니티 멤버의 활동 또는 참여를 독려하기 위한 핵심 요소는 각 커뮤니티 멤버의 기여도를 일관되게 반영할 수 있는 공정한 회계 제도입니다. CHAINITY는 커뮤니티 활동에 대한 개인 기여도를 정확하고 투명하게 보상하고자 블록체인 기반으로 제공되는 서비스입니다.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="동기 부여"
                description="커뮤니티 활동에 대한 합당한 보상을 받을 수 있고, 이를 통해 커뮤니티는 자연스럽게 활성화됩니다."
                icon={MonetizationOn}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="블록체인"
                description="블록체인의 데이터 위변조 방지 기술을 활용하여 커뮤니티 활동에 대한 보상을 투명하게 관리합니다."
                icon={Security}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="커뮤니티 홍보"
                description="내부 사용자에게는 활동하는 커뮤니티 정보를 기반으로 추천을 하고, 외부 사용자에게는 인터넷 사용 기록을 바탕으로 커뮤니티를 홍보합니다. (준비 중)"
                icon={Hearing}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
