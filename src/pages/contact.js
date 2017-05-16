import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class Contact extends Component {
    render(){
        return(
            <div style={{padding:'5px 20px'}}>
                <h2>Contact Us</h2>
                <p>Let us know how we can help.</p>
                <TextField
                floatingLabelText="Name: "
                hintText="Enter Name"
                errorText="Name is required."
                /><br />
                <TextField
                floatingLabelText="Email: "
                hintText="Enter Email"
                errorText="Email Is required"
                /><br />
                <TextField
                floatingLabelText="Phone: "
                hintText="Enter Phone Number"
                /><br />
                <TextField
                hintText="Message Field"
                floatingLabelText="Message: "
                multiLine={true}
                rows={3}
                /><br />
            </div>
        )
    }
}

export default Contact;