// components/common/UserCard.tsx

import { UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-600 text-sm mt-2">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
