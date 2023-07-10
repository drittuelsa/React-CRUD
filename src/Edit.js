import React , { useEffect, useState}from "react";
import { Link, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Edit } from "./assignment/action1";


export const Update =()=>{

    const [first, setName] = useState('');
    const [Lastname, setlastName] = useState('');
    const [Email,setemail] = useState('');
  

    const {id} = useParams();

    //const Data = useSelector((state) =>state);
    const Details = useSelector((state) =>{
        return state.Data})

    const dispatch = useDispatch();

   
   const currentData = Details.find((item) => item.id === parseInt(id));

   useEffect(()=>{
       if (currentData){
        setName(currentData.first);
        setlastName(currentData.Lastname);
        setemail(currentData.Email);
       }
    },[currentData]);

    
    const Data = {
        id :parseInt(id),
        first,
        Lastname,
        Email
    }


    return(
       <div>
        <div id="container1" className="container">
        <h3 style={{color:'blue',fontWeight:'bolder',fontFamily:'serif'}}>Edit Data {id}</h3>  <br/>
        <label>First Name : </label>
        <div className="input-group">
        <input type ="text" className="form-control" value ={first} onChange = {(e) =>setName(e.target.value)}/> <br/>
        </div>

        
        <label>Last Name : </label>
        <div className="input-group">
        <input type ="text" className="form-control" value = {Lastname} onChange = {(e) =>setlastName(e.target.value)} /><br/>
        </div>

        
        <label>Email : </label>
        <div className="input-group">
        <input type ="email" className="form-control" value = {Email} onChange = {(e) =>setemail(e.target.value)}/> <br/>
        </div>
        <br/>
        <div className="col">
        <Link to ="/"><input className="btn btn-success" type="button" value="Update" onClick={(e)=>{dispatch(Edit(Data))}}/></Link>
        </div> 
        </div> 
        </div>
    )

}