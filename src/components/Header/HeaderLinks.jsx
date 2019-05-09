/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import {ROUTER_PATH} from "index";

const listItems = {
    login: (classes) => {
        return (<ListItem className={classes.listItem}>
            <Button
                component={Link} to="/login-page"
                color="transparent"
                className={classes.navLink}
            >
                로그인
            </Button>
        </ListItem>)
    },
    reg: (classes) => {
        return (<ListItem className={classes.listItem}>
            <Button
                color="transparent"
                onClick={() => {
                    alert("[클로즈 베타 진행 중] 정식 오픈을 기다려주세요^^");
                }}
            >
                가입
            </Button>
        </ListItem>)
    },
    profile: (classes) => {
        return (<ListItem className={classes.listItem}>
            <Button
                component={Link} to="/profile-page"
                color="transparent"
                className={classes.navLink}
            >
                나의 페이지
            </Button>
        </ListItem>)
    },
    logout: (props) => {
        return (<ListItem className={props.classes.listItem}>
            <Button
                color="transparent"
                className={props.classes.navLink}
                onClick={props.clickLogout}
            >
                로그아웃
            </Button>
        </ListItem>)
    },
};

const landingRender = (props) => {
    const {classes, isLogin = false} = props;
    if (!isLogin) {
        return (
            <List className={classes.list}>
                {listItems.login(classes)}
                {listItems.reg(classes)}
            </List>
        );
    }
    return (
        <List className={classes.list}>
            {listItems.profile(classes)}
            {listItems.logout(props)}
        </List>
    )
};

const loginRender = (props) => {
    const {classes} = props;
    return (
        <List className={classes.list}>
            {listItems.reg(classes)}
        </List>
    )
}

const profileRender = (props) => {
    const {classes} = props;
    return (
        <List className={classes.list}>
            {listItems.logout(props)}
        </List>
    )
}

const renderByLocation = (props) => {
    const locationPath = props.location.pathname;
    switch (locationPath) {
        case ROUTER_PATH.ROOT:
            return landingRender(props);
        case ROUTER_PATH.LOGIN:
            return loginRender(props);
        case ROUTER_PATH.PROFILE:
            return profileRender(props);
    }
};


function HeaderLinks({...props}) {
    return renderByLocation(props)
}

export default withStyles(headerLinksStyle)(HeaderLinks);
