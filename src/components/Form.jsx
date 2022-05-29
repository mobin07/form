import React,{useState,useRef} from 'react'
import styles from "./form.module.css"
function Form() {
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:"",
        age:0,
        isIndian:false,
        city:""
    });
    const ref=useRef();
    const passRef=useRef();
    const handleOnChange=(e)=>{
        let { type,name,value,checked,files }=e.target;
        console.log(type,name,value,checked);
        // console.log(e);
        // let name=e.target.name;   it is same as above
        // let value=e.target.value
        if(type==="checbox"){
            setForm({
                ...form,
                [name]:checked,
            });  
        }else if(type==="file"){
            setForm({
                ...form,
                [name]:files,
            });  
        }else{
        setForm({
            ...form,
            [name]:value,
        });
    }
    console.log(form)
    };
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        if(!form.username){
            ref.current.focus();
            console.log(ref.current);
        ref.current.className+=styles.redBorder;
    }
        else if (!form.password) passRef.current.focus();
                }
  return (
    <div>Form
        <form onSubmit={handleOnSubmit}>
        <div>
            <label >Name:</label>
            <input type="text" name="username"
            placeholder='Enter name...' 
            value={form.username}
            ref={passRef}
            onChange={handleOnChange}/>
        </div>
        <div>
            <label >Email:</label>
            <input type="email" name="email"
            placeholder='Enter email...' 
            value={form.email}
            onChange={handleOnChange}/>
        </div>
        <div>
            <label >Password:</label>
            <input type="password" name="password"
            placeholder='Enter password...' 
            value={form.password}
            ref={ref}
            onChange={handleOnChange}/>
        </div>
        <div>
            <label >Age:</label>
            <input type="number" name="age"
            placeholder='Enter age...' 
            value={form.age}
            onChange={handleOnChange}/>
        </div>
        <div>
            
            <input type="checkbox" 
            name="IsIndian"
            value={form.isIndian}
            onChange={handleOnChange}/>
            <label >:Is Indian</label>
        </div>
        <div>
            
            <input type="radio" 
            name="gender"
            value={"Male"}
            onChange={handleOnChange}/>
            <label >Male</label>
        </div>
        <div>
            
            <input type="radio" 
            name="gender"
            value={"Female"}
            onChange={handleOnChange}/>
            <label >Female</label>
        </div>
        <div>
            <label >City:</label>
            <select name="city" value={form.city}
            onChange={handleOnChange}>
                <option value="Pune">Pune</option>
                <option value="Bengaluru">Bengaluru</option>
            </select>
            
        </div>
        <div>
        <label >User Resume:</label>
            <input type="file" 
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
            files={form.resume}
            onChange={handleOnChange}/>
            
        </div>
        <button type="submit">Submit</button>
        
       

        </form>
    </div>
  )
}

export default Form