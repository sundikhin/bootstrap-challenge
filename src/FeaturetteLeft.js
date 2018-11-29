import React, { PureComponent } from 'react'

export default class FeaturetteLeft extends PureComponent {
  render() {
    const { headerText, headerCaption, headerImgSrc } = this.props;
    return (
      <div className="featurette-item-container">
        <div className="featurette-column-text">
          <h1>{headerText}</h1>
          <p>{headerCaption}</p>
        </div>
        <div className="featurette-column">
            <img src={headerImgSrc} alt="Secondary picture" className="featurette-image" />
        </div>
      </div>
    )
  }
}
