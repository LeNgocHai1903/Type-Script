import React from "react";
import UserModel from "../../models/UserModel";
import UserItem from "./UserItem";

const UserProfile: React.FC = () => {
  const onClickHandler = (msg: string) => {
    console.log(msg);
  };
  const userList: UserModel[] = [
    {
      name: "Hai",
      password: "123456",
      address: {
        street: "Tang Bat Ho",
        city: "Ho Chi Minh",
      },
      company: {
        name: "PYCO",
        address: "364 Cong Hoa",
      },
    },
    {
      name: "Hong",
      password: "123456",
      address: {
        street: "Nguyen Thi Dinh",
        city: "Ho Chi Minh",
      },
      company: {
        name: "PYCO",
        address: "364 Cong Hoa",
      },
    },
    {
      name: "Hoa",
      password: "kkks",
      address: {
        street: "Bui Thi Xuan",
        city: "Da Lat",
      },
      company: {
        name: "PYCO",
        address: "364 Cong Hoa",
      },
    },
  ];
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Password</th>
          <th scope="col">Address</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((u, index) => {
          return (
            <tr key={index}>
              <UserItem
                name={u.name}
                password={u.password}
                userSt={u.address.street}
                userCity={u.address.city}
                userComName={u.company.name}
                userComAdd={u.company.address}
                onClickMessage={() => onClickHandler(u.name)}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserProfile;
