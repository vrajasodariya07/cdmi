import axios  from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

export default function Edit_student(){
    var [firstname,setfirstname]=useState()
    var [middlename,setmiddlename]=useState()
    var [lastname,setlastname]=useState()
    var [gender,setgender]=useState()
    var [facluty_name,setfacluty_name]=useState()
    var [contect,setcontect]=useState()
    var [address,setaddress]=useState()
    var [coures_name,setcoures_name]=useState()
    var [pc_no,setpc_no]=useState()
    var [data,setdata] =useState([])
    var id=useParams(id);

    useEffect(()=>{
        Header.get(`/members/view/${id.id}`,{
      
        })
        .then(function (response) {
            // alert(response.data.status)
            console.log(response.data.data)
            setfirstname(response.data.data.firstname)
            setmiddlename(response.data.data.middlename)
            setlastname(response.data.data.lastname)
            setgender(response.data.data.gender)
            setfacluty_name(response.data.data.facluty_name)
            setcontect(response.data.data.contect)
            setaddress(response.data.data.address)
            setcoures_name(response.data.data.coures_name.coures_name)
            setpc_no(response.data.data.pc_no)
        })
        .catch(function (error){
            console.log(error);
        });
        Header.get('/admins/views',{
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
        Header.post(`/members/update/${id.id}`,{
            firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            gender:gender,
            facluty_name:facluty_name,
            contect:contect,
            address:address,
            coures_name:coures_name,
            pc_no:pc_no,
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
        <table>
            <tr>
                <td>Firstname</td>
                <td><input type="text" onChange={(e)=>{setfirstname(e.target.value)}} value={firstname}></input></td>
            </tr>
            <tr>
                <td>Middlename</td>
                <td><input type="text" onChange={(e)=>{setmiddlename(e.target.value)}} value={middlename}></input></td>
            </tr>
            <tr>
                <td>Lastname</td>
                <td><input type="text" onChange={(e)=>{setlastname(e.target.value)}} value={lastname}></input></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><input type="text" onChange={(e)=>{setgender(e.target.value)}} value={gender}></input></td>
            </tr>
            <tr>
                <td>Facluty_name</td>
                <td><select value={facluty_name} onChange={(e)=>{setfacluty_name(e.target.value)}} >
                    <option selected disabled>select</option>
                {
                    data.map((a)=>{
                        return(
                            <>
                                    {(a.role=='fac')?<option value={a._id}>{a.name}</option>:''}
                            </>
                        )
                    })
                }
                </select></td>
            </tr>
            <tr>
                <td>Contect</td>
                <td><input type="number" onChange={(e)=>{setcontect(e.target.value)}} value={contect}></input></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" onChange={(e)=>{setaddress(e.target.value)}} value={address}></input></td>
            </tr>
            <tr>
                <td>Coures_name</td>
                <td><input type="text" value={coures_name}></input></td>
            </tr>
            <tr>
                <td>Pc_no</td>
                <td><input type="number" onChange={(e)=>{setpc_no(e.target.value)}} value={pc_no}></input></td>
            </tr>
            <tr>
                <button type="submit" onClick={()=>{student_data()}}>submit</button>
            </tr>
        </table>
        </>
    )
}
