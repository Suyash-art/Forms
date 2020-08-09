import React , {useState} from 'react';
import './App.css';

const initialState = {
 
  'error' : {
    'nameE' : "" ,
    'passwordE' : "",
    'emailE' : ""
  }
}

function App() {
const [state ,setState] = useState({
  'name' : "",
  'password': "",
  'email' : "",
  'error' : {
    'nameE' : "" ,
    'passwordE' : "",
    'emailE' : ""
  }
})
const isValidate = () => {
  let nameE = "" ;
  let passwordE = ""
  let emailE = ""
  if (state.password.length === 0 )
 {  passwordE = "it can not be empty"
  
   
 }
 if (state.name.length === 0)
 {  nameE = "please give user name"
   
   
 }
 if (!state.email.includes('@'))
 {  emailE = "invalid email"
     
 }

 if (state.password.length === 0  || state.name.length === 0  || emailE) 
 {
  setState ({...state , error : {  nameE  ,passwordE , emailE } })
  return false
 }
  else 
  return true
}

const handleChange = (e)=> {
  e.preventDefault()
 const res= isValidate()
 if (res)
 {
   console.log(`success`)
   setState ({...state , error : {...initialState}})
 }
 else {
   console.log(state.name.length)
   console.log(`failure`)
 }

}

  return (
    <form className="form" onSubmit={e =>{handleChange(e)}}>
      <input type="text" placeholder="Username" value={state.name}
       onChange={e => {setState({...state,name:e.target.value})}}/>
       <small>{state.error.nameE}</small>
       <input type="password"  value={state.password} 
       onChange={e => {setState({...state,password:e.target.value})}}/>
        <small>{state.error.passwordE}</small>
        <input type="email"  value={state.email} 
       onChange={e => {setState({...state,email:e.target.value})}}/>
        <small>{state.error.emailE}</small>
       <button >Submit</button>

    </form>
  );
}

export default App;
