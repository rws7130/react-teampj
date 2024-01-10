import { useUserStore } from '../store/useUserStore';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const user = useUserStore((state) => state.user);
  // useEffect(() => {
  //   const refreshToken = secureLocalStorage.getItem("refreshToken");
  //   if (refreshToken) {
  //     useUserStore.getState().setRefreshToken(refreshToken);
  //   }
  // }, []);

  return (
    <div>
      <h1>홈 </h1>
      <h2>{user?.email}</h2>
      <Link to="/admin">어드민으로 이동</Link>
      <div>
        <Link to="/user/dev1">userDev1</Link>
        <Link to="/user/dev2">userDev2</Link>
        <Link to="/user/dev3">userDev3</Link>
        <Link to="/user/dev4">userDev4</Link>
        <Link to="/user/dev5">userDev5</Link>
        <Link to="/user/dev6">userDev6</Link>
      </div>
    </div>
  );
};

export default HomePage;
