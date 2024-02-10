import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUsers } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import '../components/UserDetail.css';
import Loader from '../components/Loader';

const User = () => {
  const dispatch = useAppDispatch();
  const { data: users, loading } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="user-wrapper">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        users?.map((userData: any) => (
          <div key={userData.id} className="user">
            <h3>{userData.name}</h3>
            <h4>{userData.email.toLowerCase()}</h4>
            <Link className="viewlink" to={`/user/${userData.id}`}>
              User data
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
