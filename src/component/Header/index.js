import React from 'react';

import {
    AppBar, 
    Badge, 
    IconButton, 
    makeStyles,
    Menu, 
    MenuItem, 
    Toolbar, 
    Typography,

} from '@material-ui/core'

import {
    Menu as MenuIcon,
    Notifications,
    AccountCircle
} from '@material-ui/icons'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';


import { drawerWidth } from '../Drawer'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen
        // })
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: "none"
    }
}))

export default (props) => {

    const { t } = useTranslation();
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    /**
     * aria-control
     */
    const menuId = 'primary-search-account-menu'

    return (
        <div>
            <AppBar
                position="fixed"
                className={
                    clsx(
                        classes.appBar, {
                        [classes.appBarShift]: props.menuState
                    }
                    )
                }
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        className={
                            clsx(classes.menuButton, {
                                [classes.hide]: props.menuState
                            })
                        }
                        color="inherit"
                        aria-label="menu"
                        onClick={props.Toggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        className={classes.title}
                    >
                        {t('header.title_text')}
                    </Typography>
                    <div>
                        <IconButton 
                        aria-label="show 10 new notifications"
                        color={"inherit"}
                        >
                            <Badge badgeContent={10} color="error">
                                <Notifications/>
                            </Badge>
                        </IconButton>
                        <IconButton
                        edge={'end'}
                        aria-label='account of current user'
                        aria-controls={menuId}
                        aria-haspopup={true}
                        onClick={(event)=>setAnchorEl(event.currentTarget)}
                        color={'inherit'}
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Setting</MenuItem>
            </Menu>
        </div>
    )
}