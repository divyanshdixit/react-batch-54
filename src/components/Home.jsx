import React from 'react';

// object export 
// object destructuring 
const Home = ({city}) => {

    return (
        <>
            <h1> Home </h1>
            <p> {city} </p>
        </>
    )
}

var name = "divyansh";

export default Home;
export {name};