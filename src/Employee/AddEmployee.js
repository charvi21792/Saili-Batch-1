import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddEmployee extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      UserId: '',  
      name: '',  
      designation: '',  
      qualification: '' 
    }  
  
    if (props.user.UserId) {  
      this.state = props.user  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.props.user.UserId = 0;
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.UserId) {  
  
      pageTitle = <h1>Edit Employee Details</h1>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h1>Add Employee</h1>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
         {pageTitle}
        <Row>  
          <Col sm={3}>  
            <Form onSubmit={this.handleSubmit}>  
            
              <Form.Group controlId="name">  
                <Form.Label>Employee Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="name"  
                  value={this.state.name}  
                  onChange={this.handleChange}  
                  placeholder="Employee Name" />  
              </Form.Group>  
              <Form.Group controlId="designation">  
                <Form.Label>Designation</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="designation"  
                  value={this.state.designation}  
                  onChange={this.handleChange}  
                  placeholder="Designation" />  
              </Form.Group>  
              <Form.Group controlId="qualification">  
                <Form.Label>Qualification</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="qualification"  
                  value={this.state.qualification}  
                  onChange={this.handleChange}  
                  placeholder="Qualification" />  
              </Form.Group>  
               
              <Form.Group>  
                <Form.Control type="hidden" name="UserId" value={this.state.UserId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddEmployee; 