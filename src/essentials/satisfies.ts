//Custom interface for rendering images
interface ICustomImage {
  data: string;
  width: number;
  height: number;
}

//Sample of a Custom Image
const myCustomImage: ICustomImage = {
  data: "base64",
  width: 200,
  height: 150,
};

//Image type for the user
type UserImage = string | ICustomImage;

//User interface
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: UserImage;
}

//Bad ❌
const badUser: IUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: "image-url",
};

//Good ✅
const goodUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: myCustomImage,
} satisfies IUser;

export {};
