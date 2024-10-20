import {ToastContainer,toast} from "react-toastify"
import 'react/toastify/dist/ReactToastify.css'



function successToast(message:any){
 toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
 
}
function errorToast(message:any){
    toast.error(message, {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
          
           });
    
   }

   function paymentToast(message:any){
    toast.info(message, {
           position: "top-left",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
          
           });
    
   }