import axios  from "axios";
import {  useEffect,useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../Header";
// import Logout from "../Logout";

export default function Profile() {
   var [data,setdata]=useState([])
    var id=useParams(id);
   useEffect(() => {
    Header.get(`/members/view/${id.id}`,{
      
    })
    .then(function (response) {
        setdata(response.data.data)
        console.log(response.data.data)
        
    })
    .catch(function (error){
        console.log(error);
    });
},[])
    return(
        <>
        <table>
           <tr>
                <td>Name</td>
                <td><input type="text" value={data.firstname}></input></td>
           </tr>
           <tr>
                <td>Middlename</td>
                <td><input type="text" value={data.middlename}></input></td>
            </tr>
            <tr>
                <td>Lastname</td>
                <td><input type="text" value={data.lastname}></input></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><input type="text" value={data.gender}></input></td>
            </tr>
            <tr>
                <td>Facluty Name</td>
                <td><input type="text" value={data.facluty_name}></input></td>
            </tr>
            <tr>
                <td>Contect</td>
                <td><input type="number" value={data.contect}></input></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" value={data.address}></input></td>
            </tr>
            <tr>
                <td>Coures Name</td>
                <td><input type="text" value={data.coures_name}></input></td>
            </tr>
            <tr>
                <td>Pc No.</td>
                <td><input type="number" value={data.pc_no}></input></td>
            </tr>
           <tr>
                <td >Startingdate</td>
                <td ><input type="date" value={data.startingdate?data.startingdate.slice(0,10):""}></input></td>
            </tr>
            <tr>
                <td >Endingdate</td>
                <td ><input type="date" value={data.endingdate?data.endingdate.slice(0,10):""}></input></td>
            </tr>

        </table>
            {/* <Logout/> */}
        </>
       
    )
}

// add_fee
// {
//     installments.map((e,index)=>{
//         return(
//             <>
//             <tr>
//                 <td className="px-3 text-left">{e[0].slice(0,15)}</td>
//                 <td className="px-3">{e[1]}</td>
//                 <td className="px-3">{e[2]}</td>
//                 <td className="px-3"><button className=" px-3 py-1 border border-transparent text-white bg-green-500 rounded-md" disabled={(e[1]=='paid'?true:false)} onClick={()=>{paid(index)}}>paid</button></td>
//             </tr>
//             </>
//         )
//     })
// }