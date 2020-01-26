import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex
} from 'react-hexgrid';
import React, { Component } from 'react';
import '../assets/Grids.css';

class Grids extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  addToInput = val => {};

  handleClick(e) {
    e.preventDefault();
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
    console.log('clicked');
    console.log('desc', this.refs.desc.props.children);
  }

  render() {
    return (
      <div className="hex-wrapper">
        <div className="hex-grids">
          <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
            {/* Grid with manually inserted hexagons */}
            <Layout
              size={{ x: 7, y: 7 }}
              flat={true}
              spacing={1.1}
              origin={{ x: 0, y: 0 }}
            >
              <Hexagon onClick={this.handleClick} q={0} r={0} s={0}>
                <Text className="grid-fill" ref="desc">
                  Sp.Atk + 5
                </Text>
              </Hexagon>
              {/* Using pattern (defined below) to fill the hexagon */}
              <Hexagon q={0} r={-1} s={1} />
              <Hexagon q={0} r={1} s={-1} />
              <Hexagon q={1} r={-1} s={0} />
              <Hexagon q={1} r={0} s={-1} />
              {/* Pattern and text */}
              <Hexagon q={-1} r={1} s={0} />
              <Hexagon q={-1} r={0} s={1} />
              <Hexagon q={-2} r={0} s={1} />
              <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
            </Layout>
          </HexGrid>
        </div>
      </div>
    );
  }
}

export default Grids;
