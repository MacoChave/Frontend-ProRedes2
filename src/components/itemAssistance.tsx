import { useState } from "react"
import { useModal } from "../hooks/useModal"
import { Modal } from "./modal"

export const ItemAssistance = (props: any) => {
    const { isOpenModal, handleOpenModal, handleCloseModal } = useModal(false)
    const [source, setSource] = useState('')

    const handleClick = (ev: any) => {
        ev.preventDefault()
        setSource(props.assistance.captura)
        handleOpenModal()
    }

    return (
        <>
            <tr>
                <td> {props.assistance.id_evento} </td>
                <td> {props.assistance.nombre_evento} </td>
                <td> {props.assistance.carnet} </td>
                <td> {props.assistance.nombre_alumno} </td>
                <td> {props.assistance.server} </td>
                {/* <td> {props.assistance.captura} </td> */}
                <td>
                    <button className="btn btn-primary" type='button' onClick={handleClick}>Ver</button>
                </td>
            </tr>
            {
                isOpenModal &&
                <Modal isOpen={isOpenModal} closeModal={handleCloseModal} title='Captura'>
                    <img src={source} alt='Imagen' />
                </Modal>
            }
        </>
    )
}