import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'https://0d3d74875f4d.ngrok.io/apiDemo/index.php/api/Item/';  
  
class EmployeeList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    users:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteUser(userId) {  
      const { users } = this.state;     
     axios.delete(apiUrl + userId).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          users:users.filter(user=>user.UserId !== userId)  
        });  
      });  
    }  
  
    render(){         
        const{error,users}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>   
                        <th>Employee Name</th>  
                        <th>Designation</th>  
                        <th>Qualification</th>
                        <th>Actions</th>
                      </tr>  
                    </thead>  
                    <tbody>  
                      {users.map(user => (  
                        <tr key={user.UserId}> 
                          <td>{user.name}</td>  
                          <td>{user.designation}</td>  
                          <td>{user.qualification}</td>   
                          <td><Button variant="info" onClick={() => this.props.editUser(user.UserId)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteUser(user.UserId)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default EmployeeList; 