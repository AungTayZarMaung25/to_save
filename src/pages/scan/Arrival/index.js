import React from 'react';

import { Grid, makeStyles, } from '@material-ui/core';
import { AppGrid, FormControl, } from '../../../component';
import TempLayout from '../TempLayout';
import { Formik, } from 'formik';
import * as Yup from 'yup';


const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1
    },
    table_wrapper: {
        border: '2px solid lightgray'
    }
}))

const INPUT_NAME = {
    operation_date: "operation_date",
    shift: "shift",
    shipment_type: "shipment_type",
    item_type: "item_type",
    previous_station: "previous_station",
    destination: "destination",
    weight: "weight",
    waybill_no: "waybill_no",
}

const initialState = {
    operation_date: '',
    shift: '',
    shipment_type: '',
    item_type: '',
    previous_station: '',
    destination: '',
    weight: '',
    waybill_no: ''
}

export default (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TempLayout label="Arrival Scan here">
                <Formik
                    initialValues={initialState}
                    validationSchema={
                        Yup.object({
                            operation_date: Yup.string().required('Require'),
                            shift: Yup.string().required('Require'),
                            shipment_type: Yup.string().required('Require'),
                            item_type: Yup.string().required('Require'),
                            previous_station: Yup.string().required('Require'),
                            destination: Yup.string().required('Require'),
                            weight: Yup.string().required('Require'),
                            waybill_no: Yup.string().required('Required')
                        })}
                    onSubmit={(value) => console.log(value)}
                >
                    {
                        formik => {
                            const { getFieldProps } = formik
                            return (
                                <Grid spacing={1} container>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.operation_date}
                                            label="Date"
                                            {...getFieldProps(INPUT_NAME.operation_date)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.shift}
                                            label="Shfit"
                                            {...getFieldProps(INPUT_NAME.shift)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.shipment_type}
                                            label="Shipment Type"
                                            {...getFieldProps(INPUT_NAME.shipment_type)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.item_type}
                                            label="ItemType"
                                            {...getFieldProps(INPUT_NAME.item_type)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.previous_station}
                                            label="PreviousStation"
                                            {...getFieldProps(INPUT_NAME.previous_station)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.destination}
                                            label="Destinatio"
                                            {...getFieldProps(INPUT_NAME.destination)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.weight}
                                            label="Weight"
                                            {...getFieldProps(INPUT_NAME.weight)}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.waybill_no}
                                            label="WayBill no"
                                            {...getFieldProps(INPUT_NAME.waybill_no)}
                                        />
                                    </AppGrid.InputGrid>
                                    {/* <AppGrid.InputGrid>
                                        <FormControl
                                            name={INPUT_NAME.weight}
                                            label="Weight"
                                            {...getFieldProps(INPUT_NAME.weight)}
                                        />
                                    </AppGrid.InputGrid> */}

                                </Grid>
                            )
                        }
                    }


                </Formik>
                <br />
                <br />
                <button type="submit">ADD</button>
                {/* </form> */}
            </TempLayout>
        </div >
    );
}
