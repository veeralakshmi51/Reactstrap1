import { useState } from "react";
import "./App.css";
import sampleimage from "./2.png";
import {
  Alert,
  Badge,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  ButtonGroup,
  ButtonToolbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CloseButton,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  
} from "reactstrap";

function App() {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => {
    setVisible(!visible);
  };
  return (
    <div className="App">
      <Button color="success">Anything!!!!</Button>
      <Alert color="danger">
        <h1>This is alert message-comment out!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          temporibus blanditiis doloribus! Magni inventore voluptatem non fugiat
          soluta aspernatur blanditiis molestiae esse, ea ratione pariatur
          corporis quos, modi ipsam asperiores.
        </p>
      </Alert>
      <Alert color="success">
        This is success alert with {""}
        <a className="alert-link" href="www.success.com">
          an success link
        </a>
        .Click this success link.
      </Alert>
      <Alert color="info" isOpen={visible} toggle={onDismiss}>
        This link is Dismissed just closed it.
      </Alert>
      <Badge color="secondary">
        <h4>inbox</h4>
      </Badge>
      <br></br>
      <br></br>
      <Button color="warning" outline>
        Button Notification{""}
        <Badge color="success">5</Badge>
      </Button>
      <div>
        <Badge color="success">Success</Badge>
        <Badge color="primary" href="#">
          Primary
        </Badge>
        <Badge color="warning" pill>
          Warning
        </Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="light" className="text-dark">
          Light
        </Badge>
        <Badge color="dark" href="#" pill>
          Dark
        </Badge>
      </div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Inbox</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Outbox</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>Save</BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="#">Sent</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Drafts</BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="#">Settings</a>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button className="button-group">
        <Button color="warning">Warning Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="secondary">Secondary Button</Button>
      </Button>
      <br></br>
      <br></br>
      <Button className="button-group">
        <Button color="warning" outline>
          Warning Button
        </Button>
        <Button color="success">Success Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="danger" outline>
          Danger Button
        </Button>
        <Button color="secondary">Secondary Button</Button>
      </Button>
      <br></br>
      <br></br>
      <div>
        <Button color="warning" outline size="lg">
          Warning Button
        </Button>
        <Button color="success">Success Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="danger" outline>
          Danger Button
        </Button>
        <Button color="secondary" size="sm">
          Secondary Button
        </Button>
      </div>
      <Button color="primary" disabled>
        Disabled
      </Button>
      <br></br>
      <br></br>
      <div>
        <ButtonGroup>
          <Button color="success">Global</Button>
          <Button color="warning">Local</Button>
        </ButtonGroup>
      </div>
      <br></br>
      <br></br>
      <div>
        <ButtonToolbar className="buttontoolbar">
          <ButtonGroup className="me-2">
            <Button color="primary">1</Button>
            <Button color="primary">2</Button>
            <Button color="primary">3</Button>
            <Button color="primary">4</Button>
          </ButtonGroup>
          <ButtonGroup className="secondary me-2">
            <Button color="secondary">1</Button>
            <Button color="secondary">2</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="warning">3</Button>
            <Button color="warning">4</Button>
            <Button color="warning">5</Button>
            <Button color="warning">6</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <br></br>
      <br></br>
      <div>
        <Button size="lg">button1</Button>
        <Button size="sm">button1</Button>
        <Button>button1</Button>
      </div>
      <br></br>
      <br></br>
      <div>
        <ButtonGroup>
          <Button color="warning" size="lg">
            button1
          </Button>
          <Button size="sm">button1</Button>
          <Button color="info">button1</Button>
        </ButtonGroup>
      </div>
      <div>
        <br />
        <br />
        <ButtonGroup vertical>
          <Button color="warning" size="lg">
            Vertical button1
          </Button>
          <Button size="sm" color="success">
            Vertical button2
          </Button>
          <Button color="info">Vertical button3</Button>
        </ButtonGroup>
      </div>
      <div>
        <br />
        <br />
        <ButtonGroup>
          <Button color="danger">previous</Button>
          <Button color="danger">After</Button>
          <UncontrolledDropdown>
            <DropdownToggle caret color="danger">
              Now
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Menu</DropdownItem>
              <DropdownItem>Inline</DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem>Inlet</DropdownItem>
              <DropdownItem active>Outlet</DropdownItem>
              <DropdownItem>Send</DropdownItem>
              <DropdownItem>Drafts</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ButtonGroup>
      </div>
      <CloseButton color="primary"></CloseButton>
      <Card style={{ width: "200px" }}>
        <img src={sampleimage}></img>
        <CardBody>
          <CardTitle tag='h5'>card title</CardTitle>
          <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nulla id, perferendis expedita dolorum esse, 
          </CardText>
          <CardLink>
            Cardlink
          </CardLink>
          <CardLink>
            Cardlink
          </CardLink>
        </CardBody>
      </Card>
      
    </div>
  );
}

export default App;
//instead using onDismiss() function we can use uncontrolled alert
