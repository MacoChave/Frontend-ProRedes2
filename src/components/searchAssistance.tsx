import { FormEvent, useState } from "react"
import { useHistory } from "react-router"
import { useModal } from "../hooks/useModal"
import { Modal } from "./modal"

export const SearchAssistance = () => {

    const [carnet, setCarnet] = useState(0)
    const [idEvento, setIdEvento] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState(<></>)
    const { isOpenModal, handleOpenModal, handleCloseModal } = useModal(false)
    const history = useHistory()

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        if (carnet !== 0 || idEvento !== '') {
            history.push({
                pathname: '/assistance/evento',
                search: `?carnet=${carnet}&evento=${idEvento}`
            })
        } else {
            setTitle('Error al filtrar evento')
            setBody(<p>No se definió parámetro de búsqueda</p>)
            handleOpenModal()
        }
    }

    return (
        <>
            <div className="card card--glass mt-3">
                <div className="card-body">
                    <div className="card-title">Buscar asistencias
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id='carnet' placeholder='Buscar por carnet' onChange={(event) => setCarnet(parseInt(event.target.value))} />
                                <label className="form-label"> Buscar por carnet</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id='evento' placeholder='Buscar por id del evento' onChange={(event) => setIdEvento(event.target.value)} />
                                <label className="form-label">Buscar por id del evento</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary mb-3" type='submit'>Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                isOpenModal &&
                <Modal isOpen={isOpenModal} closeModal={handleCloseModal} title={title}> {body} </Modal>
            }
        </>
    )
}