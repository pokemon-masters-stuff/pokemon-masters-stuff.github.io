// From https://github.com/Hellenic/react-hexg

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';

class Pattern extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string,
    size: PropTypes.object
  };
  static defaultProps = {
    size: new Point(10, 10)
  };

  render() {
    const { id, link, size } = this.props;
    return (
      <defs>
        <pattern
          id={id}
          patternUnits="objectBoundingBox"
          x={0}
          y={0}
          width={size.x}
          height={size.y}
        >
          <image
            xlinkHref={link}
            x={0}
            y={0}
            width={size.x * 0.9}
            height={size.y * 0.9}
          />
        </pattern>
      </defs>
    );
  }
}

export default Pattern;
