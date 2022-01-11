/* eslint-disable */
import { useGlobalContext } from './base/context';
import Loading from './base/Loading';
import SetupForm from './base/SetupForm';

// import SetupForm from './SetupForm'
// import Loading from './Loading'
// import Modal from './Modal'

const App = () => {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) return <SetupForm />;
  if (loading) return <Loading />;

  return <main>quiz app</main>;
};

export default App;
