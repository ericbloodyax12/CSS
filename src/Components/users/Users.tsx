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

    const onclickHandler = () => {
        if (!users.length) {
            fetch("http://localhost:3003/users")
                .then(baseRes => baseRes.json())
                .then(json => {
                    setUsers(json)
                })
        }
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={onclickHandler}>Get state</button>
            {visible ? <div>{users.map(u => u.name)}</div> : <></>}
        </div>
    );
}

