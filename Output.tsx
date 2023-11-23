import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Container, NavItem, NavLink,Nav, Col, Form, Row, Label, FormGroup, Input, DropdownToggle, Dropdown, DropdownMenu, DropdownItem} from 'reactstrap';
import bellImage from './bell.png'; 
import settingsImage from './settings.png'
import profileImage from './pro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUndo, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Output = () => {
  // const [isCollapsed, setIsCollapsed] = useState(true);
  const [dropDownOpen,setDropDownOpen]=useState(false)
  const [isAcknowledge,setIsAcknowledge]=useState(false)
  const [isProduct,setIsProduct]=useState(false)
  const toggle=()=>{
    setDropDownOpen(!dropDownOpen)
  }
const toopen=()=>{
  setIsAcknowledge(!isAcknowledge)
}
const toproduct=()=>{
  setIsProduct(!isProduct)
}
  return (
    <div>
      <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Website</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <Navbar className="my-2" color="light">
        <Container className="d-flex justify-content-between" >
       
          <div>
            <i className="fa-solid fa-bars" />
          </div>
          <div className="d-flex p-5 align-items-center">
            <NavLink className="me-2" href='#notifications'>
              <img src={bellImage} alt="bellimage" />
            </NavLink>
            <NavLink className="me-2" href='#profile'>
              <img src={profileImage} alt="profile" />
            </NavLink>
            <NavLink className='me-2' href='#settings'>
              <img src={settingsImage} alt="settings" />
            </NavLink>
          </div>
          
        </Container>
      </Navbar>
      <Navbar color='dark rounded'>
     <NavbarBrand href='#' style={{color:'white'}}>Clearing House Setup</NavbarBrand>
<Nav>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faFile} style={{color:'aliceblue'}}/>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faUndo} style={{color:'aliceblue'}}/>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href='#notifications'>
      <FontAwesomeIcon icon={faCircleXmark} style={{color:'aliceblue'}}/>
    </NavLink>
  </NavItem>
</Nav>
</Navbar>
<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
  <NavbarBrand href='/' style={{fontWeight:'bolder'}} >Clearning House Name</NavbarBrand>
  </Container>
</Navbar>
<Form className='m-3'>
  <Row>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>Name <span style={{color:'red'}}>*</span></Label>
      <Input type='text' placeholder='Username' id='name' name='name'></Input>
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Name </Label>
      <Input type='text' placeholder='xxxxxxxxxx' id='EDI contact name' name='EDI contact name'></Input>
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Phone</Label>
      <Input type='text' placeholder='(708) 632- 5656' id='EDI Contact Phone' name='EDI Contact Phone'></Input>
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
      <Label for='name'>EDI Contact Fax</Label>
      <Input type='text' placeholder='(111) 111- 1101' id='EDI Contact Fax' name='EDI Contact Fax'></Input>
      </FormGroup>
    </Col>
  </Row>
</Form>
<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
  <NavbarBrand href='/' style={{fontWeight:'bolder'}} >ISA Settings</NavbarBrand>
  </Container>
</Navbar>
<Form className='m-3'>
  <Row>
  <Col>
      <FormGroup>
      <Label for='name'>ISA 01</Label>
      <Dropdown isOpen={dropDownOpen} toggle={toggle} >
        <DropdownToggle caret>00 - 00 No Authentication</DropdownToggle>
        <DropdownMenu >
          <DropdownItem>
            00 - 00 No Authentication 1
          </DropdownItem>
          <DropdownItem>
            00 - 00 No Authentication 2
          </DropdownItem>
          <DropdownItem>
            00 - 00 No Authentication 3
          </DropdownItem>
          <DropdownItem>
            00 - 00 No Authentication 4
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>User ID - ISA02</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='User ID - ISA02' name='User ID - ISA02'></Input>
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Password - ISA04</Label>
      <Input type='text' placeholder='xxxxxxxxxx' id='Password - ISA04' name='Password - ISA04'></Input>
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Submitter ID - ISA06</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='Submitter ID - ISA06' name='Submitter ID - ISA06'></Input>
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Receiver ID - ISA08</Label>
      <Input type='text' placeholder='xxxxxxxxx' id='Receiver ID - ISA08' name='Receiver ID - ISA08'></Input>
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Ack Request ISA14</Label>
      <Dropdown isOpen={isAcknowledge} toggle={toopen} >
<DropdownToggle caret> 0 - No Acknowledgement</DropdownToggle>
<DropdownMenu>
  <DropdownItem>0 - No Acknowledgement 1</DropdownItem>
  <DropdownItem>0 - No Acknowledgement 2</DropdownItem>
  <DropdownItem>0 - No Acknowledgement 3</DropdownItem>
  <DropdownItem>0 - No Acknowledgement 4</DropdownItem>
</DropdownMenu>
      </Dropdown>
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
      <Label for='name'>Usage Indicator</Label>
      <Dropdown isOpen={isProduct} toggle={toproduct} >
        <DropdownToggle caret>P - Production Data</DropdownToggle>
<DropdownMenu >
 
  <DropdownItem>P - Production Data 1</DropdownItem>
  <DropdownItem>P - Production Data 2</DropdownItem>
  <DropdownItem>P - Production Data 3</DropdownItem>
</DropdownMenu>
      </Dropdown>
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={5}>
    <FormGroup>
      <Label for='gs02sender'>GS02 Application Sender's Code (In Most of the cases it is same as IS06)</Label>
      <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col md={5}>
      <FormGroup>
    <Label for='gs02receiver'>GS02 Application Receiver's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label for='submitter'>Loop 1000A Submitter ID</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
  </Row>
</Form>
<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <Container fluid>
    <NavbarBrand href='#services' style={{fontWeight:'bold'}}>Eligibility Web Services</NavbarBrand>
  </Container>
</Navbar>
<Form className='m-3'>
  <Row>
    <Col>
    <FormGroup>
<Label for=''>User ID - ISA02</Label>
<Input type='text' placeholder='xxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Password - ISA04</Label>
<Input type='text' placeholder='xxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Submitter ID - ISA06</Label>
<Input type='text' placeholder='xxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
<Label for=''>Receiver ID - ISA08</Label>
<Input type='text' placeholder='xxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
<Label for='Provider NPI'>Provider NPI</Label>
<Input type='text' placeholder='100000200'></Input>
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={5}>
      <FormGroup>
    <Label for='Web Service URL'>Web Service URL</Label>
    <Input type='text' placeholder='xxxxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label for='Web Service User ID
'>Web Service User ID
</Label>
    <Input type='text' placeholder='xxxxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label for='Web Service Password'>Web Service Password</Label>
    <Input type='text' placeholder='xxxxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col md={1}>
      <FormGroup>
    <Label for='Call Type'>Call Type</Label>
    <Dropdown>
      <DropdownToggle caret>REST</DropdownToggle>
    </Dropdown>
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={5}>
      <FormGroup>
    <Label>GS02 Application Sender's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='Enter Zipcode'></Input>
    </FormGroup>
    </Col>
    <Col md={5}>
      <FormGroup>
    <Label>GS02 Application Receiver's Code (In Most of the cases it is same as IS06)</Label>
    <Input type='text' placeholder='Enter Zipcode'></Input>
    </FormGroup>
    </Col>
  </Row>
</Form>
<Navbar style={{backgroundColor:'rgb(241, 237, 237)'}}>
  <NavbarBrand style={{fontWeight:'bold'}}>Batch Eligibility 270 Upload FTP</NavbarBrand>
</Navbar>
<Form className='m-3'>
  <Row>
    <Col>
    <FormGroup>
    <Label>FTP Address</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>User ID</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Password</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Type (FTP or SFTP)
</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>FTP Port</Label>
    <Input type='text' placeholder='100000200'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Submitter ID</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Receiver ID</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Provider API</Label>
    <Input type='text' placeholder='xxxxxxxxx'></Input>
    </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col>
    <FormGroup>
    <Label>Folder Upload</Label>
    <Input type='file' placeholder='xxxxxxxx'></Input>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup>
    <Label>Folder Download</Label>
    <Input type='text' placeholder='Enter Zipcode'></Input>
    </FormGroup>
    </Col>
  </Row>
</Form>
    </div>
    
  );
};

export default Output;
