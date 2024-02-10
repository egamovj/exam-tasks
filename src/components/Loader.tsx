import { Puff } from 'react-loader-spinner';
import './UserDetail.css';

const Loader = () => {
  return (
    <div className="loader">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
