import React from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    ListItem,
    ListItemText,
    makeStyles
} from '@material-ui/core'
import {
    ExpandLess,
    ExpandMore
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    Collapse: {
        paddingLeft: 10
    },
    links: {
        textDecoration: 'none',
        color: '#000'
    },
}))

export default ({
    typoProps = {},
    subOption = {},
    expand = false,
    recursiveHandler = function () { },
    handleClick = function () { },
    t
}) => {

    const classes = useStyles();

    if (!subOption.children)
        return (
            <Link to={subOption.url} className={classes.links}>
                <ListItem button>

                    <ListItemText
                        inset
                        primaryTypographyProps={{
                            style: typoProps
                        }}
                        primary={t(`sidebar.${subOption.name}`)}
                    />
                </ListItem>
            </Link >
        )

    return (
        <React.Fragment>
            <ListItem button
                onClick={handleClick}
            >
                {/* {
                            subOption.icon &&
                            <ListItemIcon>
                                {subOption.icon}
                            </ListItemIcon>
                        } */}
                <ListItemText
                    inset
                    primary={t(`sidebar.${subOption.name}`)}
                    primaryTypographyProps={{
                        style: typoProps
                    }}
                />
                {
                    expand ?
                        <ExpandLess />
                        :
                        <ExpandMore />
                }
            </ListItem>
            <Collapse
                in={expand}
                timeout="auto"
                className={classes.Collapse}
                unmountOnExit
                disableStrictModeCompat
            >
                {recursiveHandler(subOption.children)}
            </Collapse>
        </React.Fragment>
    )
}