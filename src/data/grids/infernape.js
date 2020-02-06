import kingdraGrids from './kingdra';
// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let infernapeGrids = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Infernape' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: 0,
    r: 1,
    data: { name: 'Defense + 5', description: 'Defense + 5', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 1,
    data: {
      name: 'D.H. MPR 3',
      description: 'Dire Hit Move Gauge Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Burn-It-All Overheat Power + 25 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Burn-It-All Overheat Power + 25 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: -3,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 2 },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -4,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'F.P. + 4',
      description: 'Fire Punch Power + 4 [Req. Lv3 Sync]',
      energy: 4
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Attack + 10', description: 'Attack + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -4,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'F.P. MPR 3',
      description: 'Fire Punch Move Gauge Refresh 3',
      energy: 6
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'Attack + 20',
      description: 'Attack + 20 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 2 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -5,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 4 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -6,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 5 },
    fill: '#73d958'
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'Spd.Entry 2', description: 'Speedy Entry 2', energy: 5 },
    fill: 'yellow'
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Attack + 10', description: 'Attack + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 0,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 8 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'C.S. 1',
      description: 'Critical Strike 1 [Req. Lv3 Sync]',
      energy: 12
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 0,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'S.E. 1',
      description: 'Sharp Entry 1 [Req. Lv3 Sync]',
      energy: 15
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 5,
    data: { name: 'Endurance', description: 'Endurance', energy: 7 },
    fill: 'yellow'
  },
  {
    q: -3,
    r: 6,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'W.O.F MPR 3',
      description: "We're On Fire MP Refresh 3",
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Hp + 20', description: 'Hp + 20', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'P.R. 2',
      description: 'Power Reserves 2 [Req. Lv3 Sync]',
      energy: 7
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Hp + 10', description: 'Hp + 10', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Hp + 20', description: 'Hp + 20', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 4,
    data: { name: 'A.E. 2', description: 'Agile Entry 2', energy: 7 },
    fill: 'yellow'
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 4
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'F.B. Acc + 5',
      description: 'Fire Blast Accuracy + 5',
      energy: 5
    },
    fill: '#73d958'
  },
  {
    q: 3,
    r: 0,
    data: { name: 'F.B. + 5', description: 'Fire Blast Power + 5', energy: 7 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'F.B. + 5',
      description: 'Fire Blast Power + 5 [Req. Lv3 Sync]',
      energy: 7
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'F.B. MGR 3',
      description: 'Fire Blast Move Gauge Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'F.B. + 5',
      description: 'Fire Blast Power + 5 [Req. Lv3 Sync]',
      energy: 7
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'F.B. Acc + 5',
      description: 'Fire Blast Accuracy + 5',
      energy: 5
    },
    fill: '#73d958'
  }
];

// add cell numbers based on Kingdra's map
export default infernapeGrids.map(obj => {
  let correspondingKingdraGrid = kingdraGrids.find(
    kingdraCell => kingdraCell.q === obj.q && kingdraCell.r === obj.r
  );
  obj.data['cellNum'] = correspondingKingdraGrid.data.cellNum || 0;
  return { ...obj };
});
