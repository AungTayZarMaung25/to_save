import React from 'react'
import {
    AccountTree
} from '@material-ui/icons'

export default {
    data: [
        {
            name: "Announcement",
            url: "/announcement"
        },
        {
            name: "Scanning",
            
            children: [
                {
                    "name": "receiving scan",
                    "url": "/child31"
                },
                {
                    "name": "transit scan",
                    "url": "/child32"
                },
                {
                    "name": "arrival scan",
                    "url": "/child33"
                },
                {
                    "name": "dispatch scan",
                    "url": "/child31"
                },
                {
                    "name": "problem scan",
                    "url": "/child32"
                },
                {
                    "name": "bag scan",
                    "url": "/child33"
                },
                {
                    "name": "truck loading scan",
                    "url": "/child31"
                },
                {
                    "name": "departure scan",
                    "url": "/child32"
                },
                {
                    "name": "on truck scan",
                    "url": "/child33"
                },
                {
                    "name": "document scan",
                    "url": "/child31"
                },
                {
                    "name": "delivery scan",
                    "url": "/child32"
                },
                {
                    "name": "scan data import",
                    "url": "/child33"
                },
            ]
        },
        {
            name: "Waybill",
            children: [
                {
                    "name": "waybill entry",
                    "url": "/child41"
                },
                {
                    "name": "waybill editor",
                    "url": "/child42"
                },
                {
                    "name": "waybill query",
                    "url": "/child41"
                },
                {
                    "name": "data import",
                    "url": "/child42"
                },
            ]
        },
        {
            name: "Sign In",
            children: [
                {
                    "name": "sing in entry",
                    "url": "/child41"
                },
                {
                    "name": "sign in query",
                    "url": "/child42"
                },
            ]
        },
        {
            name: "Customer Service",
            children: [
                {
                    "name": "express tracking query",
                    "url": "/child41"
                },
                {
                    "name": "edit express tracking",
                    "url": "/child42"
                },
                {
                    "name": "service scope query",
                    "url": "/child41"
                },
                {
                    "name": "customer service log",
                    "url": "/child42"
                },
                {
                    "name": "problem parts",
                    children: [
                        {
                            "name": "register",
                            "url": "/child42"
                        },
                        {
                            "name": "handle",
                            "url": "/child42"
                        },
                        {
                            "name": "query",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "arbitration",
                    children: [
                        {
                            "name": "registration and enquiry",
                            "url": "/child42"
                        },
                        {
                            "name": "administration",
                            "url": "/child42"
                        },
                    ]
                },

            ]
        },
        {
            name: "Finance",
            children: [
                {
                    "name": "advance charge",
                    "url": "/child41"
                },
                {
                    "name": "financial bill management",
                    "url": "/child42"
                },
                {
                    "name": "summary of financial statement",
                    "url": "/child41"
                },
                {
                    "name": "employee financial statement",
                    "url": "/child42"
                },
                {
                    "name": "cash",
                    "url": "/child41"
                },
                {
                    "name": "monthly checkout bill",
                    "url": "/child42"
                },
                {
                    "name": "collection of goods",
                    children: [
                        {
                            "name": "1",
                            "url": "/child41"
                        },
                        {
                            "name": "2",
                            "url": "/child42"
                        },
                        {
                            "name": "3",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "sales commission",
                    "url": "/child42"
                },

            ]
        },
        {
            name: "Order",
            children: [
                {
                    "name": "order distribution",
                    "url": "/child41"
                },
                {
                    "name": "order query",
                    "url": "/child42"
                },
            ]
        },
        {
            name: "Storage",
            icon: <AccountTree/>,
            children: [
                {
                    "name": "item name maintenance",
                    "url": "/child41"
                },
                {
                    "name": "warehousing",
                    children: [
                        {
                            "name": "register",
                            "url": "/child41"
                        },
                        {
                            "name": "administration",
                            "url": "/child42"
                        },
                        {
                            "name": "query",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "out of treasury",
                    children: [
                        {
                            "name": "register",
                            "url": "/child41"
                        },
                        {
                            "name": "administration",
                            "url": "/child42"
                        },
                        {
                            "name": "query",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "inventory balance inquiry",
                    "url": "/child42"
                },
                {
                    "name": "material",
                    children: [
                        {
                            "name": "register",
                            "url": "/child41"
                        },
                        {
                            "name": "administration",
                            "url": "/child42"
                        },
                        {
                            "name": "query",
                            "url": "/child42"
                        },
                    ]
                },
            ]
        },
        {
            name: "data",
            children: [
                {
                    "name": "branch maintenance",
                    "url": "/child41"
                },
                {
                    "name": "employee maintenance",
                    "url": "/child42"
                },
                {
                    "name": "destination maintenance",
                    "url": "/child41"
                },
                {
                    "name": "customer maintenance",
                    children: [
                        {
                            "name": "VIP-client",
                            "url": "/child41"
                        },
                        {
                            "name": "ordinary customer",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "quotation maintenance",
                    children: [
                        {
                            "name": "type maintenance",
                            "url": "/child41"
                        },
                        {
                            "name": "interval maintenance",
                            "url": "/child42"
                        },
                        {
                            "name": "quotation maintenance",
                            "url": "/child41"
                        },
                        {
                            "name": "extract maintenance",
                            "url": "/child42"
                        },
                        {
                            "name": "固定费用",
                            "url": "/child42"
                        },

                    ]
                },
                {
                    "name": "sms template",
                    "url": "/child42"
                },
                {
                    "name": "single number management",
                    children: [
                        {
                            "name": "single number rule",
                            "url": "/child42"
                        },
                        {
                            "name": "single number distribution",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "other maintenance",
                    children: [
                        {
                            "name": "goods type",
                            "url": "/child41"
                        },
                        {
                            "name": "shipment type",
                            "url": "/child42"
                        },
                        {
                            "name": "shift",
                            "url": "/child41"
                        },
                        {
                            "name": "carrier",
                            "url": "/child42"
                        },
                        {
                            "name": "vehicle management",
                            "url": "/child41"
                        },
                        {
                            "name": "warehouse management",
                            "url": "/child42"
                        },
                        {
                            "name": "payment method",
                            "url": "/child41"
                        },
                        {
                            "name": "shipping mode",
                            "url": "/child42"
                        },
                        {
                            "name": "question type",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "table import",
                    "url": "/child42"
                },
            ]
        },
        {
            name: "report form",
            children: [
                {
                    "name": "profit statement",
                    "url": "/child41"
                },
                {
                    "name": "business table",
                    "url": "/child42"
                },
                {
                    "name": "big data platform",
                    "url": "/child41"
                },
                {
                    "name": "business summary table",
                    "url": "/child42"
                },
                {
                    "name": "part forecast",
                    "url": "/child41"
                },
                {
                    "name": "central monitoring",
                    children: [
                        {
                            "name": "pooling summary",
                            "url": "/child41"
                        },
                        {
                            "name": "arrival and departure",
                            "url": "/child42"
                        },
                    ]
                },
                {
                    "name": "dot monitoring",
                    children: [
                        {
                            "name": "monitor and control",
                            "url": "/child41"
                        },
                        {
                            "name": "hair piece monitoring",
                            "url": "/child42"
                        },
                        {
                            "name": "part monitoring",
                            "url": "/child41"
                        },
                        {
                            "name": "dispatch monitoring",
                            "url": "/child42"
                        },
                        {
                            "name": "sign and monitor",
                            "url": "/child41"
                        },
                    ]
                },
                {
                    "name": "scanning record",
                    children: [
                        {
                            "name": "scan query",
                            "url": "/child41"
                        },
                        {
                            "name": "message delete",
                            "url": "/child42"
                        }
                    ]
                },
            ]
        },
        {
            name: "system",
            children: [
                {
                    "name": "role management",
                    "url": "/child41"
                },
                {
                    "name": "user management",
                    "url": "/child42"
                },
                {
                    "name": "system setup",
                    "url": "/child41"
                },
                {
                    "name": "carousel management",
                    "url": "/child42"
                },
            ]
        },
        {
            name: "map",
            children: [
                {
                    "name": "operator location tracking",
                    "url": "/child41"
                },
                {
                    "name": "vehicle positioning",
                    "url": "/child42"
                },
            ]
        },

    ]
}