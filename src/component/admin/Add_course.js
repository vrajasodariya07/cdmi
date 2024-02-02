import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";

export default function Add_course(){
    var [coures_name,setcoures_name] = useState()
    
    function send_data() {
    Header.post('/admins/add_course',{
        coures_name: coures_name
    })
    .then(function (response) {
        // handle success
        alert(response.data.status)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    }

    return(
        <>
        <table>
            <tr>
                <td>Coures name</td>
                <td><input type="text" onChange={(e)=> {setcoures_name(e.target.value)}}></input></td>
            </tr>
            <tr>
                <button type="submit" onClick={() => {send_data()}}>submit</button>
            </tr>
        </table>
        </>
    )
}
