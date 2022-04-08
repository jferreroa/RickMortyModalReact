import React, { FC, useState } from 'react'
import InfoModal from './InfoModal';

export const Personaje: FC<{ name: string, status: string, species: string, type: string, gender: string, image: string, created: string }> =
  ({ name,status,species,type, gender, image, created}) => {
    const [show, setShow] = useState(false);

    return (
      <><div onClick={() => { setShow(true); } }>{name}</div>
      <InfoModal visibility={show} changeVisibility={setShow}
      name={name} status={status} species ={species} type ={type} gender ={gender} image={image}
      ></InfoModal></>
    )
  }
