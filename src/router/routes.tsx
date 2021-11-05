import { Route, Switch } from "react-router-dom"
import { AsistenciaPage } from "../pages/assistance"
import { DetalleAssistance } from "../pages/detalleAssistance"
import { ReportePage } from "../pages/reportes"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/assistance' component={AsistenciaPage} />
                <Route exact path='/assistance/evento' component={DetalleAssistance} />
                <Route exact path='/reports' component={ReportePage} />
                <Route exact path='/' component={ReportePage} />
            </Switch>
        </>
    )
}