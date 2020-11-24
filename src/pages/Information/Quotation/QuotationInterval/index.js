import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup'

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid, makeStyles
} from '@material-ui/core';
import { AddCircleOutline as AddIcon } from '@material-ui/icons'

import {
    AppButton,
    AppGrid,
    ButtonType,
    // CURRENT_DATE_TIME,
    FormControl,
    Table,
    Types
} from '../../../../component';
import { Information_Action, Option_Action } from '../../../../module';
import { informationservice } from '../../../../service';
import { checkStatus } from '../../../../module/util';
import {
    close_dialog,
    close_quotation_dialog,
    // open_quotation_dialog
} from '../../../../module/reducer.components';

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

const INPUT_QUOTATION_RULE = {
    expresstype: 'expresstype',
    minimum: 'minimum',
    minimum_charges: 'minimum_charges',
    additional_charges: 'additional_charges',
}

const initailState = {
    name: '',
    sending_area: [],
    receiving_area: [],
    effective_time: '',
    expire_time: '',
    remark: '',
}

const quotation_rule_state = {
    expresstype: '',
    minimum: 1,
    minimum_charges: 0,
    additional_charges: 0
}

const validationSchema = Yup.object({
    name: Yup.string().required(),
    sending_area: Yup.array().required().min(1),
    receiving_area: Yup.array().required().min(1),
    effective_time: Yup.date().required(),
    expire_time: Yup.date().required(),
    remark: Yup.string(),
})

const quotation_rule_validation_schema = Yup.object({
    expresstype: Yup.string().required(),
    minimum: Yup.number().required().min(1).default(1),
    minimum_charges: Yup.number().required().min(1),
    additional_charges: Yup.number().required().min(1)
})

export default (props) => {
    const classes = useStyles();

    const dispatch = useDispatch()

    /**
     * dialog
     */
    const [open, setOpen] = useState(false)
    const closeDialog = () => {
        setOpen(false);
        dispatch(close_dialog())
    };
    const openDialog = () => setOpen(true);

    /**
     * dialog # quotation rule
     */
    const [quotationRule, setQuotationRule] = useState(false);

    const openQuotationRule = () => {
        dispatch(Option_Action.action_fetch_shippingtype_option());
        setQuotationRule(true);
    };
    const closeQuotationRule = () => setQuotationRule(false);

    /**
     * quotation dialog
     */
    // const openQuotation_Dialog = () => {
    //     dispatch(open_quotation_dialog())
    // }
    const closeQuotation_Dialog = () => {
        dispatch(close_quotation_dialog())
    }

    /**
     * life cycle
     */
    useEffect(() => {
        dispatch(Information_Action
            .Action_quotation_maintencance
            .action_fetch_quotation_interval_list())

        dispatch(Option_Action.action_fetch_interval_group_option())

    }, [dispatch])

    useEffect(() => {
        if (props.showdialog) {
            openDialog()
        }
    }, [props.showdialog])


    /**
     * functions
     * creating quotation interval
     */
    const createNewQuotation_Interval = async (data, { resetForm }) => {
        try {
            const {
                receiving_area = [],
                sending_area = []
            } = data

            let send = sending_area.map(s => s.value)
            let receive = receiving_area.map(r => r.value)

            let response = await informationservice.create_quotation_interval({
                ...data,
                sending_area: send,
                receiving_area: receive
            });

            if (checkStatus(response)) {
                // dispatch()
                alert('Success');
                closeDialog();
                resetForm()
            }
            else {
                alert(response.statusText)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    /**
     * creating quotation rule
     */
    const onSubmit_Quotation_Rule = async (data, { resetForm }) => {
        try {
            let response = await informationservice.create_quotation_rule(props.temp_data?._id,data)
            if(checkStatus(response)){
                alert('success');
                closeQuotationRule()
                resetForm()
            }
            else alert(response.statusText)
        } catch (error) {
            alert(error.message)
        }
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
                    rows={props.quotation_interval || []}
                    showAll={true}
                />
            </div>

            {/**
             * View Quotation Rule
             */}
            <Dialog
                open={props.quotation_dialog}
                onClose={closeQuotation_Dialog}
                aira-labelledby="quotation-dialog"
                maxWidth="md"
                fullWidth={true}
                disableEscapeKeyDown={true}
                disableBackdropClick={true}
            >
                <DialogTitle id="quotation-dialog">
                    View Quotation
                </DialogTitle>
                <DialogContent>
                    <div className={classes.root}>
                        <AppButton
                            variant={ButtonType.variant.contained}
                            color={ButtonType.color.primary}
                            onClick={openQuotationRule}
                        >
                            add quotation
                        </AppButton>
                        <div className={classes.table_wrapper}>
                            <Table.CommonTable
                                columns={Table.HEADER_COLUMN.QUOTATION_RULES}
                                rows={props.temp_data?.quotation_rule || []}
                                showAll={true}
                            />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <AppButton
                        onClick={closeQuotation_Dialog}
                        color={ButtonType.color.secondary}
                    >
                        cancel
                    </AppButton>
                </DialogActions>
            </Dialog>

            {/**
              * create or update quotation rule
              */}
            <Formik
                initialValues={quotation_rule_state}
                validationSchema={quotation_rule_validation_schema}
                onSubmit={onSubmit_Quotation_Rule}
            >
                {
                    formik => {
                        return (
                            <Dialog
                                open={quotationRule}
                                onClose={closeQuotationRule}
                                aira-labelledby="quotation-rule"
                                maxWidth="sm"
                                fullWidth={true}
                                disableEscapeKeyDown={true}
                                disableBackdropClick={true}
                            >
                                <DialogTitle id="quotation-rule">
                                    Add New Quotation Rule
                            </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={1}>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_QUOTATION_RULE.expresstype}
                                                label={'express type'}
                                                control={Types.select}
                                                options={props.express_type_list || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_QUOTATION_RULE.minimum}
                                                label={'minimum (*kg)'}
                                                type={'number'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_QUOTATION_RULE.minimum_charges}
                                                label={'minimum charges'}
                                                type={'number'}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={4}>
                                            <FormControl
                                                name={INPUT_QUOTATION_RULE.additional_charges}
                                                label={'additional charges'}
                                                type={'number'}
                                            />
                                        </AppGrid.InputGrid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <AppButton
                                        onClick={closeQuotationRule}
                                        color={ButtonType.color.secondary}
                                    >
                                        cancel
                                </AppButton>
                                    <AppButton
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

            {/**
             * creating new quotation interval
             */}
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
                                                options={props.interval_sending_list || []}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={6}>
                                            <FormControl
                                                name={INPUT_NAME.receiving_area}
                                                label={'Receiving Area'}
                                                control={Types.autocomplete}
                                                options={props.interval_receiving_list || []}
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