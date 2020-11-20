import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles } from '@material-ui/core';
import { AddCircleOutline as AddIcon } from '@material-ui/icons'
import * as Yup from 'yup'

import { AppButton, AppGrid, ButtonType, FormControl, Table, Types } from '../../../../component';
import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    table_wrapper: {
        marginTop: 10
    }
}))

const INPUT_NAME = {
    name: 'name',
    sending_area: 'sending_area',
    receiving_area: 'receiving_area',
    effective_time: 'effective_time',
    expire_time: 'expire_time',
    remark: 'remark',
}

const initailState = {
    name: '',
    sending_area: '',
    receiving_area: '',
    effective_time: new Date(),
    expire_time: new Date(),
    remark: '',
}

const validationSchema = Yup.object({
    name: Yup.string().required(),
    sending_area: Yup.string().required(),
    receiving_area: Yup.string().required(),
    effective_time: Yup.date().default(new Date()),
    expire_time: Yup.date().default(new Date()),
    remark: Yup.string(),
})

export default (props) => {
    const classes = useStyles();

    /**
     * dialog
     */
    const [open, setOpen] = useState(true)
    const closeDialog = () => setOpen(false);
    const openDialog = () => setOpen(true);

    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    /**
     * functions
     */

    const createNewQuotation_Interval = (data) => {
        console.log(data)
    }


    return (
        <div className={classes.root}>
            <h5>Quotation Interval Maintenance</h5>
            <AppButton
                variant={ButtonType.variant.contained}
                color={ButtonType.color.primary}
                onClick={openDialog}
            >
                <AddIcon />
                Add
            </AppButton>

            <div className={classes.table_wrapper}>
                <Table.CommonTable
                    columns={Table.HEADER_COLUMN.COLUMN_QUOTATION_INTERVAL}
                    row={[]}
                    showAll={true}
                />
            </div>

            <Formik
                initialValues={initailState}
                validationSchema={validationSchema}
                onSubmit={createNewQuotation_Interval}
            >
                {
                    formik => {
                        return (
                            <Dialog
                                open={open}
                                onClose={closeDialog}
                                aria-labelledby="form-dialog-title"
                                maxWidth="md"
                                fullWidth={true}
                                disableBackdropClick={true}
                                disableEscapeKeyDown={true}
                            >
                                <DialogTitle id="form-dialog-title">
                                    Create new Quotation Interval
                                </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={1}>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.name}
                                                label={'Name'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.effective_time}
                                                label={'Effective Time'}
                                                control={Types.date}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.expire_time}
                                                label={'Expire Time'}
                                                control={Types.date}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={6}>
                                            <FormControl
                                                name={INPUT_NAME.sending_area}
                                                label={'Sending Area'}
                                                control={Types.autocomplete}
                                                options={props.interval_type_list || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={6}>
                                            <FormControl
                                                name={INPUT_NAME.receiving_area}
                                                label={'Receiving Area'}
                                                control={Types.autocomplete}
                                                options={props.interval_type_list || []}
                                            />
                                        </AppGrid.InputGrid>
                                        
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <AppButton
                                        onClick={closeDialog}
                                        color={ButtonType.color.sending_area}
                                    >
                                        cancel
                                    </AppButton>
                                    <AppButton
                                        type="submit"
                                        onClick={formik.submitForm}
                                        color={ButtonType.color.primary}
                                    >
                                        submit
                                    </AppButton>
                                </DialogActions>
                            </Dialog>
                        )
                    }
                }
            </Formik>
        </div>
    )
}