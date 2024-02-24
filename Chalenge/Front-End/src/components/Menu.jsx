function Menu(){
    return(
        <>
		<div id="dashboard">
				<header className="menu-wrap">
					<figure className="user">
						<div className="user-avatar">
						<img src="../../public/img/logo-dh.png" alt="" />
						</div>
						<figcaption>
							Digital House
						</figcaption>
					</figure>
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
									<a href="#">
										<i className="bi bi-person iconoAspirante"></i>
										- Aspirantes
									</a>
								</li>
								<li>
									<a href="#">
										<i className="bi bi-list-check iconoProfesiones"></i>
										- Profesiones
									</a>
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