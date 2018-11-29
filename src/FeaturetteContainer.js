import React, { PureComponent } from 'react'
import FeaturetteLeft from './FeaturetteLeft';
import FeaturetteRight from './FeaturetteRight';

export default class FeaturetteContainer extends PureComponent {
  render() {
    return (
      <div className="featurette-container">
				<FeaturetteLeft 
					headerText="First featurette heading. It'll blow your mind."
					headerCaption="Donuc ullcopter sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					headerImgSrc="https://scontent-iad3-1.cdninstagram.com/vp/21a37d34ee0f4866b19f81251d3c93f1/5C995E2B/t51.2885-15/e35/46011402_361748187730479_688991962729119847_n.jpg"
				/>

				<FeaturetteRight
					headerText="Oh yeah, it's that good. See for yourself."
					headerCaption="Donuc ullcopter sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					headerImgSrc="https://scontent-iad3-1.cdninstagram.com/vp/85855b405ce32ef3416b2bd643fd9309/5CA55BCA/t51.2885-15/e35/42698921_2102499313398016_4981238112631112508_n.jpg"
				/>
      </div>
    )
  }
}
