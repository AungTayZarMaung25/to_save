import React from 'react'
import { ActionUpdate, ViewQuotation } from './TableCellAction'

export const COLUMN_USER_ROLE = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'rolename',
        header: 'name',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: true,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>delete</button>
    }
]


export const COLUMN_ITEM_TYPES = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: true,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>delete</button>
    }
]



export const COLUMN_CARRIER = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'company_code',
        header: 'company_code',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: true,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>delete</button>
    }
]

export const COLUMN_EXPRESS_TYPES = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: true,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>delete</button>
    }
]

export const COLUMN_DESTINATIONS = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'branch.name',
        header: 'branch',
        check: true,
    },
    {
        field: 'region.name',
        header: 'region',
        check: true,
    },
    {
        field: 'district.name',
        header: 'district',
        check: true,
    },
    {
        field: 'township.name',
        header: 'district',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: false,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: false,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'darednger' }}>delete</button>
    }
]

export const COLUMN_INTERVAL = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'type',
        header: 'type',
        check: true,
    },
    {
        field: 'total',
        header: 'total',
        check: true,
        content: data => Array.isArray(data['townships']) ?
            data['townships'].length
            :
            '-'
    },
    {
        field: 'townships',
        header: 'townships',
        check: true,
        content: data =>
            Array.isArray(data['townships']) ?
                data['townships']
                    .map(t => t.name)
                    .join(',  ')
                :
                '-'
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: false,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'danger' }}>update</button>
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'darednger' }}>delete</button>
    }
]

export const COLUMN_QUOTATION_INTERVAL = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'sending_area',
        header: 'sender area',
        check: true,
        content: data =>
            Array.isArray(data['sending_area']) ?
                data['sending_area']
                    .map(a => a.name)
                    .join(',  ')
                :
                '-'
    },
    {
        field: 'receiving_area',
        header: 'receiver area',
        check: true,
        content: data =>
            Array.isArray(data['receiving_area']) ?
                data['receiving_area']
                    .map(a => a.name)
                    .join(',  ')
                :
                '-'
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: false,
    },
    {
        field: 'update',
        header: '-',
        check: true,
        content: data => <ViewQuotation {...data} />
    },
    {
        field: '-',
        header: '-',
        check: true,
        content: data => <ActionUpdate {...data} />
    },

    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'darednger' }}>delete</button>
    }
]

export const QUOTATION_RULES = [
    {
        field: '_id',
        header: 'ID',
        check: false,
    },
    {
        field: 'name',
        header: 'name',
        check: true,
    },
    {
        field: 'createdAt',
        header: 'created_at',
        check: true,

    },
    {
        field: 'updatedAt',
        header: 'updated_at',
        check: false,
    },
    {
        field: 'delete',
        header: '-',
        check: true,
        content: data => <button className="danger" style={{ backgroundColor: 'darednger' }}>delete</button>
    }
]

export const TEST_COL = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];
