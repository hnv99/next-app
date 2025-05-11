import type { Metadata } from "next";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const metadata: Metadata = {
  title: "Users",
  description: "Show info of all users.",
};

export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    if (data.ok) {
      return await data.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export default async function Users() {
  const users = await getUsers();

  if (!users) {
    return (
      <div className="text-red-600">
        Lỗi khi tải danh sách người dùng. Vui lòng thử lại sau.
      </div>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
