import React from 'react';

import { Grid, makeStyles, } from '@material-ui/core';
import { AppGrid, FormControl, Types, } from '../../../component';
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
    destination: "destination",
    waybill_no: "waybill_no",
}

const initialState = {
    destination: '',
    waybill_no: ''
}

const validateSchema = Yup.object({
    destination: Yup.string(),
    waybill_no: Yup.string().required(),
})

export default (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TempLayout label="Arrival Scan">
                <Formik
                    initialValues={initialState}
                    validationSchema={validateSchema}
                    onSubmit={(value) => console.log(value)}
                >
                    {
                        _ => {
                            return (
                                <Grid spacing={1} container>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.destination}
                                            label="Next Station"
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.waybill_no}
                                            label="WayBill no"
                                        />
                                    </AppGrid.InputGrid>
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
