import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles } from '@material-ui/core';
import { AddCircleOutline as AddIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'

import { AppButton, AppGrid, ButtonType, FormControl, Table, Types } from '../../../../component';
import { Information_Action, Option_Action } from '../../../../module';
import { Formik } from 'formik';
import { informationservice } from '../../../../service';
import { checkStatus } from '../../../../module/util';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))

const INPUT_NAME = {
    name: 'name',
    townships: 'townships',
    type: 'type',

    region: 'region',
    district: 'district',
    township: 'township'
}

const initial_state = {
    name: '',
    townships: [],
    type: '',

    region: '',
    district: '',
    township: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    townships: Yup.array().required().min(1),
    type: Yup.string().required(),

    region: Yup.string(),
    district: Yup.string(),
    township: Yup.string(),
})

export default (props) => {

    const [open, setOpen] = useState(false);
    const closeDialog = () => setOpen(false);
    const openDialog = () => setOpen(true);

    const classes = useStyles();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Information_Action.Action_quotation_maintencance.action_fetch_interval_list())
        dispatch(Option_Action.action_fetch_interval_type_option())

        dispatch(Option_Action.action_fetch_region_option())
    }, [dispatch])

    /**
     * functions
     */
    const onChangeRegion = (val) => dispatch(Option_Action.action_fetch_district_option(val));
    const onChangeDistrict = (val) => dispatch(Option_Action.action_fetch_township_option(val));

    const createNewInterval = async (data) => {
        try {
            let { townships = [] } = data
            let response = await informationservice.create_interval({
                ...data,
                townships: townships.map(t => t._id || t.value)
            })

            if (checkStatus(response)) {
                dispatch(Information_Action.Action_quotation_maintencance.action_fetch_interval_list())
                alert('Success');
                closeDialog()
            }
            else {
                alert(response.statusText)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className={classes.root}>
            <h5>Interval Maintenance</h5>
            <AppButton
                variant={ButtonType.variant.contained}
                color={ButtonType.color.primary}
                onClick={openDialog}
            >
                <AddIcon />
                Add
            </AppButton>
            <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_INTERVAL}
                rows={props.interval_list || []}
                showAll={true}
            />

            <Formik
                initialValues={initial_state}
                validationSchema={validationSchema}
                onSubmit={createNewInterval}
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
                                disableEscapeKeyDown={true}
                                disableBackdropClick={true}
                            >
                                <DialogTitle id="form-dialog-title">
                                    Create new Interval &lt;area&gt;
                            </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={1}>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.name}
                                                label={'Interval Name'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.type}
                                                label={'Interval Type'}
                                                control={Types.select}
                                                options={props.interval_type_list || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.region}
                                                label={'Region'}
                                                control={Types.select}
                                                options={props.region || []}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    onChangeRegion(e.target.value);
                                                    formik.setFieldValue(INPUT_NAME.district, '')
                                                    formik.setFieldValue(INPUT_NAME.township, '')
                                                }}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.district}
                                                label={'District'}
                                                control={Types.select}
                                                options={props.district || []}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    onChangeDistrict(e.target.value);
                                                    formik.setFieldValue(INPUT_NAME.township, '')
                                                }}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={8}>
                                            <FormControl
                                                name={INPUT_NAME.townships}
                                                label={'Townships'}
                                                control={Types.autocomplete}
                                                options={props.township || []}
                                            />
                                        </AppGrid.InputGrid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <AppButton
                                        onClick={closeDialog}
                                        color={ButtonType.color.secondary}
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