import React, {useEffect, useState} from 'react';
import {CommonPropsTypes} from "../../commonp-types/types";


type UsersPropsType = {
    id?: string
}
type UserType =  {
    id: string
    name: string
}
type UsersType = UserType[]
export function Users(props: CommonPropsTypes<UsersPropsType>) {

    const [users,setUsers] = useState<UsersType>([])
    const [visible,setVisible] = useState<boolean>(false)

    const getStateOnclickHandler = () => {
        if (!users.length) {
            debugger
            fetch("http://localhost:3003/users")
                .then(baseRes => baseRes.json())
                .then(json => {
                    setUsers(json)
                })
        }
        setVisible(!visible)
    }
    const clearStateOnclickHandler = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={getStateOnclickHandler}>Get state</button>
            <button onClick={clearStateOnclickHandler}>Clear State</button>
            {visible ? <div>{users.map(u => u.name)}</div> : <></>}
        </div>
    );
}

