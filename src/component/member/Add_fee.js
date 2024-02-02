import axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Logout from "../Logout";

export default function Add_fee() {
   var [data,setdata] = useEffect()
   var [fee,setfee] = useState()
   var id=useParams(id)
   useEffect(() => {
    axios.get(``,{
      
    })
    .then(function (response) {
        setdata(response.data.data)
        setfee(response.data.data.installment)
        console.log(response.data.data)
        
    })
    .catch(function (error){
        console.log(error);
    });
},[])
    return(
        <>
            <table>
                {
                    fee.map((e)=>{
                        return(
                            <>
                                <tr>
                                    <td></td>
                                </tr>                            
                            </>
                        )
                    })
                }
            </table>
            <input type="text" ></input>
            Email:<input type="text" value={data.email}></input><br></br>
            Password:<input type="text" value={data.passeord}></input><br></br>
            
          
            {/* <Logout/> */}
        </>
       
    )
}