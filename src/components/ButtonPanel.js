import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <div className="button-panel">
      <h1> Calculator</h1>
      <>
        <div className="row1">
          <Button name="AC" clickHandler={handleClick} />
          <Button name="+/-" clickHandler={handleClick} />
          <Button name="%" clickHandler={handleClick} />
          <Button name="÷" clickHandler={handleClick} />
        </div>
        <div className="row2">
          <Button name="7" clickHandler={handleClick} />
          <Button name="8" clickHandler={handleClick} />
          <Button name="9" clickHandler={handleClick} />
          <Button name="x" clickHandler={handleClick} />
        </div>
        <div className="row3">
          <Button name="4" clickHandler={handleClick} />
          <Button name="5" clickHandler={handleClick} />
          <Button name="6" clickHandler={handleClick} />
          <Button name="-" clickHandler={handleClick} />
        </div>
        <div className="row4">
          <Button name="1" clickHandler={handleClick} />
          <Button name="2" clickHandler={handleClick} />
          <Button name="3" clickHandler={handleClick} />
          <Button name="+" clickHandler={handleClick} />
        </div>
        <div className="row5">
          <Button name="0" className="button-0" clickHandler={handleClick} />
          <Button name="." clickHandler={handleClick} />
          <Button name="=" clickHandler={handleClick} />
        </div>
      </>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };
export default ButtonPanel;
