import { useEffect, useState } from "react"
import { AddReporte } from "../components/addReporte"
import { ItemReport } from "../components/itemReport"
import { ListReports } from "../components/listReports"
import { Modal } from '../components/modal'
import { getReporteById, getReportes } from "../services/reportService"
import IReporte from "../models/ireporte"
import { useModal } from "../hooks/useModal"

export const ReportePage = () => {
    const defaultReports: IReporte[] = []
    const defaultReport: IReporte = {
        _id: '',
        __v: 0,
        carnet: '',
        nombre: '',
        curso: '',
        fecha: new Date(),
        reporte: '',
        server: ''
    }

    const [serverQuery, setServerQuery]: [string, (server: string) => void] = useState("")
    const [reports, setReports]: [IReporte[], (reports: IReporte[]) => void] = useState(defaultReports)
    const [error, setError]: [string, (error: string) => void] = useState("")
    const [report, setReport]: [IReporte, (report: IReporte) => void] = useState(defaultReport)
    const [server, setServer]: [string, (server: string) => void] = useState("")
    const { isOpenModal, handleOpenModal, handleCloseModal } = useModal(false)

    useEffect(() => {
        getReportes()
            .then((res: any) => {
                setReports(res.data.reports)
                setServerQuery(res.data.server)
            })
            .catch(err => setError(err))
    }, [])

    const handleItem = async (id: string) => {
        getReporteById(id)
            .then((res: any) => {
                setReport(res.data.reports[0])
                setServer(res.data.server)
                handleOpenModal()
                console.info({
                    reporte: report,
                    server: server
                })
            })
            .catch(err => console.error(err))
    }

    const dateToStr = (date: Date): string => {
        var mm = date.getMonth() + 1
        var dd = date.getDate()

        return [
            (dd > 9 ? '' : '0') + dd,
            '/',
            (mm > 9 ? '' : '0') + mm,
            '/',
            date.getFullYear()
        ].join('')
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-4">
                    <AddReporte></AddReporte>
                </div>
                <div className="col-md-8">
                    <ListReports>
                        {
                            reports.map((rep => (
                                <ItemReport key={rep._id} reporte={rep} handleItem={handleItem} />
                            )))
                        }
                    </ListReports>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-md-8">
                    {!error && <div className="alert alert-success" > {serverQuery} </div>}
                    {error && <div className="alert alert-danger" > {error} </div>}
                </div>
            </div>
            {
                isOpenModal &&
                <Modal isOpen={isOpenModal} closeModal={handleCloseModal} title='Resumen de reporte' >
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={report.carnet} readOnly />
                        <label>Carnet</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={report.nombre} readOnly />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={report.curso} readOnly />
                        <label>Curso</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={report.server} readOnly />
                        <label>Server</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={dateToStr(new Date(report.fecha ? report.fecha : ''))} readOnly />
                        <label>Fecha</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={report.reporte} readOnly />
                        <label>Reporte</label>
                    </div>
                </Modal>
            }
        </div>
    )
}