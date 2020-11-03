import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default ({
    columns = [],
    rows = [],
    showAll = true,
    onSort = _ => { },
}) => {

    const filter_columns = columns.filter(col => col.check)
    const has_data = rows.length > 0

    let header_col = filter_columns
    if (!showAll)
        if (!has_data)
            header_col = filter_columns.slice(0, 6)

    return (
        <table style={{
            width: '100%',
            borderCollapse: 'collapse'
        }}>

            <TableHeader
                columns={header_col}
                onSort={onSort}
                sortedColumn={{}}
            />

            <TableBody
                columns={header_col}
                rows={rows}
                has_data={has_data}
            />

        </table>
    );
}
