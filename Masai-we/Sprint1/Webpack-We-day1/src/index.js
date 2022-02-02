 // add function

// function add(a,b){
    
//     //take two arguments,returns sum of both
    
//     return a+b;
// }

import {add , mult} from "./calculator";
import "./style.css";

import React from "react";
import ReactDOM from "react-dom";

//const myReallyBigVariablename = "x";

console.log(add(5,4));

console.log(mult(5,10));

ReactDOM.render(
     
   React.createElement("h1", { className: "redtext" } ,
      React.createElement("p", {}, "hello Paragraph"),
      "text inside h1",
      React.createElement("div", {id: "div"}, "hello div"),
   
   React.createElement("a", { href: "/test"}, "go somewhere"),
   ), //what
   document.getElementById("root")  //where
);

ReactDOM.render(
    <h1 className="redtext">
        <p>Paragraph</p>
        <div>Hello</div>
        <img src=""/>
    </h1>,
    document.getElementById("root")  //where
);



// @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
// @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader

//transpiler:


// console.log(myReallyBigVariablename);

// old;
// const h1 = document.createElement("h1");
// h1.classList.add("redtext");
// h1.innerText="hello!";
// document.getElementById("root").appendChild(h1);


//IIFE - Immediately Invoked Function Expression