let userAny: any; ///< ❌ Simply means turn of the Typescript "type-checks"
let userUnkown: unknown; ///< ✅ The right one to use

// userAny.myThing();
// userUnkown.myThing(); ///< Error: we can't access undeclared methods in unknown

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

function isRegularUser(object: unknown): object is IUser {
  if (object !== null && typeof object === "object") {
    return "token"! in object;
  }

  return false;
}

async function fetchUser() {
  const response = await fetch("https://dummyjson.com/users/1");

  //Bad ❌
  const badUser: IUser = await response.json();
  // badUser.

  //Good ✅
  const goodUser: unknown = await response.json();

  // if (isAdminUser(goodUser)) {
  //   // goodUser.
  // }

  // if(isRegularUser(goodUser)) {
  //   goodUser.
  // }
}

export {};
