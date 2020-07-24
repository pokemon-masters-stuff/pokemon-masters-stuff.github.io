// Refactored from https://github.com/Hellenic/react-hexgrid

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Hex from './Hex';
import HexUtils from './HexUtils';
import { connect } from 'react-redux';
import { displayGridData, hideGridData } from '../../actions/actionCreators';

class Hexagon extends Component {
  static propTypes = {
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    fill: PropTypes.string,
    cellStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    data: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.node
  };

  static contextTypes = {
    layout: PropTypes.object,
    points: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    const { q, r, s } = props;
    const { layout } = context;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    this.state = { hex, pixel };
  }

  // TODO Refactor to reduce duplicate
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { q, r, s } = nextProps;
    const { layout } = this.context;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    this.setState({ hex, pixel });
  }

  onMouseEnter(e) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e, this);
    }
    this.props.displayGridData(this.props.data);
  }

  onMouseOver(e) {
    if (this.props.onMouseOver) {
      this.props.onMouseOver(e, this);
    }
  }

  onMouseLeave(e) {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e, this);
    }
    this.props.hideGridData();
  }

  onClick = e => {
    if (e && this.props.onClickHandler) {
      this.props.onClickHandler(e, this.props.data);
    }
  };

  render() {
    const { fill, cellStyle, className } = this.props;
    const { points } = this.context;
    const { pixel } = this.state;
    const fillId = fill ? fill : null;
    return (
      <g
        className="hexagon-group"
        transform={`translate(${pixel.x}, ${pixel.y})`}
        draggable="true"
        data={''}
        onMouseEnter={e => this.onMouseEnter(e)}
        onMouseOver={e => this.onMouseOver(e)}
        onMouseLeave={e => this.onMouseLeave(e)}
        onClick={e => this.onClick(e)}
        data-coords={`q: ${this.props.q}, r: ${this.props.r}`}
        data-q={this.props.q}
        data-r={this.props.r}
        data-cell-id={this.props.data.cellId}
        data-tip
        data-for="skillTooltip"
      >
        <g className={classNames('hexagon', className)}>
          <polygon points={points} fill={fillId} style={cellStyle} />
          {this.props.children}
        </g>
      </g>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps, {
  displayGridData,
  hideGridData
})(Hexagon);
