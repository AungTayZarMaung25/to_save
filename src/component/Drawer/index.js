import React, { useEffect, useState } from 'react';

import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core'
import clsx from 'clsx';
import {
    ChevronRight,
    ChevronLeft,
} from '@material-ui/icons';
import _ from 'lodash';

import DrawerItem from './DrawerItem';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next';


export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1
        },
    },
    toolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    Collapse: {
        paddingLeft: 10
    },
    listItemText: {
        wordBreak: "break-word",
        maxWidth: 180,
        whiteSpace: "normal"
    },
    leftBorder: {
        borderLeft: '2px solid red !important'
    },
    ItemBorder: {
        borderTop: '1px solid #e9e9ef !important',
    },
    ItemCurrent: {
        backgroundColor: 'gray'
    },
    user_name : {
        fontWeight: "bold"
    },
    role_text: {
        fontSize: 14
    }
}))

const DrawerBar = ({
    /**
     * state
     */
    menuState,
    role,
    permission,
    /**
     * action
     */
    Toggle
}) => {

    const { t } = useTranslation()
    const location = useLocation();
    const pathName = location.pathname || '/';

    const [data, setData] = useState({
        roleName: '',
        permission: []
    });

    useEffect(() => {
        if (role && Array.isArray(permission))
            setData({
                roleName: role,
                permission: permission
            })
    }, [role, permission])

    const [menu, setMenu] = useState({});
    const classes = useStyles();


    const typo_Props = menuState ?
        {
            wordBreak: "break-word",
            maxWidth: 180,
            whiteSpace: "normal",
            fontSize: 14
        }
        :
        {}

    const handleClick = (item, level = 2) => {

        let temp = _.cloneDeep(menu);

        if (level !== 1 || temp[item]) {

            temp[item] = !temp[item]

            setMenu(temp)

        }
        else {
            let obj = {}

            obj[item] = !obj[item]

            setMenu(obj)
        }
    }

    const handler = (children, level = 2) => {
        if (Array.isArray(children))
            return children.map((subOption, index) => (
                <div key={subOption.name + index}
                    className={
                        clsx(classes.ItemBorder,
                            {
                                [classes.leftBorder]: menu[subOption.name],
                                [classes.ItemCurrent]: pathName === subOption.url
                            })
                    }
                >
                    <DrawerItem
                        typoProps={typo_Props}
                        subOption={subOption}
                        expand={menu[subOption.name]}
                        recursiveHandler={() => handler(subOption.children)}
                        handleClick={() => handleClick(subOption.name, level)}
                        t={t}
                    />
                </div>
            ))

    }

    return (
        <React.Fragment>
            <Drawer
                variant="persistent"
                className={
                    clsx(classes.drawer, {
                        [classes.drawerOpen]: menuState,
                        [classes.drawerClose]: !menuState
                    })
                }
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: menuState,
                        [classes.drawerClose]: !menuState
                    })
                }}
                anchor="left"
                open
            >
                <div className={classes.toolBar}>
                    <ListItem>
                        <ListItemText
                            primary={<span className={classes.user_name}>Thant Sin Aung</span>}
                            secondary={<span className={classes.role_text}>{data.roleName}</span>}
                        />
                    </ListItem>
                    {
                        menuState ?
                            <IconButton onClick={Toggle}>
                                <ChevronLeft />
                            </IconButton>
                            :
                            <IconButton onClick={Toggle}>
                                <ChevronRight />
                            </IconButton>
                    }

                </div>
                <List>
                    {handler(data.permission, 1)}
                </List>
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerBar