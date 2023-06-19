import logo from './logo.svg';
import './App.css';

function Header(){    // <-- this is a COMPONENT
  const title = "(-_-)";
  return <h1>Hello world {title}</h1>
}

function Math(){
  const PI = 3.14;
  return(
    <h2>{PI*2}</h2>
  )
}

function App() {    // <-- this is a COMPONENT
  return (
    <div className='App'>
      <h2>Let's start</h2>
      <Header/>
    </div>
  );
}

export default App; //neet it to make a component available to use