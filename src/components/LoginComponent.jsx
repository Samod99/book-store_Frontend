import React, { Component } from 'react'
import BookService from '../service/BookService';
import LoginHeadrComponent from './LoginHeader';

export default class LoginComponent extends Component {

    constructor(props){
        super(props)

        this.state={

         id: '',
         userName:' ',
         password:'',
         loginStatus:''
        }

     
        this.changePassword =this.changePassword.bind(this);
        this.changeUserName =this.changeUserName.bind(this);


        this.Login =this.Login.bind(this);
        
    }

  

    Login=(e)=>{

        e.preventDefault();
         let login= {user_name:this.state.userName,password:this.state.password}
      console.log(login);
          BookService.getLoginDetails(login).then(res=>{
            // this.props.history.push('/Book-admin'); 
            let loginData= res.data;
            console.log(loginData);
            this.setState({loginStatus:loginData});
            console.log("Login complete"+" "+this.state.userName);
            if(this.state.loginStatus==="Login complete"+" "+this.state.userName){

                if(this.state.userName==="admin"){
                    this.props.history.push('/book-admin');
                }else{
                    this.props.history.push('/user');
                }
               
               }else{
                console.log("faild");
                this.props.history.push(`/login`);
               }
        }); 
    
       }

       

    changeUserName=(event)=>{
        this.setState({userName: event.target.value});
       
      }
      
      changePassword=(event)=>{
        this.setState({password: event.target.value});
       
      }




    render() {
        return (
            <div >
                <LoginHeadrComponent/>
               <div className="container" style={{margin:"50px"}}>
                   <div className="row">

                       <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor:"#212121",color:"#eee"}}>

                           <h2 className="text-center m-5">Login</h2>

                           <div className="card-body">

                               <form >
                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="UserName"> User Name</label>
                                       <input type="text" placeholder="User Name" name="UserName"
                                        className="form-control" onChange={this.changeUserName}/>
                                   </div>

                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="password"> password</label>
                                       <input type="text" placeholder="password" name="password"
                                        className="form-control"  onChange={this.changePassword}/>
                                   </div>

                                  

                                   
                                   <button className="btn btn-success float-end mt-3" onClick={this.Login}>Save</button>
                                   
                                   
                                  

                               </form>


                           </div>

                       </div>
                   </div>
               </div>
              
            </div>
        )
    }
}
