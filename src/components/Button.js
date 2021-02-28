import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const { name, clickHandler } = props;
  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      {name}
    </button>
  );
};
Button.propTypes = { name: PropTypes.string.isRequired, clickHandler: PropTypes.func.isRequired };
export default Button;
