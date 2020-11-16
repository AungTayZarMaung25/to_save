import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import * as lang from './lang';

/**
 *  TODO tsa - anyone - if you want to add some value or keyword,plz notice and sort the value alphabetically
 *  use this link 
 *  easy link to sort json :  https://novicelab.org/jsonabc/
 */

export const FONT_CN = 'zh'
export const FONT_EN = 'en-US'

export const LANGUAGES = [
    {
        name: 'English',
        value: FONT_EN
    },
    {
        name: '中文',
        value: FONT_CN
    },

]

i18n.use(LanguageDetector)
    .init({
        resources: {
            'en-US': {
                translation: {
                    "header": {
                        "title_text": "Delivery management system"
                    },
                    "sidebar": lang.sidebar_en,
                    "waybill_entry": lang.waybill_entry_en,

                    /**
                     * common
                     */
                    "branch": "branch",
                    "distination": "destination",
                    "region": "region",
                    "district": "district",
                    "township": "township",
                    "submit": "submit",
                    "cancel": "cancel",
                    "add": "add",
                    "search": "",
                    "delete": "",
                    "updated_at": "",
                    "created_at": "",
                    "updated_by": "",
                    "created_by": "",

                }
            },

            'zh': {
                translation: {
                    "header": {
                        "title_text": "配送管理系统"
                    },
                    "sidebar": lang.sidebar_zh,
                    "waybill_entry": lang.waybill_entry_zh,

                    /**
                     * common
                     */
                    "branch": "",
                    "distination": "",
                    "region": "",
                    "district": "",
                    "township": "",
                    "submit": "",
                    "cancel": "",
                    "add": "",
                    "search": "",
                    "delete": "",
                    "updated_at": "",
                    "created_at": "",
                    "updated_by": "",
                    "created_by": "",
                }
            },


        },
        debug: true,
        ns: ["translation"],
        defaultNS: 'translation',
        fallbackLng: FONT_EN,
        keySeparator: '.',
        interpolation: {
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    })

export default i18n