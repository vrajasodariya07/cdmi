// view 
import axios  from "axios";
import {  useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../Header";
// import Logout from "../Logout";

export default function Student() {
   var [data,setdata]=useState([])
   
   
   useEffect(() => {
    Header.get(`/admins/student_views`,{
      
    })
    .then(function (response) {
        setdata(response.data.data)
        console.log(response.data.data)
        
    })
    .catch(function (error){
        console.log(error);
    });

   
},[])

    function delet(id){
        Header.get(`/members/deletes/${id}`,{
      
        })
        .then(function (response) {
            alert(response.data.status)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });
    }

    return(
        <>
        <table border="1">
           <tr>
                <td>name</td>
                <td>gender</td>
                <td>contect</td>
                <td>delete</td>
                <td>contect</td>
                <td>contect</td>
           </tr>
            {
                data.map((a)=>{
                    return(
                        <>
                            <tr>
                                <td>{a.firstname}</td>
                                <td>{a.gender}</td>
                                <td>{a.contect}</td>
                                <td><button onClick={()=>{delet(a._id)}}>delete</button></td>
                                <td><button><a href={"/member/Edit_student/"+a._id}>edit</a></button></td>
                                <td><button><a href={"/member/Profile/"+a._id}>profile</a></button></td>
                            </tr>
                        </>
                    )
                })
            }
              
        </table>
            {/* <Logout/> */}
        </>
       
    )
}
// firstname:{type:String},
// middlename:{type:String},
// lastname:{type:String},
// facluty_name:{type:String},
// contect:{type:Number},
// address:{type:String},
// coures_name:{type: mongoose.Schema.Types.ObjectId,ref: "course"},
// pc_no:{type:Number},
// startingdate:{type:Date,default:Date.now},
// enddate:{type:Date},
// fee_stu:[]

// function sear(search) {
//     axios.get(`http://localhost:4000/member/pending_fees?name=${search}`, {
//     })
//       .then(function (response) {
//         setdata(response.data.data)
//         console.log(response.data.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }