import React, { FC, useEffect, useState } from "react";
import styled from '@emotion/styled'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
type InfoModalProps = {
  name: string, status: string, species: string, type: string, gender: string, image: string
  visibility: boolean,
  changeVisibility: (text: boolean) => void;
};

const InfoModal: FC<InfoModalProps> = ({ visibility, changeVisibility, name, status, species, type, gender,image }) => {

  const [show, setShow] = useState<boolean | undefined>(undefined);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (visibility) {
      setShow(visibility)
    }
  }, [visibility])

  return (
    <>
      {/* <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button> */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mod" >
            <DivInfo className="info" >
              <div>
                Status:{status}
              </div>
              <div>
                Species:{species}
              </div>
              <div>
                Gender & type:{type}<br></br>{gender}
              </div>
            </DivInfo>
            <img src={image} alt = "a"></img>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            changeVisibility(false)
            handleClose()
          }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const DivInfo = styled.div`
width: 50%;
  border: 2px solid white;
`

export default InfoModal