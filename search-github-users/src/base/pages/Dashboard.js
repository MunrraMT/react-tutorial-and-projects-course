import { Info, Repos, User, Search, Navbar } from '../components';
import { useGithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const { loading } = useGithubContext();

  return (
    <main>
      <Navbar />
      <Search />
      {loading ? (
        <img src={loadingImage} alt="Loading" className="loading-img" />
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
