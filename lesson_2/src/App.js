import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Users} from "./components/users/users";
import {Cars} from "./components/users/cars";


function App() {
    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0)


    return (
        <div>

            <div>
                <button onClick={decrement}>decrement</button>
                counter = {counter}
                <button onClick={increment}>increment</button>
                <button onClick={reset}>reset</button>
            </div>


            <div>
                {/*<Users />*/}
                <Cars/>
            </div>


        </div>

    );
}

export default App;
