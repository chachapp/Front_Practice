import Hello  from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  const name = "merong";
  const style = {
    backgroundColor: 'black',
    color :'aqua',
    fontSize :24,
    padding : '1rem'
  }


  return (
    <InputSample />
  );
}

export default App;
