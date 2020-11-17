import React, { useEffect } from 'react';
import {
    Grid,
    makeStyles,
    Paper
} from '@material-ui/core';
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';


import { AppGrid, FormControl, Types } from '../../../component';
import { useDispatch } from 'react-redux';
import { Option_Action } from '../../../module';
import UserAddress from './useraddress';
import { INPUT_NAME, initialState } from './constants'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper_header: {
        backgroundColor: '#e9e9ef',
        padding: theme.spacing(1),
        border: '1px solid #ECECEC',
        borderBottom: '1px solid lightgray',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    paper: {
        padding: theme.spacing(1),
        border: '1px solid #ECECEC',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        marginBottom: 10
        // color: 
    }
}))

const EntryGrid = ({
    header,
    headerclass,
    paperclass,
    col = 6,
    children,
    ...rest
}) => (
        <Grid item xs={12} sm={12} xl={col} lg={col} md={col} {...rest}>
            <Paper className={headerclass}>
                {header}
            </Paper>
            <Paper className={paperclass}>
                <Grid container>
                    {children}
                </Grid>
            </Paper>
        </Grid>
    )


const validationSchema = Yup.object({
    /**
     * Basic Information
     */
    waybill_no: Yup.string(),
    destination: Yup.string(),
    pickup: Yup.string(),
    shipping_time: Yup.date(),
    shipment_type: Yup.string(),
    shipping_mode: Yup.string(),
    carrier: Yup.string(),
    transferred_waybill: Yup.string(),
    destination_station: Yup.string(),

    /**
     * Sender Information
     */
    customer_type: Yup.string(),
    sender: Yup.string().required().min(3),
    phone: Yup.string().required().min(9),
    id_card: Yup.string(),
    region: Yup.string().required(),
    district: Yup.string().required(),
    township: Yup.string().required(),
    address: Yup.string().required().min(10),
    
    /**
     * Receiver Information
     */
    receiver: Yup.string().required().min(3),
    phone_receiver: Yup.string().required().min(9),
    company: Yup.string(),
    id_card_receiver: Yup.string(),
    post_code_receiver: Yup.string(),
    region_receiver: Yup.string().required(),
    district_receiver: Yup.string().required(),
    township_receiver: Yup.string().required(),
    address_receiver: Yup.string().required().min(10),
    /**
     * Item Information
     */
    item_type: Yup.string().required(),
    item_name: Yup.string(),
    qty: Yup.number().required().min(1),
    weight: Yup.number().required().min(0),
    length: Yup.number().min(0),
    width: Yup.number().min(0),
    height: Yup.number().min(0),
    // dimension: Yup.object({}),
    volume: Yup.number().min(0),
    receipt: Yup.string(),
    remark: Yup.string(),

    /**
     * Cost Information
     */
    payment_method: Yup.string().required(),
    insurance_fee: Yup.number().min(0),
    service_fee: Yup.number().min(0),
    other_fees: Yup.number().min(0),
    cash_collection: Yup.number().min(0),
    bank_information: Yup.number(),
    freight: Yup.number().required().min(1),
    total: Yup.number().required().min(1),
})

export default (props) => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        /**
         * region list
         */
        dispatch(Option_Action.action_fetch_region_option());
        /**
         * item type
         */
        dispatch(Option_Action.action_fetch_itemtype_option());
        /**
         * express or shipment type
         */
        dispatch(Option_Action.action_fetch_shippingtype_option())
        /**
         * shipping mode
         */
        dispatch(Option_Action.action_fetch_shipping_mode_option())
        /**
         * payment type
         */
        dispatch(Option_Action.action_fetch_paymenttypes_option())

    }, [dispatch])

    /**
     * creating user address instances
     */
    let senderAddress = new UserAddress()
    let receiverAddress = new UserAddress()

    /**
     * On Region Change
     */
    const onChangeRegion_Sender = (region_id) => senderAddress.setdistrictList(region_id)
    const onChangeRegion_Receiver = (region_id) => receiverAddress.setdistrictList(region_id)

    /**
     * On Region District
     */
    const onChangeDistrict_Sender = (district_id) => senderAddress.settownshipList(district_id)
    const onChangeDistrict_Receiver = (district_id) => receiverAddress.settownshipList(district_id)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={(value) => console.log(value)}
            >
                {
                    formik => {

                        return (
                            <Grid container spacing={1}>
                                <EntryGrid
                                    header={t('waybill_entry.basic_information')}
                                    headerclass={classes.paper_header}
                                    paperclass={classes.paper}
                                    col={12}
                                >
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.way_bill_no')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.destination}
                                            label={t('waybill_entry.destination')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.shipment_type}
                                            label={t('waybill_entry.shipment_type')}
                                            control={Types.select}
                                            options={props.express_type || []}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.shipping_mode}
                                            label={t('waybill_entry.shipping_mode')}
                                            control={Types.select}
                                            options={props.shipping_mode || []}
                                        />
                                    </AppGrid.InputGrid>
                                </EntryGrid>

                                <EntryGrid
                                    header={t('waybill_entry.shipping_information')}
                                    headerclass={classes.paper_header}
                                    paperclass={classes.paper}
                                    col={6}
                                >
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.customer_type}
                                            label={t('waybill_entry.customer_type')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.sender}
                                            label={t('waybill_entry.sender')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.phone}
                                            label={t('waybill_entry.phone')}
                                        />
                                    </AppGrid.InputGrid>
                                    {/* <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.id_card}
                                            label={t('waybill_entry.id_card')}
                                        />
                                    </AppGrid.InputGrid> */}
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.post_code}
                                            label={t('waybill_entry.post_code')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.region}
                                            label={t('waybill_entry.region')}
                                            control={Types.select}
                                            options={props.region || []}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                onChangeRegion_Sender(e.target.value)
                                                // formik.setFieldValue(INPUT_NAME.township, '')
                                            }}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.district}
                                            label={t('waybill_entry.district')}
                                            control={Types.select}
                                            options={senderAddress.getdistrictList() || []}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                onChangeDistrict_Sender(e.target.value)
                                                // formik.setFieldValue(INPUT_NAME.township, '')
                                            }}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.township}
                                            label={t('waybill_entry.township')}
                                            control={Types.select}
                                            options={senderAddress.gettownshipList() || []}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={12}>
                                        <FormControl
                                            name={INPUT_NAME.sender_state.address}
                                            label={t('waybill_entry.address')}
                                            control={Types.textarea}
                                        />
                                    </AppGrid.InputGrid>

                                </EntryGrid>

                                <EntryGrid
                                    header={t('waybill_entry.receiving_information')}
                                    headerclass={classes.paper_header}
                                    paperclass={classes.paper}
                                    col={6}
                                >
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.receiver}
                                            label={t('waybill_entry.receiver')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.phone}
                                            label={t('waybill_entry.phone')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.company}
                                            label={t('waybill_entry.company')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.id_card}
                                            label={t('waybill_entry.id_card')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.post_code}
                                            label={t('waybill_entry.post_code')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.region}
                                            label={t('waybill_entry.region')}
                                            control={Types.select}
                                            options={props.region || []}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                onChangeRegion_Receiver(e.target.value)
                                                // formik.setFieldValue(INPUT_NAME.township, '')
                                            }}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.district}
                                            label={t('waybill_entry.district')}
                                            control={Types.select}
                                            options={receiverAddress.getdistrictList() || []}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                onChangeDistrict_Receiver(e.target.value)
                                                // formik.setFieldValue(INPUT_NAME.township, '')
                                            }}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.township}
                                            label={t('waybill_entry.township')}
                                            control={Types.select}
                                            options={receiverAddress.gettownshipList() || []}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={12}>
                                        <FormControl
                                            name={INPUT_NAME.receiver_state.address}
                                            label={t('waybill_entry.address')}
                                            control={Types.textarea}
                                        />
                                    </AppGrid.InputGrid>

                                </EntryGrid>

                                <EntryGrid
                                    header={t('waybill_entry.item_information')}
                                    headerclass={classes.paper_header}
                                    paperclass={classes.paper}
                                    col={6}
                                >
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.item_type}
                                            label={t('waybill_entry.item_type')}
                                            control={Types.select}
                                            options={props.itemtype || []}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.item_name}
                                            label={t('waybill_entry.item_name')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.qty}
                                            label={t('waybill_entry.qty')}
                                            type={'number'}
                                            min={1}
                                            defaultValue={1}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={3}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.weight}
                                            label={t('waybill_entry.weight')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <Grid xl={9} lg={9} md={9} sm={12} xs={12} spacing={0} container >
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.item_information.dimension.length}
                                                label={t('waybill_entry.dimension.length')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.item_information.dimension.width}
                                                label={t('waybill_entry.dimension.width')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.item_information.dimension.height}
                                                label={t('waybill_entry.dimension.height')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.item_information.volume}
                                                label={t('waybill_entry.volume')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                    </Grid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.receipt}
                                            label={t('waybill_entry.receipt')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.item_information.remark}
                                            label={t('waybill_entry.remark')}
                                        />
                                    </AppGrid.InputGrid>
                                </EntryGrid>

                                <EntryGrid
                                    header={t('waybill_entry.cost_information')}
                                    headerclass={classes.paper_header}
                                    paperclass={classes.paper}
                                    col={6}
                                >
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.payment_method}
                                            label={t('waybill_entry.payment_method')}
                                            control={Types.select}
                                            options={props.payment_type || []}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.insurance_fee}
                                            label={t('waybill_entry.insurance_fee')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.service_fee}
                                            label={t('waybill_entry.service_fee')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.other_fees}
                                            label={t('waybill_entry.other_fees')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.cash_collection}
                                            label={t('waybill_entry.cash_collection')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.bank_information}
                                            label={t('waybill_entry.bank_information')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.freight}
                                            label={t('waybill_entry.freight')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.cost_information.total}
                                            label={t('waybill_entry.total_amount')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>


                                </EntryGrid>
                            </Grid>
                        )
                    }
                }

            </Formik>
        </div>
    );
};