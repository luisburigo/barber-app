import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "./components/Toolbar";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import MenuList from "./components/MenuList";
import useStyles from "./styles";
import UserInfo from "./components/UserInfo";

export default function Dashboard({children}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar handleDrawerOpen={handleDrawerOpen} open={open}/>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <FontAwesomeIcon size="sm" icon={faChevronLeft}/>
                    </IconButton>
                </div>
                <Divider/>
                <UserInfo/>
                <Divider/>
                <MenuList/>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                {children}
            </main>
        </div>
    );
}
