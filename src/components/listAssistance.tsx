export const ListAssistance = (props: any) => {
    return (
        <table className='table card--glass table-hover mt-3'>
            <thead>
                <tr>
                    <th scope='col'>Id evento</th>
                    <th scope='col'>Evento</th>
                    <th scope='col'>Carnet</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Servidor</th>
                    <th scope='col'>Captura</th>
                </tr>
            </thead>
            <tbody> {props.children} </tbody>
        </table>
    )
}