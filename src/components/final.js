import { useState } from "react";
import { useSelector } from "react-redux";

var customer_data = [];
function Finel()
{
    // localStorage.removeItem("customer_data");
    const total_bill = localStorage.getItem("currnt_bill");
    const [name , setname] = useState();
    const month_data = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const movie_data = ["Kalki 2898 AD" , "Jhamkudi" , "Trisha on the Rocks" , "Munjya" , "Chandu Champion"]
    const i = localStorage.getItem("movie_indentyfier_index");
    var user_data = localStorage.getItem("customer_data");
    user_data = JSON.parse(user_data);

    if(user_data == null)
    {
        user_data = [];
    }

    const book_seate = () =>{
        const time = new Date();

        const hours = time.getHours();
        const minuts = time.getMinutes();
        const day = time.getDate();
        const month_val = time.getMonth();
        const month_name = month_data[month_val];
        const movie_name = movie_data[i];

        customer_data = [...user_data , {name , total_bill , hours , minuts , day , month_name , movie_name}];
        const data_holder = JSON.stringify(customer_data);
        localStorage.setItem("customer_data" , data_holder);

        alert("your ticket is booked scussfully")
    }

    return(
        <>
            <input type="text" name="" id="" placeholder="enter your name" onChange={(e) => setname(e.target.value)} />
            <h2>Bill Amount = {total_bill}</h2>
            <button style={{padding: "10px 50px", border: "4px solid black", marginTop: "50px", fontSize: "24px", fontWeight: "700"}} onClick={book_seate}>Book ticket</button>
        </>
    );
}

export default Finel;