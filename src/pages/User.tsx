import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUsers } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import '../components/UserDetail.css';

const User = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.data);

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="user-wrapper">
      {users?.map((userData: any) => (
        <div key={userData.id} className="user">
          <h3>{userData.name}</h3>
          <h4>{userData.email}</h4>
          <Link className="link" to={`/user/${userData.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;
