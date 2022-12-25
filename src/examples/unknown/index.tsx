import { useEffect, useState } from "react";
import { User } from "../../components/user";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  age: number;
}

interface IAdminUser extends IUser {
  token: string;
  addNewUser: () => void;
}

function isAdminUser(object: unknown): object is IAdminUser {
  if (object !== null && typeof object === "object") {
    return "token" in object;
  }

  return false;
}

export function Unknown() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUser() {
    const response = await fetch("http://localhost:9000/users");
    const users: unknown[] = await response.json();

    console.log("Users: ", users);

    users.forEach((user: unknown) => {
      if (isAdminUser(user)) {
        console.log("Admin: ", user.firstName, user.lastName, user.token);
      }
    });

    setUsers(users as IUser[]);

    // if (isAdminUser(user)) {
    //   // user
    // }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h2 className="text-5xl font-bold">Users</h2>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
