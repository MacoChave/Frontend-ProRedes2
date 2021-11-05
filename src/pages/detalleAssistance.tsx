import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import IAssistance from "../models/iassistance"
import { ListAssistance } from '../components/listAssistance'
import { getAssistanceByCarnet, getAssistanceById } from "../services/assistanceService"
import { ItemAssistance } from "../components/itemAssistance"

export const DetalleAssistance = () => {

    const defaultAssistances: IAssistance[] = []

    const [assistances, setAssistances]: [IAssistance[], (assistances: IAssistance[]) => void] = useState(defaultAssistances)
    const [serverQuery, setServerQuery]: [string, (server: string) => void] = useState('')
    const [error, setError]: [string, (error: string) => void] = useState('')
    const [ msgComponent, setMsgComponent ] = useState(<></>)

    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const carnet = query.get('carnet') || '0'
    const evento = query.get('evento') || ''

    useEffect(() => {
        if (carnet !== '0') {
            getAssistanceByCarnet(parseInt(carnet))
                .then((res: any) => {
                    setAssistances(res.data.reports)
                    setServerQuery(res.data.server)
                    setMsgComponent(
                        <div className='container mt-4'>
                            <div className="row"><h3>Eventos por carnet</h3></div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">Carnet</label>
                                    <input type="text" className="form-control" value={res.data.carnet} readOnly />
                                </div>
                                <div className="col mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" value={res.data.nombre} readOnly />
                                </div>
                            </div>
                        </div>
                    )
                })
                .catch(err => setError(err))
        } else {
            getAssistanceById(evento)
                .then((res: any) => {
                    setAssistances(res.data.reports)
                    setServerQuery(res.data.server)
                    setMsgComponent(
                        <div className='container mt-4'>
                            <div className="row"><h3>Eventos por id del evento</h3></div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">Evento</label>
                                    <input type="text" className="form-control" value={res.data.evento} readOnly />
                                </div>
                            </div>
                        </div>
                    )
                })
                .catch(err => setError(err))
        }
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row justify-content-center">
                {msgComponent}
                <div className="col-md-10">
                    <ListAssistance>
                        {
                            assistances.map((ass => (
                                <ItemAssistance key={ass._id} assistance={ass} />
                            )))
                        }
                    </ListAssistance>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {
                        !error &&
                        <div className="alert alert-success">
                            {serverQuery}
                        </div>
                    }
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}