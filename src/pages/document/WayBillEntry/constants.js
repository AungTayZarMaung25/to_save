const INPUT_NAME = {
    basic: {
        waybill_no: 'waybill_no',
        destination: 'destination',
        shipment_type: 'shipment_type',
        shipping_mode: 'shipping_mode',
    },
    sender_state: {
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
    receiver_state: {
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
        item_type: 'item_type',
        item_name: 'item_name',
        qty: 'qty',
        weight: 'weight',
        dimension: {
            length: 'length',
            width: 'width',
            height: 'height'
        },
        volume: 'volume',
        receipt: 'receipt',
        remark: 'remark',
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

    customer_type: '',
    sender: '',
    phone: '',
    id_card: '',
    post_code: '',
    region: '',
    district: '',
    township: '',
    address: '',

    receiver: '',
    phone_receiver: '',
    company_receiver: '',
    id_card_receiver: '',
    post_code_receiver: '',
    region_receiver: '',
    district_receiver: '',
    township_receiver: '',
    address_receiver: '',

    item_information: {
        item_type: '',
        item_name: '',
        qty: 1,
        weight: 0,
        dimension: {
            length: '',
            weight: '',
            height: ''
        },
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

export {
    INPUT_NAME,
    initialState
}