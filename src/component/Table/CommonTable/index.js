import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default ({
    columns = [],
    rows = [],
    onSort = _ => { }
}) => {

    const filter_columns = columns.filter(col => col.check)

    return (
        <table style={{
            width: '100%',
            borderCollapse: 'collapse'
        }}>

            <TableHeader
                columns={filter_columns}
                onSort={onSort}
                sortedColumn={{}}
            />

            <TableBody
                columns={filter_columns}
                rows={rows}
            />

        </table>
    );
}
