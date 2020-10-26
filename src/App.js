import React, { Fragment, useEffect, useState } from 'react';

import { CssBaseline, makeStyles } from '@material-ui/core'

import {
  Drawer,
  Home,
  Header
} from './container'
import { useDispatch } from 'react-redux';
import { action_GetPermission } from './module/action.user';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
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
        <Home/>
      </main>


    </div>
  )
}