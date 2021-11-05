import { FormEvent, useState } from "react"
import { sendReport } from "../services/reportService"

export const AddReporte = () => {
    const [carnet, setCarnet] = useState(0)
    const [nombre, setNombre] = useState('')
    const [curso, setCurso] = useState('')
    const [reporte, setReporte] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendReport({
            carnet: carnet,
            nombre: nombre,
            curso: curso,
            reporte: reporte
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }
    return (
        <div className='card card--glass mt-3'>

            <div className="card-body">
                <h5 className="card-title">Ingreso de reportes de practicantes</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id='carnet' name='carnet' placeholder='Carnet' onChange={(event) => setCarnet(parseInt(event.target.value))}

                            required />
                        <label className='form-label' htmlFor="carnet">Carnet</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='nombre' name='nombre' placeholder='Nombre' onChange={(event) => setNombre(event.target.value)}

                            required />
                        <label className='form-label' htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='asignatura' name='asignatura' placeholder='Curso / Proyecto'
                            onChange={(event) => setCurso(event.target.value)}

                            required />
                        <label className='form-label' htmlFor="asignatura">Curso / Proyecto</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className='form-control' id='descripcion' name='descripcion' onChange={(event) => setReporte(event.target.value)} ></textarea>
                        <label className='form-label' htmlFor='descripcion'>Cuerpo del mensaje</label>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary mb3" type='submit'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}