import React, { useEffect, useState } from 'react'
import { AppBar, Box, colors, makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import { drawerWidth } from '../Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '2px solid red',
        width: '50%',
    },

}))

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

let tabs = new Array(15)

export default function AppTabBar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={classes.root}>
            This is the tab bar content
            <Tabs // navigation
                style={{
                    backgroundColor: 'grey',
                }}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable force tabs"
            >
                {
                    [1,2,3,4,6,1,2,3,4,6,1,2,3,4,6,1,2,3,4,6,].map((_, idx) => (
                        <Tab label={`page-${idx + 1}`} {...a11yProps(idx)} />
                    ))
                }
            </Tabs>
        </Box>
    )
}