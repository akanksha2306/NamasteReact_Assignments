import React from "react";
import ReactDOM from 'react-dom/client';

const Title = () =>(
<h1>Namaste react using jsx3</h1>
)


//React functional component
//component composition
const HeadingComponent = () =>{
    return(
        <div id = "container">
           {Title()}
           <Title></Title>
           <Title />
            <h1>Namaste react functional component</h1>
            
        </div>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)