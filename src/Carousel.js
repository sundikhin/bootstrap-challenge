import React, { PureComponent } from 'react'

export default class Carousel extends PureComponent {
  render() {
	return (
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>

				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="https://images.pexels.com/photos/704957/pexels-photo-704957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="First slide" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Lorem Ipsum</h5>
							<p>I'm blue dabadeedabadie dabadeedabadie</p>
						</div>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Second slide" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Lorem Ipsum</h5>
							<p>I'm blue dabadeedabadie dabadeedabadie</p>
						</div>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://images.pexels.com/photos/1201540/pexels-photo-1201540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Third slide" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Lorem Ipsum</h5>
							<p>I'm blue dabadeedabadie dabadeedabadie</p>
						</div>
					</div>
				</div>

				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
		</div>
	);
  }
}
