// import LoginPage from './components/LoginPage';
import './App.css';
import Parent from './Practice/Parent';
// import ChildCompo from './Practice/ChildCompo';
// import { useState, useMemo } from 'react';

function App() {
  // const [num, setNum] = useState(0);
  // const handleUpdatedNum = () => {
  // sothing
  // }
  // const getChildComp = useMemo(() => { <ChildCompo handleUpdatedNum={handleUpdatedNum} /> }, [handleUpdatedNum]);
  return (
    <div className="App">
      {/* <h1>{num}</h1>
      {getChildComp}
      <button onClick={() => setNum(num + 1)}>Addition</button> */}
      <Parent />
    </div>
  );
}

export default App;
