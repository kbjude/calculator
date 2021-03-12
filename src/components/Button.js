import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const {
    name, clickHandler, color, wide,
  } = props;
  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`calculator-key ${wide} ${color} button`}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};
export default Button;
