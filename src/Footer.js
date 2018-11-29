import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
					<p>© 2017-2018 Company, Inc</p>
					<a href="#">Privacy</a>
					<a href="#">Terms</a>
			</div>
				<div className="footer-right">
					<a href="#">Back to Top</a>
				</div>
      </footer>
    )
  }
}
