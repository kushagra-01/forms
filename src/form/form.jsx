import axios from "axios"
import { useEffect, useState } from "react"



export const Form =()=>{

const [form,setForm]=useState({
    username:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    martial_status:"single",
})




const [data,setdata]=useState([])
console.log(data,"data")

useEffect(()=>{
    getFormData()
},[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/formdata",form).then(()=>{
            getFormData()
            setForm({
                username:"",
                age:"",
                address:"",
                department:"",
                salary:"",
                martial_status:"single",
            
            })
        })
    }
    const handleChange=(e)=>{
console.log(e.target.checked)
    
     const {id,value} = e.target
        setForm({
            ...form,
            [id]:value
        })
        if(e.target.checked===true){
            setForm({
                ...form,
                [id]:"mingle"
            })
           }
    }

    const getFormData=()=>{
axios.get("http://localhost:3001/formdata").then((res)=>{
  return  setdata([...res.data,data])
})
}



    return(
        <div>
 <form onSubmit={handleSubmit}>
          
          <input onChange={handleChange} type="text" placeholder="Name" id="username" value={form.username} required/>
          <input onChange={handleChange} type="number" placeholder="age" id="age" value={form.age} required/>
          <textarea onChange={handleChange} type="text" placeholder="address" id="address" value={form.address}  required />
          <select id="department" onChange={handleChange}  required>
          <option value="student">Student</option>
           <option value="IA">IA</option>
           <option value="Teacher">Teacher</option>
            <option value="Hr">HR</option>
        </select>
        <input onChange={handleChange} type="number" placeholder="salary" id="salary" value={form.salary}  required/>
        <label for="martial_status">MartialStatus</label>
        <input type="checkbox" id="martial_status"  value={form.checkbox} onChange={handleChange}  />
          <input type="submit" />
      </form>

      <br />    <br />    <br />    <br />    <br />    <br />

      <div>
      <table className="table">
     <th>username</th>
    <th>age</th>
    <th>address</th>
    <th>department</th>
    <th>salary</th>
    <th>martial_status</th>
          {data.map((e)=>{
              

return(
    <tbody>
        <td>{e.username}</td>
        <td>{e.age}</td>
        <td>{e.address}</td>
        <td>{e.department}</td>
        <td>{e.salary}</td>
        <td>{e.martial_status}</td>
    </tbody>
   
    

                

              
          )})}    

</table>      
      </div>
        </div>
       
    )
}