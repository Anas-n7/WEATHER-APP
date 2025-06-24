import React, { useEffect, useState } from "react";

const USERS_API = "https://reqres.in/api/users?page=1";
const USER_DETAILS_API = "https://reqres.in/api/users/";

function UserList({ onUserClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="p-4 w-1/2">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => onUserClick(user.id)}
          className="cursor-pointer hover:bg-gray-100 p-2 border-b"
        >
          {user.first_name} {user.last_name}
        </div>
      ))}
    </div>
  );
}

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`${USER_DETAILS_API}${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, [userId]);

  if (!user) return <div className="p-4 w-1/2">Select a user to see details</div>;

  return (
    <div className="p-4 w-1/2 border-l">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <img src={user.avatar} alt="avatar" className="rounded-full w-24 h-24 mb-4" />
      <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="flex">
      <UserList onUserClick={setSelectedUserId} />
      <UserDetails userId={selectedUserId} />
    </div>
  );
}

function User() {
  return (
    <div><App/></div>
  )
}

export default User