import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    row: {
        border: '2px solid #ECECEC',
    },
    td: {
        padding: '10px 10px',
        verticalAlign: 'top',
        borderLeft: '1px solid #ECECEC '
    },
    button: {

    }
})

export default ({
    columns = [],
    rows = [],
}) => {

    const classes = useStyles()

    /**
     * 
     * @param {*} item  each rows from the data loop
     * @param {*} col  field name from the render header field
     */
    const renderCell = (item, col) => {

        const value = _.get(item, col.field);

        if (col.content) return col.content(item);

        return value;

    }

    return (
        <tbody>
            {
                rows.map((row, index) => (
                    <React.Fragment key={index + row._id}>
                        <tr className={classes.row}>
                            <td className={classes.td}>
                                {index + 1}
                            </td>
                            {
                                columns.map(col => (
                                    <td key={row._id + col.field} className={classes.td}>
                                        {renderCell(row, col)}
                                    </td>
                                ))
                            }
                        </tr>
                    </React.Fragment>
                ))
            }
        </tbody>
    );
}