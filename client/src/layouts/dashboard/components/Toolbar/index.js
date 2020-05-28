import React from "react";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell} from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ToolbarComponent from "@material-ui/core/Toolbar";
import useStyles from "./styles";

export default function Toolbar({open, handleDrawerOpen}) {
    const classes = useStyles();

    return (
        <ToolbarComponent className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <FontAwesomeIcon size="sm" icon={faBars}/>
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dashboard
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <FontAwesomeIcon size="sm" icon={faBell}/>
                </Badge>
            </IconButton>
        </ToolbarComponent>
    )
}
