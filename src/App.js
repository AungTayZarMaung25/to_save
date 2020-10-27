import React, { useEffect } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route
} from 'react-router-dom'


import { action_GetPermission } from './module/action.user';
import {
  Drawer,
  Header,
  System,
  Home,
  Information
} from './container'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    flex: 1,
    height: '100%',
    padding: theme.spacing(3)
  },
  toolBar: {
    marginTop: 50
    // padding: theme.spacing(0, 1),
    // ...theme.mixins.toolbar
  }
}))

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action_GetPermission());
  })

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Header />
      <Drawer />

      <main className={classes.content}>
        <div className={classes.toolBar}>
          <Switch>
            <Route exact path="/role-management" component={System.Roles} />
            <Route exact path="/item-type-maintenance" component={Information.OtherInformation.ItemType} />
            <Route exact path="/express-type-maintenance" component={Information.OtherInformation.ExpressType} />
            <Route exact path="/destination-maintenance" component={Information.Destination} />
            <Route exact path="/carrier-maintenance" component={Information.OtherInformation.Carrier} />
          </Switch>

        </div>
      </main>


    </div>
  )
}