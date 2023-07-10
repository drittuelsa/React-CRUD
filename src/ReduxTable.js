import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Add } from "./assignment/action1";
import { Delete } from "./assignment/action1";
import { Edit } from "./assignment/action1";
import { Get } from "./assignment/action1";


export const ReduxTable =()=>{

    const [first, setName] = useState('')
    const [Lastname, setlastName] = useState('')
    const [Email, setemail] = useState('')

    const Details = useSelector((state) =>{
        return state.Data
    })

    const {id} = useParams();

    const dispatch = useDispatch()

    const Data = {
        id :(Details.length)+ 1,
        first,
        Lastname,
        Email
    }
    console.log(Data)

    const resetForm =()=>{
setName('')
setlastName ('')
setemail ('')
    }
    return(
        <div>
            <h2 style={{color:"blue",padding:20, fontFamily:"serif",fontWeight:"bold"}}>Employee Details</h2>
       
        <form  > 
        <div className="container">
            
        <label className ="form-label">First Name : </label>
        <div className="input-group">
        <input type ="text" className="form-control" value ={first} onChange = {(e) =>setName(e.target.value)}/> <br/>
        </div>

        <label>Last  Name : </label>
        <div className="input-group">
        <input type ="text" className="form-control" value = {Lastname} onChange = {(e) =>setlastName(e.target.value)}/> <br/>
        </div>

        <label>Email: </label>
        <div className="input-group">
        <input type="email" className="form-control" value = {Email} onChange = {(e) =>setemail(e.target.value)}/> <br/>
        </div><br/>

        <input id="Add" className="btn btn-info" type="button" value="ADD"  onClick={(e)=>dispatch(Add(Data))}/>
        <input type ="reset" className="btn btn-secondary" value="RESET" onClick={()=> resetForm()}/>
        </div>

        </form><br/>
        
        
       
         {/* {console.log(Data)} */}
 
            {/* {Data.map((item) =>( 
                <div>{item.first},{item.Midname},{item.Lastname}</div>
                 ))}   */}
{/* <td>{(new Date).getTime()}</td> */}
<div>
<h2 style={{color:"blue",padding:20, fontFamily:"serif",fontWeight:"bold"}}>Employee List</h2> 
</div>
            <div className="container">  
          <table className="table table-bordered">   
             <tr style={{backgroundColor:"#AFEEEE"}}>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th colSpan={2}>Action</th>
                
            </tr >
            {Details.map((item,id) =>(
             <tr key={id}>
                    <td>{id+1}</td>
                    <td>{item.first}</td>
                    <td>{item.Lastname}</td>
                    <td>{item.Email}</td>
                    <td><input className="btn btn-warning" type ="button" value="Delete" onClick={(e)=>dispatch(Delete(item.id))} />
                    
                     <Link to = {`/Edit/${item.id}`} ><input type ="button" className="btn btn-primary" value = "Edit" /></Link> 
                    </td>
                        
          </tr> 
             ))} 
            
        </table>
        </div> 
        </div>    
        
     
    )

}