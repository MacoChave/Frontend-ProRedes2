export const ItemReport = (props: any) => {
    const { handleItem } = props

    const dateToStr = (date: Date) => {
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
        <tr>
            <td> {props.reporte.carnet} </td>
            <td> {props.reporte.nombre} </td>
            <td> {props.reporte.curso} </td>
            <td> {dateToStr(new Date(props.reporte.fecha))} </td>
            <td> {props.reporte.server} </td>
            <td>
                <button className="btn btn-primary" type='button' onClick={() => handleItem(props.reporte._id)}>Ver</button>
            </td>
        </tr>
    )
}