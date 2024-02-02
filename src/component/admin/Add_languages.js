import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";

export default function Add_languages(){
    var [course_id,setcourse_id] = useState()
    var [languages,setlanguages] = useState()
    var [duration,setduration] = useState()
    var [fee,setfee] = useState()
    var [data,setdata]=useState([])

    function send_data() {
    Header.post('/admins/add_language',{
        course_id:course_id,
        languages:languages,
        duration:duration,
        fee:fee
    },
    // {
    //   hraders:{
    //     "authorization":localStorage.getItem("token")
    //   }  
    // }
    )
    .then(function (response) {
        // handle success
        alert(response.data.status)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    }
    useEffect(()=>{
        Header.get('/admins/views_course',{
        
    })
    .then(function (response) {
        // handle success
        console.log(response.data.data)
        // alert(response.data.status)
        setdata(response.data.data)

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    },[])
   

    return(
        <>
        <table>
            <tr>
                    <td>Coures_name</td>
                    <td><select onChange={(e)=>{setcourse_id(e.target.value)}}>
                        <option selected disabled>select</option>
                        {
                        data.map((a)=>{
                            return(
                                <>
                                        <option value={a._id}>{a.coures_name}</option>
                                </>
                            )
                        })
                    }
                    </select></td>
                </tr>
            <tr>
                <td>languages</td>
                <td><input type="text" onChange={(e)=>{setlanguages(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>duration</td>
                <td><input type="text" onChange={(e)=>{setduration(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>fee</td>
                <td><input type="text" onChange={(e)=>{setfee(e.target.value)}}></input></td>
            </tr>
            <tr>
                <button type="submit" onClick={() => {send_data()}}>submit</button>
            </tr>
        </table>
        </>
    )
}
