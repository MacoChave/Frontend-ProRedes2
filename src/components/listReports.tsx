export const ListReports = (props: any) => {
    return (
        <table className="table card--glass table-hover mt-3">
            <thead>
                <tr>
                    <th scope='col'>Carnet</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Proyecto</th>
                    <th scope='col'>Fecha</th>
                    <th scope='col'>Servidor</th>
                </tr>
            </thead>
            <tbody> {props.children} </tbody>
        </table>
    )
}