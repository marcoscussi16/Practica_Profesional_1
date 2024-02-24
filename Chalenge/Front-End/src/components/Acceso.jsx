
function Acceso(){
    return (
		<div id="dashboard" >
				<section className="search-wrap">
							<div>
								<div className="search">
									<label for="search">
										<i className="bi bi-search iconoBusqueda" id="iconobusqueda"></i>
									</label>
								</div>
								<div className="user-actions">
									<button>
										<a href="#"><i className="bi bi-person-add iconoPersonaMas" ></i></a>
									</button>
									<button>
										<a href="#"><i className="bi bi-person iconoPersona"></i></a>
									</button>
									<button>
										<a href="#"><i className="bi bi-box-arrow-right iconoSalir"></i></a>
									</button>
								</div>
							</div>
				</section>
		</div>
        
    )
}
export default Acceso;