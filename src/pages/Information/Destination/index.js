import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircleOutline as AddIcon, } from '@material-ui/icons'
import * as Yup from 'yup';
import { Formik } from 'formik'

import { Table, AppButton, ButtonType, AppGrid, FormControl, Types } from '../../../component';
import { Information_Action, Option_Action } from '../../../module';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import { informationservice } from '../../../service';
import { checkStatus } from '../../../module/util';

const INPUT_NAME = {
    name: 'name',
    region: 'region',
    district: 'district',
    township: 'township',
    address: 'address',
    branch: 'branch',
    remark: 'remark'
}

const initial_state = {
    name: '',
    region: '',
    district: '',
    township: '',
    address: '',
    branch: '',
    remark: ''
}


export default (props) => {

    const [open, setOpen] = useState(false);

    const closeDialog = () => setOpen(false);
    const openDialog = () => setOpen(true);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(Information_Action.Action_information.action_fetch_destination())

        dispatch(Option_Action.action_fetch_branch_option())

        dispatch(Option_Action.action_fetch_region_option())

    }, [dispatch])

    /**
     * functions
     */

    const onChangeRegion = (val) => dispatch(Option_Action.action_fetch_district_option(val))

    const onChangeDistrict = (val) => dispatch(Option_Action.action_fetch_township_option(val))

    const createnewDestination = async (data) => {
        let response = await informationservice.create_destination(data)
        if(checkStatus(response)) {
            dispatch(Information_Action.Action_information.action_fetch_destination())
            alert('Success')
            closeDialog()
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
        region: Yup.string().required('region is required'),
        district: Yup.string().required('district is required'),
        township: Yup.string().required('township is required'),
        address: Yup.string().required('address is required'),
        branch: Yup.string().required('branch is required'),
        remark: Yup.string(),
    })

    return (
        <div>
            <h5>Destination Maintenance</h5>
            <AppButton
                variant={ButtonType.variant.contained}
                color={ButtonType.color.primary}
                onClick={openDialog}
            >
                <AddIcon />
                Add
            </AppButton>
            <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_DESTINATIONS}
                rows={props.destinations?.docs || []}
            />
            <Formik
                initialValues={initial_state}
                validationSchema={validationSchema}
                onSubmit={createnewDestination}
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
                                    Create new Destination
                                    </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={1}>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.branch}
                                                label={'branch'}
                                                control={Types.select}
                                                options={props.branch || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.name}
                                                label={'name'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.region}
                                                label={'region'}
                                                control={Types.select}
                                                options={props.region || []}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    onChangeRegion(e.target.value)
                                                    formik.setFieldValue(INPUT_NAME.district, '')
                                                    formik.setFieldValue(INPUT_NAME.township, '')
                                                }}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.district}
                                                label={'district'}
                                                control={Types.select}
                                                options={props.district || []}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    onChangeDistrict(e.target.value)
                                                    formik.setFieldValue(INPUT_NAME.township, '')
                                                }}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.township}
                                                label={'township'}
                                                control={Types.select}
                                                options={props.township || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.address}
                                                label={'address'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_NAME.remark}
                                                label={'remark'}
                                            />
                                        </AppGrid.InputGrid>

                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <AppButton
                                        onClick={closeDialog}
                                        color={ButtonType.color.secondary}>
                                        cancel
                                    </AppButton>
                                    <AppButton
                                        type="submit"
                                        onClick={formik.submitForm}
                                        color={ButtonType.color.primary}>
                                        submit
                                    </AppButton>
                                </DialogActions>
                            </Dialog>
                        )
                    }
                }
            </Formik>
        </div>
    );
}