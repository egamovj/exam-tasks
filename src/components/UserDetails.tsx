/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { useParams } from 'react-router-dom';
import './UserDetail.css';

const UserDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();

  if (!id) {
    return <div>User not found</div>;
  }

  const userId = parseInt(id, 20);

  const user = useAppSelector((state) =>
    state.user?.data.find((userData) => userData.id === userId)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  const street = user.address?.street || 'N/A';
  const city = user.address?.city || 'N/A';

  return (
    <div className="carddetail">
      <div className="userdetail">
        <div className="user-name">
          <h2 className="name">{user.name}</h2>
        </div>
        <span className="username">Username: {user.username}</span>
        <span className="username">Email: {user.email.toLowerCase()}</span>
        <span className="username">Street: {street}</span>
        <span className="username">City: {city}</span>
        <span className="username">Phone: {user.phone}</span>
      </div>
      <Link to="/user" className="button">
        Back
      </Link>
    </div>
  );
};

export default UserDetails;
