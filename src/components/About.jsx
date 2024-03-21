import React, { useState } from 'react'

const About = () => {

    // const [name, setName] = useState('divyansh'); // 
    const [details, setDetails] = useState({
        name:'',
        city:''
    }); // 

    // setTimeout(() => {
    //     setName("new value");
    //     // setName((prev) => {
    //     //     console.log(prev);
    //     //     return "newvalue";
    //     // })
    // }, 2000);

    setTimeout(() => {
        setDetails({
            name: 'dsadsa',
            city: 'asdsada'
        });
        // setName((prev) => {
        //     console.log(prev);
        //     return "newvalue";
        // })
    }, 3000);


  return (
    <div>About- {details.name} - {details.city}</div>
  )
}

export default About