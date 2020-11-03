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
    AccountCircle,
    LanguageTwoTone
} from '@material-ui/icons'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { drawerWidth } from '../Drawer'
import { FONT_CN, FONT_EN, LANGUAGES } from '../../constant/Language';

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
    const [langEl, setLangEl] = React.useState(null);

    const changeLanguage = (lang) => {
        try {
            if ([FONT_EN, FONT_CN].includes(lang)) {
                console.log('here')
                i18n.changeLanguage(lang);
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * aria-control
     */
    const menuId = 'primary-search-account-menu'

    const LangId = 'language-id'

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
                            aria-label="change language"
                            aria-controls={LangId}
                            aria-haspopup={true}
                            onClick={(event) => setLangEl(event.currentTarget)}
                            color={'inherit'}
                        >
                            <LanguageTwoTone />
                        </IconButton>

                        <IconButton
                            aria-label="show 10 new notifications"
                            color={"inherit"}
                        >
                            <Badge badgeContent={10} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge={'end'}
                            aria-label='account of current user'
                            aria-controls={menuId}
                            aria-haspopup={true}
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                            color={'inherit'}
                        >
                            <AccountCircle />
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

            {/**
             * Language
             */}
            <Menu
                anchorEl={langEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                id={LangId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={Boolean(langEl)}
                onClose={() => setLangEl(null)}
            >
                {
                    LANGUAGES.map((lang, index) => (
                        <MenuItem
                            onClick={() => changeLanguage(lang.value)}
                            key={index}>{lang.name}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}