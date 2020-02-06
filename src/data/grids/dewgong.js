import kingdraGrids from './kingdra';
// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let dewgongGrids = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Dewgong' }, fill: 'white' },
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
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 },
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
    data: { name: 'H.E. 1', description: 'Hostile Enviornment 1', energy: 7 },
    fill: 'yellow'
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: "Winter's Lesson Aurora Beam Power + 2 [Req. Lv3 Sync]",
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: "Winter's Lesson Aurora Beam Power + 25 [Req. Lv3 Sync]",
      energy: 5
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4 [Req. Lv3 Sync]',
      energy: 4
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -4,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'I.B. MGR 3',
      description: 'Ice Beam Move Gauge Refresh 3',
      energy: 6
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'Ice Beam + 4',
      description: 'Ice Beam Power + 4',
      energy: 4
    },
    fill: '#73d958'
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'H.E. 1', description: 'Hostile Enviornment 1', energy: 7 },
    fill: 'yellow'
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'D.H. MPR 3',
      description: 'Dire Hit MP Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'F.S. 8',
      description: 'Freeze Synergy 8 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 0,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'F.S. 8',
      description: 'Freeze Synergy 8 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'H.H 1', description: 'Healing Hail 1', energy: 7 },
    fill: 'yellow'
  },
  {
    q: -3,
    r: 5,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 6,
    data: { name: 'I.H. 3', description: 'Invigorating Hail 3', energy: 8 },
    fill: 'yellow'
  },
  {
    q: -2,
    r: 3,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 5,
    data: {
      name: 'ITYAL MPR 3',
      description: "I'll Teach You A Lesson MP Refresh 3",
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'I.H. 3',
      description: 'Invigorating Hail 3 [Req. Lv3 Sync]',
      energy: 8
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Snow Shelter', description: 'Snow Shelter', energy: 7 },
    fill: 'yellow'
  },
  {
    q: -1,
    r: 4,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'HP + 20',
      description: 'HP + 20 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: 0,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'I.W. Acc + 5',
      description: 'Icy Wind Accuracy + 5 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: 1,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 },
    fill: '#73d958'
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'I.W. MGR 4',
      description: 'Icy Wind Move Gauge Refresh 4 [Req. Lv3 Sync]',
      energy: 8
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: 2,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 },
    fill: '#73d958'
  }
];

// add cell numbers based on Kingdra's map
export default dewgongGrids.map(obj => {
  let correspondingKingdraGrid = kingdraGrids.find(
    kingdraCell => kingdraCell.q === obj.q && kingdraCell.r === obj.r
  );
  obj.data['cellNum'] = correspondingKingdraGrid.data.cellNum || 0;
  return { ...obj };
});
