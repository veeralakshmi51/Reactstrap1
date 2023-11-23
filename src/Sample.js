import React, { useState } from 'react'
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, ListGroup, ListGroupItem, UncontrolledButtonDropdown,ListGroupItemHeading,ListGroupItemText } from 'reactstrap'

const Sample = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
   <div>
    <Dropdown isOpen={isOpen} toggle={toggle} style={{textAlign:'center'}} className='my-4'>
        <DropdownToggle caret size='lg'>Button</DropdownToggle>
        <DropdownMenu dark>
            <DropdownItem>Header</DropdownItem>
            <DropdownItem>Body</DropdownItem>
            <DropdownItem disabled>Footer</DropdownItem>
       
        <DropdownItem divider></DropdownItem>
       
            <DropdownItem>Header Divider</DropdownItem>
            <DropdownItem>Body Divider</DropdownItem>
            <DropdownItem>Footer Divider</DropdownItem>
        </DropdownMenu>
    </Dropdown>
   <UncontrolledButtonDropdown size='lg' className='p-2'>

    <Button color='primary' >
Button
    </Button>
    <DropdownToggle caret color='primary'></DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Header Button</DropdownItem>
        <DropdownItem>Body Button</DropdownItem>
        <DropdownItem>Footer Button</DropdownItem>
    </DropdownMenu>
   
   </UncontrolledButtonDropdown>
   <div>
   <Dropdown>
    <UncontrolledButtonDropdown className='me-2 p-3' direction='up'>
        <DropdownToggle caret>Dropup</DropdownToggle>
    </UncontrolledButtonDropdown>
    <UncontrolledButtonDropdown className='me-2 p-3' direction='down'>
        <DropdownToggle caret>Dropdown</DropdownToggle>
    </UncontrolledButtonDropdown>
    <UncontrolledButtonDropdown className='me-2 p-3' direction='start'>
        <DropdownToggle caret>Dropstart</DropdownToggle>
    </UncontrolledButtonDropdown>
    <UncontrolledButtonDropdown className='me-2 p-3' direction='end'>
        <DropdownToggle caret>Dropend</DropdownToggle>
    </UncontrolledButtonDropdown>
   </Dropdown>
   </div>
   <Dropdown toggle={function noRefCheck(){}}>
  <DropdownToggle
    data-toggle="dropdown"
    tag="span"
  >
    Custom Dropdown Content
  </DropdownToggle>
  <DropdownMenu>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
  </DropdownMenu>
</Dropdown>
<div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Toggle Fade
  </Button>
  <Fade
    className="mt-3"
    tag="h5"
  >
    This content will fade in and out as the button is pressed
  </Fade>
</div>
<ListGroup style={{border:'2px solid'}}>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
  <ListGroupItem action active>
    ListGroup
  </ListGroupItem>
  <ListGroupItem disabled>
ListGroup Item
  </ListGroupItem>
  <ListGroupItem>
    List Group Item with Number
  </ListGroupItem>
  <ListGroupItem color='success'>
    List Group Item with Number
  </ListGroupItem>
  <ListGroupItem color='info'>
    List Group Item with info button
  </ListGroupItem>
  <ListGroupItem color='warning'>
    List Group Item with warning
  </ListGroupItem>
  <ListGroupItem tag='a'>
    List Group Item with Number
  </ListGroupItem>
  <ListGroupItem tag='button'>
    List Group Item with Number
  </ListGroupItem>
</ListGroup>
<ListGroup numbered>
  <ListGroupItem>
    List 1 <Badge pill>10</Badge>
  </ListGroupItem>
  <ListGroupItem>
  List 2  
  </ListGroupItem>
  <ListGroupItem>
    List 3
  </ListGroupItem>
</ListGroup>
<ListGroup horizontal>
  <ListGroupItem>
    List 1
  </ListGroupItem>
  <ListGroupItem>
    List 2
  </ListGroupItem>
  <ListGroupItem>
    List 3
  </ListGroupItem>
</ListGroup>
<ListGroup numbered>
  <ListGroupItem>
    List 1 with badge 
    
  </ListGroupItem>
  <ListGroupItem>
    List 2
  </ListGroupItem>
  <ListGroupItem>
    List 3
  </ListGroupItem>
</ListGroup>
<ListGroup>
  <ListGroupItem active tag='button'>
    <ListGroupItemHeading>
      List group item heading
    </ListGroupItemHeading>
    <ListGroupItemText>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error totam? Quam et necessitatibus quae in quibusdam alias praesentium amet quo quidem delectus esse velit, perspiciatis numquam saepe obcaecati nam!    </ListGroupItemText>
  </ListGroupItem>
  <ListGroupItem>
    <ListGroupItemHeading>
      List group item heading
    </ListGroupItemHeading>
    <ListGroupItemText>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid, cupiditate illum labore, quam id sequi alias nulla aut sed incidunt iusto ipsam provident. Excepturi voluptatibus nemo aspernatur dolor! Architecto!    </ListGroupItemText>
  </ListGroupItem>
  <ListGroupItem>
    <ListGroupItemHeading>
      List group item heading
    </ListGroupItemHeading>
    <ListGroupItemText>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore assumenda sit explicabo mollitia officia adipisci facere repellendus fuga odit ipsum. A excepturi architecto, corrupti aut et soluta eum porro sed?
    </ListGroupItemText>
  </ListGroupItem>
</ListGroup>
   </div>
  )
}

export default Sample