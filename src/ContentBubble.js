import React, { PureComponent } from 'react'

export default class ContentBubble extends PureComponent {
	render() {
		return (
			<div className="container-fluid content-bubble-container">
				<div className="row">
					<div className="col-md-4 col-sm-12 content-bubble-container">
						<img src="https://images.pexels.com/photos/935872/pexels-photo-935872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400" className="bubble-img" />
						<h3>Heading</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. 
						</p>
						<button type="button" className="btn btn-secondary">View details >></button>
					</div>

					<div className="col-md-4 col-sm-12 content-bubble-container">
						<img src="https://images.pexels.com/photos/264943/pexels-photo-264943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="bubble-img" />
						<h3>Heading</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. 
						</p>
						<button type="button" className="btn btn-secondary">View details >></button>
					</div>

					<div className="col-md-4 col-sm-12 content-bubble-container">
						<img src="https://images.pexels.com/photos/592739/pexels-photo-592739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="bubble-img" />
						<h3>Heading</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur.
						</p>
						<button type="button" className="btn btn-secondary">View details >></button>
					</div>
				</div>
			</div>
		)
	}
}
