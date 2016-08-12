import React from 'react';
import {Marker} from 'react-google-maps';

export default () => {
  return (
    <Marker
      position={this.props.position}
      // label= 'HELLO WORLD'
      icon={{ url: 'https://media.giphy.com/media/8K1IYSnhUaNH2/giphy_s.gif' }}
    />
  );
}
