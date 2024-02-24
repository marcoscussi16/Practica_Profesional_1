import { Routes, Route, Link } from 'react-router-dom'
import PagAspirante from '../pages/Aspirantes'




function Menu(){
    return(
        <>
		<div id="dashboard">
				<header className="menu-wrap">
					<Link to="/">
					<figure className="user">
						<div className="user-avatar">
						<img src="../../public/img/logo-dh.png" alt="" />
						</div>
						<figcaption>
							Digital House
						</figcaption>
					</figure>
					</Link>
					<nav>
						<section className="menu">
							<h3>Opciones</h3>
							<ul>
								<li>
									<a href="#">
										<i className="bi bi-building iconoEmpresa" ></i>
										- Empresas
									</a>
								</li>
								<li>
									<Link to="/aspirantes">
										<i className="bi bi-person iconoAspirante"></i>
										- Aspirantes
									</Link>
								</li>
								<li>
									<Link to="/profesiones">
										<i className="bi bi-list-check iconoProfesiones"></i>
										- Profesiones
									</Link>
								</li>
								<li>
									<a href="#">
										<i className="bi bi-person-vcard iconoPostulate" ></i>
										- Postulate aquí
									</a>
								</li>
								<li>
									<a href="#">
										<i className="bi bi-chat-left-text iconoContacto"></i>
										- Contacto
									</a>
								</li>
							</ul>
						</section>
					</nav>
				</header>
		</div>
        </>
    )
} export default Menu