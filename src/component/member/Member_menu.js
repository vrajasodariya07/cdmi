import axios from "axios";
import { PiStudentFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";

export default function Member_menu(){
    return(
        <>
            <div className="bg-white w-1/6 h-screen fixed top-0 left-0 rounded-md">
                <div className="mx-auto rounded-full border-4 border-blue-950 h-fit w-fit m-4 bg-blue-950">
                    <span className="text-white text-5xl inline-block px-3 py-2"><PiStudentFill /></span>
                </div>  
                <div className="mt-10">
                    <a href="/member/view_student" className="w-full block text-blue-950 hover:bg-blue-950 hover:text-white p-3 mb-3 rounded-md text-xl"><IoMdHome />All student</a>
                    <a href="/member/view_student" className="w-full block text-blue-950 hover:bg-blue-950 hover:text-white p-3 mb-3 rounded-md text-xl">All student</a>
                    <a href="/member/view_student" className="w-full block text-blue-950 hover:bg-blue-950 hover:text-white p-3 mb-3 rounded-md text-xl">All student</a>
                </div>  
            </div>
            
        </>
    )
}