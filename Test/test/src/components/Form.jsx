import React,{ useState }from "react";

const Form = (props) => {

    const [firstname,setfirstname]= useState('');
    const [lastname, setlastname]=useState('');
    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');
    const [confirm, setconfirm]=useState('');

    const handlefn= (e) =>{
        setfirstname(e.target.value);
    }
    const handleln= (e) =>{
        setlastname(e.target.value);
    }
    const handleemail= (e) =>{
        setemail(e.target.value);
    }
    const handlepassword= (e) =>{
        setpassword(e.target.value);
    }
    const handleconfirm= (e) =>{
        setconfirm(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name="firstname" onChange={handlefn} />
                
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name="lastname" onChange={handleln}/>
                
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" onChange={handleemail}/>
                
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={handlepassword}/>
                
                <label htmlFor="confirm">Confirm Password:</label>
                <input type="text" name="confirm" onChange={handleconfirm}/>
            </form>
            <div>
                <p>
                    <label> First Name:</label>{firstname}
                </p>
                <p>
                    <label> Last Name:</label>{lastname}
                </p>
                <p>
                    <label> Email:</label>{email}
                </p>
                <p>
                    <label> Password:</label>{password}
                </p>
                <p>
                    <label> Confirm Password:</label>{confirm}
                </p>
            </div>
        </div>
    )
}
export default Form;