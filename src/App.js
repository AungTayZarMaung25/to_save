import React, { useEffect } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css'

import { action_GetPermission } from './module/action.user';
import {
  Drawer,
  Header,
  Scan,
  Document,
  System,
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
            {/** Scan */}
            <Route exact path="/arrival" component={Scan.ArrivalScan} />
            <Route exact path="/bagging" component={Scan.BaggingScan} />
            <Route exact path="/car" component={Scan.CarScan} />
            <Route exact path="/delivery" component={Scan.DeliveryScan} />
            <Route exact path="/dispatch" component={Scan.DispatchScan} />
            <Route exact path="/incoming" component={Scan.IncomingScan} />
            <Route exact path="/loading" component={Scan.LoadingScan} />
            <Route exact path="/outgoing" component={Scan.OutgoingScan} />
            <Route exact path="/problem" component={Scan.ProblemScan} />
            <Route exact path="/proxy" component={Scan.ProxyScan} />
            <Route exact path="/receive" component={Scan.ReceivingScan} />
            <Route exact path="/start" component={Scan.StartScan} />
            <Route exact path="/unloading" component={Scan.UnloadingScan} />
            <Route exact path="/unpacking" component={Scan.UnpackingScan} />
            
            {/** Document */}
            <Route exact path="/waybillentry" component={Document.WayBillEntry} />


            {/** data & information */}
            <Route exact path="/destination-maintenance" component={Information.Destination} />

            <Route exact path="/item-type-maintenance" component={Information.OtherInformation.ItemType} />
            <Route exact path="/express-type-maintenance" component={Information.OtherInformation.ExpressType} />
            <Route exact path="/carrier-maintenance" component={Information.OtherInformation.Carrier} />
          </Switch>

        </div>
      </main>


    </div>
  )
}