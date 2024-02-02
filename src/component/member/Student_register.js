import axios  from "axios";
import { useEffect,useState } from "react";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Student_register(){
    var [firstname,setfirstname]=useState()
    var [middlename,setmiddlename]=useState()
    var [lastname,setlastname]=useState()
    var [gender,setgender]=useState()
    var [facluty_name,setfacluty_name]=useState()
    var [contect,setcontect]=useState()
    var [address,setaddress]=useState()
    var [coures_name,setcoures_name]=useState()
    var [pc_no,setpc_no]=useState()
    var [fee_stu,setfee_stu]=useState([])
    var [data,setdata] =useState([])

    useEffect(() => {
        Header.get('/members/views_course',{
          
        })
        .then(function (response) {
            setdata(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });
    },[])



    function student_data(){
        Header.post('/members/register',{
            firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            gender:gender,
            facluty_name:facluty_name,
            contect:contect,
            address:address,
            coures_name:coures_name,
            pc_no:pc_no,
            installment:fee_stu
        })
        .then(function (response) {
            alert(response.data.status)
        })
        .catch(function (error){
            console.log(error);
        });
    }
    return(
        <>
        <Member_menu/>
        <div className="h-screen bg-blue-950 pt-5">
                <div className="border-2 w-1/3 mx-auto bg-blue-950 flex flex-col py-2">
                    <div className=" text-white text-center text-5xl pb-5">Registration Form</div>
                    <input type="text" placeholder="First Name" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setfirstname(e.target.value)}}></input>
                    <input type="text" placeholder="Middle Name" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setmiddlename(e.target.value)}}></input>
                    <input type="text" placeholder="Last Name" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setlastname(e.target.value)}}></input>
                    <input type="text" placeholder="Gender" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setgender(e.target.value)}}></input>
                    <input type="text" placeholder="Facluty Name" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setfacluty_name(e.target.value)}}></input>
                    <input type="text" placeholder="Contect" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setcontect(e.target.value)}}></input>
                    <input type="text" placeholder="Address" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setaddress(e.target.value)}}></input>
                    <select className=" w-1/2 border p-1 rounded-md mx-auto mb-5 text-gray-400" onChange={(e)=>{setcoures_name(e.target.value)}}>
                        <option selected disabled>select Coures</option>
                        {
                            data.map((a)=>{
                                return(
                                    <>
                                            <option value={a._id}>{a.coures_name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                    <input type="text" placeholder="Pc no." className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setpc_no(e.target.value)}}></input>
                    <input type="text" placeholder="Installment" className=" w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setfee_stu(e.target.value)}}></input>
                    <button type="submit" className="border-2 rounded-md text-white w-44 p-2 m-auto " onClick={()=>{student_data()}}>submit</button>
                </div>
            </div>
        <table></table>
        <table>
            <tr>
                <td>Firstname</td>
                <td><input type="text" onChange={(e)=>{setfirstname(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Middlename</td>
                <td><input type="text" onChange={(e)=>{setmiddlename(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Lastname</td>
                <td><input type="text" onChange={(e)=>{setlastname(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><input type="text" onChange={(e)=>{setgender(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Facluty Name</td>
                <td><input type="text" onChange={(e)=>{setfacluty_name(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Contect</td>
                <td><input type="number" onChange={(e)=>{setcontect(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" onChange={(e)=>{setaddress(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Coures Name</td>
                <td><select onChange={(e)=>{setcoures_name(e.target.value)}}>
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
                <td>Pc No</td>
                <td><input type="number" onChange={(e)=>{setpc_no(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Installment</td>
                <td><input type="number" onChange={(e)=>{setfee_stu(e.target.value)}}></input></td>
            </tr>
            <tr>
                <button type="submit" onClick={()=>{student_data()}}>submit</button>
            </tr>
        </table>
        </>
    )
}
