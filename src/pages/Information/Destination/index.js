import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from '../../../component';
import { Action_information } from '../../../module/action.information';

export default(props)=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Action_information.action_fetch_destination())
    },[dispatch])

    return (
        <div>
            <h5>Destination Maintenance</h5>
            <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_DESTINATIONS}
                rows={props.destinations?.docs || []}
            />
        </div>
    );
}