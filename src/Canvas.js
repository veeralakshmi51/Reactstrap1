import React, { useState } from 'react';
import { Offcanvas, Button, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

const Canvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Open
      </Button>
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader>
          Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            This is the Offcanvas body.
          </strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Canvas;
