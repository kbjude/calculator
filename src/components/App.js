import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      total: null,
      next: null,
      operation: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
    this.setState(state=>(state, buttonName))
  }

  render() {
    const {total, next} = this.state;
    return (
      <>
        <Display result={next || total || '0'}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </>
    );
  }
}

const data = {
  total: 0,
  next: 0,
  operation: '',
};

calculate(data, '-');
