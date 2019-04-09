import React, { Component } from 'react';

class Timer extends Component {
    constructor(){;
    super()
        this.state = { 
            time : ""
        }
    }
    componentDidMount() {
        setInterval(this.getDate, 1000)
        this.getDate();
    };
    
      getDate = () => {
        const time = new Date().toLocaleString();
        this.setState({ time });
    };

    render() { 
        return ( 
            <div>
                <p className="time">Hello we are the {this.state.time}</p>
            </div>
         );
    }
}

export default Timer;

