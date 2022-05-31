import { useEffect, useState } from "react";
import axios from "axios"

export const TableItem = () => {
  const [studentslist,setStudentslist]=useState([])
  const [sortby,setSortby]=useState("id")
  const [order,setOrder]=useState("asc")
  const [page,setpage]=useState(1)

  useEffect(()=>{
    const sortData=async()=>{ 
      axios.get(`http://localhost:8080/data?_sort=${sortby}&_order=${order}?_page=${page}&_limit=5`).then((res)=>{
          setStudentslist(res.data)
          console.log(res.data)
      });
    
    }
    sortData()
  },[sortby,order,page])
 
 
//   const handledelete =(id) =>{

//     fetch(`http://localhost:8080/students/${id}`,{
//       method:"DELETE"

//     }).then((res)=>{
//       res.json().then((data)=>{
//        console.log("data:",data);
//       })
//     })
   
  
//   }
  
  
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            onChange={(e)=>setSortby(e.target.value)}
            className="sortby"
          >
            <option value="id">Id</option>
            <option value="name">First Name</option>
            <option value="age">Age</option>
            <option value="address">address</option>
            <option value="Department">department</option>
            <option value="marital">marital</option>
            <option value="Salary">Salary</option>
           
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
          
            onChange={(e)=>setOrder(e.target.value)}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Marital</th>
            <th>Salary</th>
            
          </tr>
        </thead>
        <tbody className="tbody">
       
          {studentslist.map((e)=>{ 
          return <tr key={e.id} className="row">
            <td className="name">{e.id}</td>
            <td className="name">{e.name}</td>
            <td className="age">{e.age}</td>
            <td className="address">{e.address}</td>
            <td className="Department">{e.Department}</td>
            <td className="marital">{e.marital==true ? "merid" : "single"}</td>
            <td className="Salary">{e.Salary}</td>
        
          </tr>})

}   
        </tbody>
      </table>
      <button onClick={()=>{
          setpage(page+1)
      } }  className="btn">{"<"}</button>
      <button onClick={()=>{
          setpage(page+1)
      } } className="btn">{">"}</button>
      
    </div>
  );
};
