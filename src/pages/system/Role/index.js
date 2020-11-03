import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Table } from '../../../component';
import { COLUMN_USER_ROLE } from '../../../component/Table/columns';

import { Action_Roles } from '../../../module/action.system'

export default (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Action_Roles.action_fetch_roles())
    }, [])

    return (
        <div>
            <h5>user role management</h5>
            <Table.CommonTable
                columns={COLUMN_USER_ROLE}
                rows={props.roles}
            />
        </div>
    );
}
