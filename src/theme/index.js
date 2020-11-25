import {red} from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    
    palette: {
        primary: {
            main: '#003366'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400,
            dark: red[700]
        },
        background: {
            default: '#fff'
        }
    },
    typography: {
        button: {
            textTransform: 'none',
        },
        fontSize: 14,
    },
})

export default theme