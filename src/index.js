import React, {Component, useState, useEffect} from 'react';
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

                        <ClassCounter value={value}/>
                        <HookCounter value={value}/>
                    </div>
                )
            }
            <button onClick={() => setVisible((visible) => !visible)}>
                Toggle
            </button>
        </div>
    )
};

const HookCounter = ({value}) => {
    useEffect(() => {
        console.log('UseEffect');
        return () => console.log('clear');
    },[ value ]);
    return <p> {value} </p>
};

class ClassCounter extends Component {
    componentDidMount(){
        console.log('Class: mount');
    }

    componentDidUpdate(props) {
        console.log('Class: update');
    }

    componentWillUnmount(){
        console.log('Class: unmount');
    }

    render(){
        return <p>{this.props.value}</p>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));