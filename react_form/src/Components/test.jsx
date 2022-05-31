import { useState } from "react";

export const Form = () =>{

    const [form , Setform] = useState({
        username:"",
        email:"",
        password:"",
        age: 0,
        Isindian:false,

    }          )
    
    const HandleOnchange = (e)=>{
        let {type, name, value, checked,file} = e.target;
        console.log(type, name, value, checked);
        if(type==="checkbox"){
            Setform({
                ...form,
                [name]: checked
            })
        }
        if(type==="file"){
            Setform({
                ...form,
                [name]: file
            })
        }
        else{

        }
        Setform({
            ...form,
            [name]: value 
        })
    }

    const HandleOnSubmit = (e) =>{ 
        e.preventDefault();
    console.log(form);
    }

    return (
        <div>
            <h1>Form</h1>

        <form onSubmit={HandleOnSubmit}>
             <div>
                <label>Name:</label>
                <input value={form.name} onChange={HandleOnchange} type="text" placeholder="your name" name="username" />
             </div>
             <div>
                <label>Email:</label>
                <input value={form.email}  onChange={HandleOnchange} type="email" placeholder="your email" name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input value={form.password} onChange={HandleOnchange} type="password" placeholder="your password"  name="password"/>
            </div>
            <div>
                <label>Nationality:</label>
                <input value={form.Isindian} onChange={HandleOnchange} type="checkbox" placeholder="nationality"  name="Isindian"/>
            </div>
            <div>
                <label>Age</label>
                <input value={form.age} onChange={HandleOnchange} type="number" placeholder="your age " name="age" />
            </div>
            <div>
                <label>Gender</label>
                <input value="male" onChange={HandleOnchange} type="radio" placeholder="male" name="gender" />
                <input value="female" onChange={HandleOnchange} type="radio" placeholder="female " name="gender" />
            </div>
            <div>
                <label>File:</label>
                <input file={form.file} onChange={HandleOnchange} type="file" placeholder="your file " name="file" />
            </div>
            <div>
                <label>Gender:</label>
                <select name="selectgender" value={form.selectgender} onChange={HandleOnchange}>
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>


                </select>
            </div>
            <div>
                <label>City:</label>
                <select name="city" value={form.city} onChange={HandleOnchange}>
                    <option value=""></option>
                    <option value="delhi">delhi</option>
                    <option value="bangluru">bangluru</option>


                </select>
            </div>
            <button type="submit">Submit</button>
            
        </form>
        </div>
    )
}