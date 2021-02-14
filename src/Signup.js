import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import './Signup.css'
import logo from './logo.png'

class SignUP extends Component{

    constructor(){
        super()
        this.state={
          email:'',
          password:'',
          ConfPassword:''
        }
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.changeConfPassword=this.changeConfPassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
      }
      changeEmail(event){
        this.setState({
          email:event.target.value
        })
      }
      changePassword(event){
        this.setState({
          password:event.target.value
        })
      }
      changeConfPassword(event){
        this.setState({
          ConfPassword:event.target.value
        })
      }
      onSubmit(event){
        event.preventDefault()
    
        const registred={
          email:this.state.email,
          password:this.state.password,
          ConfPassword:this.state.ConfPassword,
        }
        axios.post('http://localhost:4000/app/signup',registred)
            .then(response=>console.log(response.data))
        this.setState({
          email:'',
          password:'',
          ConfPassword:''
        })
      }
      render(){
        return(
          <div className="Container">
                    <div className="test">
        <img src={logo} className="logo" alt="logo" />
            
            <div className='container'>
              <div className='form-div'>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="label">Email</label>
                        <br></br>
                        <input type='email' 
                        onChange={this.changeEmail} 
                        value={this.state.email} 
                        className="form-control form-groupe"/>
                  </div>
                  <div className="form-group">
                        <label className="label">Password</label>
                        <br></br>
                        <input type='password'  
                        onChange={this.changePassword} 
                        value={this.state.password} 
                        className="form-control form-group"/>
                  </div>
                  <div className="form-group">
                        <label className="label">Confirm Password</label>
                        <br></br>
                        <input type='password'  
                        onChange={this.changeConfPassword} 
                        value={this.state.ConfPassword} 
                        className="form-control form-group"/>
                  </div>
                  <div className="form-group">
                  <input type='submit' className='button' value='SignUp'/>
                  <a type="button" className="btn btn-link" href="/SignIN">SignIn</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
          
        );
      }

}
export default SignUP