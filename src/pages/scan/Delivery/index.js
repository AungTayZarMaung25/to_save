import React from 'react';

import { Grid, makeStyles, Paper } from '@material-ui/core';
import { AppGrid, FormControl, Table } from '../../../component';
import TempLayout from '../TempLayout';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    table_wrapper: {
        border: '2px solid lightgray'
    }
}))

export default (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Grid container spacing={1}>

                <AppGrid.GridScan col={5}>
                    <AppGrid.InputGrid>
                        
                    </AppGrid.InputGrid>
                </AppGrid.GridScan>


                <AppGrid.GridScan border>
                    <Table.CommonTable
                        columns={Table.SCAN_HEADER_COLUMN.COLUMNS_SCAN_DATA}
                        rows={[]}
                        showAll={false}
                    />
                </AppGrid.GridScan>
            </Grid> */}
            <TempLayout label="Delivery Scan"/>
        </div >
    );
}
