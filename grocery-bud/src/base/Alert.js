import { bool, shape, string } from 'prop-types';

const Alert = ({ state }) => (
  <p className={`alert alert-${state.type}`}>{state.msg}</p>
);

Alert.propTypes = {
  state: shape({ show: bool, msg: string, type: string }).isRequired,
};

export default Alert;
