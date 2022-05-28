import React, { Component } from 'react';
let timer;

 class LocalTime extends Component {
     constructor(){
         super()
         this.state={
             localTime: new Date().toLocaleDateString(),
         };
     }

     componentDidMount(){
         timer=setInterval(()=>{
             this.setState({localTime: new Date().toLocaleTimeString()});
         },1000);
     }

     componentWillUnmount() {
         clearInterval(timer)
     }
  render() {
      const {localTime} =this.state;
    return (
      <div>
          <strong>Local Time:</strong>{localTime}
      </div>
    )
  }
}

export default LocalTime;

// import { useState, useEffect} from 'react';

// function LocalTime() {
//     const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

//     useEffect(()=> {
//         const timer=setInterval(()=> {
//             setLocalTime(new Date().toLocaleTimeString())
//         }, 1000);
//         return() => {
//             clearInterval(timer);
//         }
//     },[localTime]);
//     return (
//         <div>
//             <strong>Local Time:</strong>{localTime}
//         </div>
//     )
// }
// export default LocatTime;