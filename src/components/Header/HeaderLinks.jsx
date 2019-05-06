import React from "react";
import {Link} from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
    const {classes} = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <Link to="/login-page" className={classes.dropdownLink}>
                        <i className="fas fa-sign-in-alt"/>Login
                    </Link>
                </Button>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
