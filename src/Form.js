import React from 'react'
import {FormGroup, Input, Label } from 'reactstrap'

const Form = () => {
  return (
    <div>
        <Form
     style={{border:'2px solid'}} className='mt-5'>
            <FormGroup>
        <Label for='email' style={{fontWeight:'bold'}}>Email</Label>
        <Input type='email' placeholder='Enter email'></Input>
        </FormGroup>
        <FormGroup>
        <Label for='password' style={{fontWeight:'bold'}}>Password</Label>
        <Input type='password' placeholder='Enter password'></Input>
        </FormGroup>
        <FormGroup>
        <Label for='select' style={{fontWeight:'bold'}}>Select</Label>
        <Input type='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
             <option>5</option>
</Input>
</FormGroup>
<FormGroup>
<Label for='select' style={{fontWeight:'bold'}}>Select Multiple</Label>
<Input type='select' multiple>
    <option>
        1
    </option>
    <option>
        2
    </option>
    <option>
        3
    </option>
    <option>
        4
    </option>
    <option>
        5
    </option>
    <option>
        6
    </option>
    <option>
        7
    </option>
</Input>
</FormGroup>
<FormGroup>
<Label for='textarea' style={{fontWeight:'bold'}}>Textarea</Label>
<Input type='textarea' placeholder='Enter a text here'></Input>
<Label for='file'>File</Label>
<Input type='file'></Input>
</FormGroup>

</Form>
    </div>
  )
}

export default Form