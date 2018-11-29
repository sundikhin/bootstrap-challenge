import React, { PureComponent } from 'react';

export default class HeaderNav extends PureComponent {
  render() {
    return (
			// <nav className="navbar navbar-dark bg-dark">
			// 	<a className="navbar-brand" href="#">Navbar</a>
			// 	<div className="collapse navbar-collapse">
			// 		<ul className="navbar-nav mr-auto">
			// 			<li className="nav-item active">
			// 				<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			// 			</li>
			// 			<li className="nav-item">
			// 				<a className="nav-link" href="#">Features</a>
			// 			</li>
			// 			<li className="nav-item">
			// 				<a className="nav-link" href="#">Pricing</a>
			// 			</li>
			// 		</ul>
			// 	</div>
			// </nav>

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Carousel</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Disabled</a>
						</li>
					</ul>
					<form className="form-inline">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
    )
  }
}
