import React from 'react';
// import style from './HomePage.css'

const HomePage = () => {
    return (
    <div>
        <div className="HelloWorld" >Hello World</div>
        <h1>This is home</h1>
        <div>Home Content</div>
        <button onClick={() => { console.log('hello world') }} >Click Me</button>
    </div>
    )
};

export default {
   component: HomePage
} ;