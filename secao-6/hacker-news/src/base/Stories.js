import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading } = useGlobalContext();

  return isLoading ? <div className="loading" /> : <h2>stories component</h2>;
};

export default Stories;
