interface IUserProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export function User(props: IUserProps) {
  const { id, image, firstName, lastName } = props;

  return (
    <div className="flex flex-col m-6">
      <img src={image} className="w-40" />
      <span className="text-xl">
        ({id}) {firstName} {lastName}
      </span>
    </div>
  );
}
