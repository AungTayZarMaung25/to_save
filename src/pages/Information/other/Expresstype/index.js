import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from '../../../../component';
import { Action_other_maintenance } from '../../../../module/action.information';

export default(props) =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Action_other_maintenance.action_fetch_express_types());
    },[])

    return (
        <div>
            <h5>Express Type Maintenance</h5>
            <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_EXPRESS_TYPES}
                rows={props.expresstypes}
            />
        </div>
    )
}
