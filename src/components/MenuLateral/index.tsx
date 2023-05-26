import * as React from "react";
import {ReactEventHandler} from "react";


import './styles.css'

import Drawer from '@mui/material/Drawer';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {CalendarMonthRounded, CampaignRounded, FestivalRounded, PhotoCameraRounded} from "@mui/icons-material";

type Props = {
    click: (open: boolean) => ReactEventHandler;
    state: boolean;
}


export const MenuLateral = ({click, state}: Props) => {

    return (
        <Drawer
            anchor={'left'}
            open={state}
            onClose={click(false)}>
            <Box
                sx={{width: 250, mt: 5}}
                role="presentation"
                className="ma">

                <List onClick={click(false)}
                      onKeyDown={click(false)}>
                    <Link to="/" className="item-menu">
                        <ListItem key='home' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='home'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to="/estudos" className="item-menu">
                        <ListItem key='estudos' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CampaignRounded/>
                                </ListItemIcon>
                                <ListItemText primary='Estudos'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to="/agenda" className="item-menu">
                        <ListItem key='agenda' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CalendarMonthRounded/>
                                </ListItemIcon>
                                <ListItemText primary='Agenda'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to="/fotos" className="item-menu">
                        <ListItem key='fotos' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PhotoCameraRounded/>
                                </ListItemIcon>
                                <ListItemText primary='Fotos'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to="/retiro" className="item-menu">
                        <ListItem key='retiro' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FestivalRounded/>
                                </ListItemIcon>
                                <ListItemText primary='Retiro 2023'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
}
