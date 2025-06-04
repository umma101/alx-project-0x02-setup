import { UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-sm text-gray-600">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
