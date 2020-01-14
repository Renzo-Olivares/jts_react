import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Login from './components/Login/Login';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';

/*interface Props{
    counter: number,
}

interface BtnProps{
    onClick: () => void,
    text: string
}

const Display = ({counter}: Props) => <div>{counter}</div>;
const MatButton = ({onClick, text}: BtnProps) => <Button variant="contained" color="primary" onClick={onClick}>{text}</Button>;

const App = () =>{
    const [counter, setCounter] = useState(0);

    const setCount = (count: number) => {
        console.log("clicked");
        return () => setCounter(count);
    };

    return(
        <div>
            <p>WIP</p>
            <Display counter={counter}/>
            <MatButton onClick={setCount(counter + 1)} text={"Plus"}/>
            <MatButton onClick={setCount(0)} text={"Zero"}/>
        </div>
    );
};
*/

const refresh = () => ReactDOM.render(<App />, document.getElementById('root'));
refresh();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
