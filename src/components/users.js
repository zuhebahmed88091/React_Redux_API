import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/users/usersSlice';
import User from './user';

const UsersContainer = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </ul>
  );
};

export default UsersContainer;
