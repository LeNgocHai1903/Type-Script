import React from 'react';

interface UItem {
    name : string;
    password : string;
    userSt: string;
    userCity: string;
    userComName: string;
    userComAdd: string;
    onClickMessage: () => void  ; 
}
const UserItem : React.FC<UItem> = (props) => {
    return (
        <>
                <td><p onClick={()=>props.onClickMessage()}>{props.name}</p></td>
                <td>{props.password}</td>
                <td>{props.userSt} , {props.userCity}</td>
                <td>{props.userComName} - {props.userComAdd}</td>
        </>

    )
}

export default UserItem;