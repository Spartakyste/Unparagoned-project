import React, { useState, useEffect } from 'react';
import '../App.css'

const Timer = () => {
    const [time, setTime] = useState(new Date().toDateString());

     useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString());
        }
        setInterval(updateTime, 1000);
    }, []);

    return ( 
        <div>
            <p className="title time">Hello it's {time}</p>
        </div>
     );
}
 
export default Timer;