import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { AddCircleOutline as AddIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { AppButton, ButtonType, Table } from '../../../../component';
import { Information_Action } from '../../../../module';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))

export default (props) => {

    const classes = useStyles();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Information_Action.Action_quotation_maintencance.action_fetch_interval_list())
    }, [dispatch])

    return (
        <div className={classes.root}>
            <h5>Quotation Maintenance</h5>
            <AppButton
                variant={ButtonType.variant.contained}
                color={ButtonType.color.primary}
            // onClick={openDialog}
            >
                <AddIcon />
                Add
            </AppButton>
            <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_INTERVAL}
                rows={props.interval_list || []}
                showAll={true}
            />
        </div>
    )
}