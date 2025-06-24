import "./App.css";
import Card from "./component/Card";
import User from "./component/User";

function App() {
  return (
    <div className="flex justify-center items-center bg-[rgb(2,0,36)] bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(9,121,118,1)_0%,_rgba(0,212,255,1)_100%)] h-screen">
      <Card />
      <User/>
    </div>
  );
}

export default App;
