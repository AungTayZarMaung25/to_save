import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Table } from '../../../component';
import { Action_information } from '../../../module/action.information';

export default(props)=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Action_information.action_fetch_branch({
            table: false,
        }))
    },[dispatch])

    return (
        <div>
            <h5>Branch Maintenance</h5>
            {/* <Table.CommonTable
                columns={Table.HEADER_COLUMN.COLUMN_DESTINATIONS}
                rows={[]}
            /> */}
        </div>
    );
}