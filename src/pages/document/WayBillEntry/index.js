import React from 'react';
import {
    Divider,
    Grid,
    makeStyles,
    Paper
} from '@material-ui/core';
import * as Yup from 'yup'

import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { AppGrid, FormControl, Types } from '../../../component';

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

const shipment_type = [
    {
        value: 1,
        key: 'Shipment 1'
    },
    {
        value: 2,
        key: 'Shipment 2'
    },
    {
        value: 3,
        key: 'Shipment 3'
    }
]

const shipping_mode = [
    {
        value: 1,
        key: 'Shipping 1'
    },
    {
        value: 2,
        key: 'Shipping 2'
    },
    {
        value: 3,
        key: 'Shipping 3'
    }
]

const carrier = [
    {
        value: 1,
        key: 'carrier 1'
    },
    {
        value: 2,
        key: 'carrier 2'
    },
    {
        value: 3,
        key: 'carrier 3'
    }
]

const destination = [
    {
        value: 1,
        key: 'dest 1'
    },
    {
        value: 2,
        key: 'dest 2'
    },
    {
        value: 3,
        key: 'dest 3'
    }
]

const region = [
    {
        value: 1,
        key: 'Mandalay'
    },
    {
        value: 2,
        key: 'Yangon'
    },
    {
        value: 3,
        key: 'Pago'
    }
]

const district = [
    {
        value: 1,
        key: 'Mandalay'
    },
    {
        value: 2,
        key: 'Pyin Oo Lwin'
    },
    {
        value: 3,
        key: 'Kyaut Se'
    }
]

const township = [
    {
        value: 1,
        key: 'Pyi Gyi Tagon'
    },
    {
        value: 2,
        key: 'Aung Myay Thar San'
    },
    {
        value: 3,
        key: 'Chan Mya Thar Si'
    }
]
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

const INPUT_NAME = {
    basic: {
        waybill_no: 'waybill_no',
        destination: 'destination',
        pickup: 'pickup',
        shipping_time: 'shipping_time',
        shipment_type: 'shipment_type',
        shipping_mode: 'shipping_mode',
        carrier: 'carrier',
        transferred_waybill: 'transferred_waybill',
        destination_station: 'destination_station',
    },
    sender: {
        customer_type: 'customer_type',
        sender: 'sender',
        phone: 'phone',
        id_card: 'id_card',
        post_code: 'post_code',
        region: 'region',
        district: 'district',
        township: 'township',
        address: 'address'
    },
    receiver: {
        receiver: 'receiver',
        phone: 'phone_receiver',
        company: 'company',
        id_card: 'id_card_receiver',
        post_code: 'post_code_receiver',
        region: 'region_receiver',
        district: 'district_receiver',
        township: 'township_receiver',
        address: 'address_receiver'
    },
    item_information: {
        item_type: '',
        item_name: '',
        count: 1,
        weight: 0,
        dimension: '',
        volume: 0.0,
        receipt: '',
        remark: '',
    },
    cost_information: {
        payment_method: 'payment_method',
        insurance_fee: 'insurance_fee',
        service_fee: 'service_fee',
        other_fees: 'other_fees',
        cash_collection: 'cash_collection',
        bank_information: 'bank_information',
        freight: 'freight',
        total: 'total',
    }
}

const initialState = {
    basic: {
        waybill_no: '',
        destination: '',
        pickup: '',
        shipping_time: new Date(),
        shipment_type: '',
        shipping_mode: '',
        carrier: '',
        transferred_waybill: '',
        destination_station: '',
    },
    sender_state: {
        customer_type: '',
        sender: '',
        phone: '',
        id_card: '',
        post_code: '',
        region: '',
        district: '',
        township: '',
        address: ''
    },
    receiver_state: {
        receiver: '',
        phone: '',
        company: '',
        id_card: '',
        post_code: '',
        region: '',
        district: '',
        township: '',
        address: ''
    },
    item_information: {
        item_type: '',
        item_name: '',
        count: 1,
        weight: 0,
        dimension: '',
        volume: 0.0,
        receipt: '',
        remark: '',
    },
    cost_information: {
        payment_method: '',
        insurance_fee: 0,
        service_fee: 0,
        other_fees: 0,
        cash_collection: 0,
        bank_information: '',
        freight: 0,
        total: 0
    }
}

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
    sender: Yup.string(),
    phone: Yup.string(),
    id_card: Yup.string(),
    region: Yup.string(),
    distrit: Yup.string(),
    township: Yup.string(),
    address: Yup.string(),
    /**
     * Receiver Information
     */

    /**
     * Item Information
     */

    /**
     * Cost Information
     */
    payment_method: Yup.string().required(),
    insurance_fee: Yup.number(),
    service_fee: Yup.number(),
    other_fees: Yup.number(),
    cash_collection: Yup.number(),
    bank_information: Yup.number(),
    freight: Yup.number().required(),
    total: Yup.number().required(),
})

export default (props) => {

    const { t } = useTranslation()

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
                        const { getFieldProps } = formik

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
                                            name={INPUT_NAME.basic.pickup}
                                            label={t('waybill_entry.pickup')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.shipping_time}
                                            label={t('waybill_entry.shipping_time')}
                                            control={Types.date}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.shipment_type}
                                            label={t('waybill_entry.shipment_type')}
                                            control={Types.select}
                                            options={shipment_type}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.shipping_mode}
                                            label={t('waybill_entry.shipping_mode')}
                                            control={Types.select}
                                            options={shipping_mode}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.carrier}
                                            label={t('waybill_entry.carrier')}
                                            control={Types.select}
                                            options={carrier}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.transferred_waybill}
                                            label={t('waybill_entry.transferred_waybill')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={2}>
                                        <FormControl
                                            name={INPUT_NAME.basic.destination_station}
                                            label={t('waybill_entry.destination_station')}
                                            control={Types.select}
                                            options={destination}
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
                                            name={INPUT_NAME.sender.customer_type}
                                            label={t('waybill_entry.customer_type')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.sender}
                                            label={t('waybill_entry.sender')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.phone}
                                            label={t('waybill_entry.phone')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.id_card}
                                            label={t('waybill_entry.id_card')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.post_code}
                                            label={t('waybill_entry.post_code')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.region}
                                            label={t('waybill_entry.region')}
                                            control={Types.select}
                                            options={region}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.district}
                                            label={t('waybill_entry.district')}
                                            control={Types.select}
                                            options={district}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.sender.township}
                                            label={t('waybill_entry.township')}
                                            control={Types.select}
                                            options={township}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={12}>
                                        <FormControl
                                            name={INPUT_NAME.sender.address}
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
                                            name={INPUT_NAME.receiver.receiver}
                                            label={t('waybill_entry.receiver')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.phone}
                                            label={t('waybill_entry.phone')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.company}
                                            label={t('waybill_entry.company')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.id_card}
                                            label={t('waybill_entry.id_card')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.post_code}
                                            label={t('waybill_entry.post_code')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.region}
                                            label={t('waybill_entry.region')}
                                            control={Types.select}
                                            options={region}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.district}
                                            label={t('waybill_entry.district')}
                                            control={Types.select}
                                            options={district}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={6}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.township}
                                            label={t('waybill_entry.township')}
                                            control={Types.select}
                                            options={township}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={12}>
                                        <FormControl
                                            name={INPUT_NAME.receiver.address}
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
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.item_type')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.item_name')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.count')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={3}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.weight')}
                                            type={'number'}
                                            min={0}
                                        />
                                    </AppGrid.InputGrid>
                                    <Grid xl={9} lg={9} md={9} sm={12} xs={12} spacing={0} container >
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.basic.waybill_no}
                                                label={t('waybill_entry.dimension.length')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.basic.waybill_no}
                                                label={t('waybill_entry.dimension.width')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.basic.waybill_no}
                                                label={t('waybill_entry.dimension.height')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                        <AppGrid.InputGrid col={3}>
                                            <FormControl
                                                name={INPUT_NAME.basic.waybill_no}
                                                label={t('waybill_entry.volume')}
                                                type={'number'}
                                                min={0}
                                            />
                                        </AppGrid.InputGrid>
                                    </Grid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
                                            label={t('waybill_entry.receipt')}
                                        />
                                    </AppGrid.InputGrid>
                                    <AppGrid.InputGrid col={4}>
                                        <FormControl
                                            name={INPUT_NAME.basic.waybill_no}
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