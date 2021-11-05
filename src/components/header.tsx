import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a href='#' className="navbar-brand flex-grow-1">Redes 2 - Proyecto 1</a>
                <button className="navbar-toggler" type='button' data-bs-target='#navbar' data-bs-toggle='collapse'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/reports' className="nav-link">Reportes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/assistance' className="nav-link">Asistencia</Link>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">Grupo 4</span>
            </div>
        </nav>
    )
}