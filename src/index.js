import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);
    return(
        <div>
            {
                visible&&(
                    <div>
                        <button onClick={() => setValue((v) => v + 1)}>
                            +
                        </button>
                        {/*<HookCounter value={value}/>*/}
                        <Notification/>
                    </div>
                )
            }
            <button onClick={() => setVisible((visible) => !visible)}>
                Toggle
            </button>
        </div>
    )
};

const HookCounter = ({ value }) => {
    useEffect(() => {
        console.log('Component did mount');
        return () => console.log('Component did unmount');
    }, []);
    useEffect(() => console.log('Component did update'));
    useEffect(() => () => console.log('Component did unmount'), []);
    return <p> {value} </p>
};

const Notification = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timeout  = setTimeout(
            () => setVisible(false),
            2500);
        return () => clearTimeout(timeout)
    }, []);
    return(
        visible&&(
            <div><p>Hello</p></div>
        )
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));