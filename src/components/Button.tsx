import React, { useState } from "react";

interface MyButtonProps {  // Just like structure in c++
    text: string | number,  // we can have multi-types
    onClick?: () => void  // Making it an optional parameter
}

// interface Book {
//     title: string,
//     price: number
// }

const MyButton: React.FC<MyButtonProps> = (props) => {  // React.FC is a function component and MyButtonProps is a type of props
    // const { text } = props; // Destructuring, can also assign default value here
    // const [value, setValue] = useState(1); // Implicit casting, value is of type number since we've set up a default value of 1. 
    // const [value, setValue] = useState<string>("a"); // explicit casting, value is of type string since we've defined the value to have a type string and then sending a defualt value "a". Suggested approach
    // const [value, setValue] = useState<Book>({ // explicit casting, value is of type Book (Custom type which we have created using interface) and have also provide a default value according to the interface
    //     title: "iron-man",
    //     price: 10
    // });
    const [value, setValue] = useState<string>(''); // explicit casting, value is of type string since we've defined the value to have a type string and then sending a defualt value "". Suggested approach
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange = {handleNameChange}
                type = "text"
                placeholder = "Enter your Name"
                value = {value}
                />
                <button type = "submit">Submit</button>
            </form>
            {/* <h3>{value.title} - {value.price}</h3>
            <button onClick = {() => setValue({title: "spider-man", price: 20})}>{text}</button>  { /* onClick is a attribute (props) defines behaviour of the button, placed inside openig tag */ }
            { /* and props.text is a children because it is defining the content of the element, it occurs b/w opening and closing tag */ }
        </div>
    )
};

export default MyButton;