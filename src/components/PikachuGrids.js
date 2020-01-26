import { HexGrid, HexUtils, Layout, Hexagon, Hex, Text } from './Hexagon';

import React, { Component } from 'react';
import '../assets/Grids.css';

class PikachuGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightedGridEnergy: '',
      highlightedGridDesc: '',
      gridToggleOn: false,
      toggledGridEnergy: '',
      toggledGridDesc: ''
    };

    // this.handleClick = this.handleClick.bind(this);
    // this.mouseEnter = this.mouseEnter.bind(this);
    // this.mouseLeave = this.mouseLeave.bind(this);
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   // this.setState(state => ({
  //   //   isToggleOn: !state.isToggleOn
  //   // }));
  //   console.log('clicked');
  //   // console.log('desc', this.refs.desc.props.children);
  //   // console.log('energy', this.refs.desc.props.energy);
  // }

  // mouseEnter(e) {
  //   console.log('this', this.props);
  //   // this.setState({ highlightedGridEnergy: this.gridInput.props.energy });
  //   // this.setState({ highlightedGridDesc: this.gridInput.props.children });
  // }

  // mouseLeave(e) {
  //   console.log('e', e);
  //   // this.setState({ highlightedGridEnergy: '' });
  //   // this.setState({ highlightedGridDesc: '' });
  // }

  //  from react-hexagrid: const fillId = (fill) ? `url(#${fill})` : null;

  render() {
    return (
      <div className="hex-grids">
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout
            size={{ x: 5, y: 5 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            {/* Middle Grids */}
            <Hexagon q={0} r={0} s={0} data={{}} fill="pat-1">
              <Text>Pikachu</Text>
            </Hexagon>
            <Hexagon
              q={0}
              r={-1}
              s={1}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'Speed + 5', energy: 0 }}
            >
              <Text>Speed + 5</Text>
            </Hexagon>
            <Hexagon
              q={0}
              r={1}
              s={-1}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'Defense + 5', energy: 0 }}
            >
              <Text>Defense + 5</Text>
            </Hexagon>
            <Hexagon
              q={1}
              r={-1}
              s={0}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'HP + 10', energy: 0 }}
            >
              <Text>HP + 10</Text>
            </Hexagon>
            <Hexagon
              q={1}
              r={0}
              s={-1}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'Sp.Atk + 5', energy: 0 }}
            >
              <Text>Sp.Atk + 5</Text>
            </Hexagon>
            <Hexagon
              q={-1}
              r={1}
              s={0}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'Sp.Atk + 5', energy: 0 }}
            >
              <Text>Sp.Atk + 5</Text>
            </Hexagon>
            <Hexagon
              q={-1}
              r={0}
              s={1}
              onClick={this.handleClick}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              data={{ description: 'Sp.Def + 5', energy: 0 }}
            >
              <Text>Sp.Def + 5</Text>
            </Hexagon>

            {/* Upper Right Grids */}
            {/* <Hexagon q={-2} r={0} s={1} /> */}
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default PikachuGrids;
