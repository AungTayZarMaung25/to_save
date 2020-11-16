import React from 'react'
import { Grid } from '@material-ui/core'
import { AppGrid, Table } from '../../component'

export default (props) => {

    return (
        <Grid container spacing={1}>
            <h3>{props.label}</h3>
            <Grid container spacing={1}>

                <AppGrid.GridScan container col={4} >
                    {props.children}
                </AppGrid.GridScan>


                <AppGrid.GridScan container col={8} border>
                    <Table.CommonTable
                        columns={Table.SCAN_HEADER_COLUMN.COLUMNS_SCAN_DATA}
                        rows={[]}
                        showAll={false}
                    />
                </AppGrid.GridScan>
            </Grid>
        </Grid>
    )
}