import { AddAssistence } from "../components/addAssistance"
import { SearchAssistance } from "../components/searchAssistance"

export const AsistenciaPage = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6">
                    <AddAssistence />
                </div>
                <div className="col-md-6">
                    <SearchAssistance />
                </div>
            </div>
        </div>
    )
}