import { ChangeEvent, FormEvent, useState } from "react"
import { sendAssistance } from "../services/assistanceService"

export const AddAssistence = () => {
    const [carnet, setCarnet] = useState(0)
    const [nombre, setNombre] = useState('')
    const [evento, setEvento] = useState('')
    const [idEvento, setIdEvento] = useState('')
    const [base64, setBase64] = useState('')

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        sendAssistance({
            carnet: carnet,
            nombre_alumno: nombre,
            nombre_evento: evento,
            id_evento: idEvento,
            captura: base64,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    const handleFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
        let files = target.files
        if (!files) return

        let reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = () => {
            let result = reader.result
            if (result) {
                let str: string = `${result}`
                setBase64(str)
            }
        }
        reader.onerror = (err) => {
            console.error('Error: ', err)
        }
    }

    return (
        <div className='card card--glass mt-3'>
            <div className="card-body">
                <h5 className="card-title">Reportar asistencia</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id='carnet' placeholder='Carnet' onChange={(event) => setCarnet(parseInt(event.target.value))} required />
                        <label className='form-label' htmlFor="carnet">Carnet</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='nombre' placeholder='Nombre del estudiante' onChange={(event) => { setNombre(event.target.value) }} required />
                        <label className='form-label' htmlFor="nombre">Nombre del estudiante</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='evento' placeholder='Nombre del evento' onChange={(event) => { setEvento(event.target.value) }} required />
                        <label className='form-label' htmlFor="evento">Nombre del evento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='idEvento' placeholder='Id del evento' onChange={(event) => { setIdEvento(event.target.value) }} required />
                        <label className='form-label' htmlFor="idEvento">Id del evento</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagen" className="form-label">Seleccionar imagen</label>
                        <input type="file" className="form-control" id="imagen" onChange={handleFile} required />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary mb-3" type='submit'>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}