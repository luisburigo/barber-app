import List from "@material-ui/core/List";
import menuItens from "./menuItens";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {history} from "../../../../routes";

export default function MenuList() {
    const toRoute = (routeLink) => history.push(routeLink);

    return (
        <List>
            {menuItens.map(item =>
                <ListItem onClick={() => toRoute(item.link)} button key={item.name}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name}/>
                </ListItem>
            )}

        </List>
    )
}
