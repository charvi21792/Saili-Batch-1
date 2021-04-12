import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';  
import EmployeeList from './GetEmployee';  
import AddEmployee from './AddEmployee';  
import axios from 'axios';  
const apiUrl = 'https://0d3d74875f4d.ngrok.io/apiDemo/index.php/api/Item/';  
  
class EmployeeActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddUser: false,  
      error: null,  
      response: {},  
      userData: {},  
      isEdituser: false,  
      isUserDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddUser: true });  
    this.setState({ isUserDetails: false });  
  }  
  onDetails() {  
    this.setState({ isUserDetails: true });  
    this.setState({ isAddUser: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddUser: true });  
    this.setState({ isUserDetails: false });  
    if (this.state.isEdituser) {  
     axios.put(apiUrl ,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddUser: false,  
          isEdituser: false  
        })  
      });  
    } else {  
     
     axios.post(apiUrl ,data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddUser: false,  
          isEdituser: false  
        })  
      });  
    }  
    
  }  
  
  editUser = UserId => {  
  
    this.setState({ isUserDetails: false });  
   axios.get(apiUrl  + UserId).then(result => { 
        this.setState({  
          isEdituser: true,  
          isAddUser: true,  
          userData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let userForm;  
    if (this.state.isAddUser || this.state.isEditUser) {  
  
      userForm = <AddEmployee onFormSubmit={this.onFormSubmit} user={this.state.userData} />  
       
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>Employee Portal</h1>  
        <hr></hr>  
        {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}> Employee List</Button>}  
        {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add Employee</Button>}  
        <br></br>  
        {!this.state.isAddUser && <EmployeeList editUser={this.editUser} />}  
        {userForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default EmployeeActionApp;