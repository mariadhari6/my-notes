import { Add, ExpandLess, ExpandMore, Inbox, Mail, Notes, SpeakerNotes, StarBorder, List as ListIcon } from "@mui/icons-material";
import { AppBar, Avatar, Collapse, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, Link, BrowserRouter } from "react-router-dom";
import useStyles from "./style";

const Layout = ({ children }) => {
    const classes = useStyles();
    const [openData, setOpenData] = useState(false);
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="secondary"
                    sx={{ width: `calc(100% - 240px)`, ml: '240px' }}
                >
                    <Toolbar>
                        <Typography
                            style={{ color: 'white' }}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: 240, flexShrink: 0, '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar
                        sx={{ gap: '0.5rem' }}
                    >
                        <Avatar
                            sx={{ bgcolor: deepPurple[500] }}
                        >
                            M
                        </Avatar>
                        <Typography>
                            Mar'i Adhari
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        <ListItemButton onClick={(e) => {
                            e.preventDefault();
                            setOpenData(!openData);
                        }}>
                            <ListItemIcon>
                                {/* <Inbox /> */}
                                <SpeakerNotes />
                            </ListItemIcon>
                            <ListItemText primary="Catatan" />
                            {openData ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse
                            in={openData}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <ListIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="List" sx={{ color: "black" }} />
                                    </ListItemButton>
                                </Link>
                                <Link to="/create" style={{ textDecoration: "none" }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <Add />
                                        </ListItemIcon>
                                        <ListItemText primary="Tambah" sx={{ color: "black" }} />
                                    </ListItemButton>
                                </Link>

                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    className={classes.page}
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </BrowserRouter>

    );
}
export default Layout;