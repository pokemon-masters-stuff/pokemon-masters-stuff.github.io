import vileplumeGrids from './vileplume';
// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let torkoalGrids = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Torkoal' }, fill: 'white' },
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
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 },
    fill: '#66B6EC'
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat Power + 25 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat Power + 25 [Req. Lv3 Sync]',
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
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 2 },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -4,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'P.C. 1',
      description: 'Power Chain 1 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 2 },
    fill: '#73d958'
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'X Sp.Atk MPR 3',
      description: 'X Sp.Atk MP Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'Ember MGR 4',
      description: 'Ember Move Gauge Refresh 4',
      energy: 6
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'P.C. 1',
      description: 'Power Chain 1 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -5,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -6,
    data: { name: 'P.C. 1', description: 'Power Chain 1', energy: 5 },
    fill: 'yellow'
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: -1,
    r: -3,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: -4,
    data: {
      name: 'S.S. 7',
      description: 'Solar Shield 7 [Req. Lv3 Sync]',
      energy: 7
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'WoW MGR 3',
      description: 'Will-O-Wisp Move Gauge Refresh 3',
      energy: 5
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: -2,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: -3,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: -4,
    data: {
      name: 'Fortuitous 4',
      description: 'Fortuitous 4 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: -1,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: -3,
    r: -2,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: -3,
    data: { name: 'C.S. 5', description: 'Critical Strike 5', energy: 10 },
    fill: 'yellow'
  },

  // Lower Left
  {
    q: -3,
    r: 2,
    data: { name: 'B.S. 5', description: 'Burn Synergy 5', energy: 8 },
    fill: 'yellow'
  },
  {
    q: -3,
    r: 3,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 4,
    data: { name: 'B.S. 5', description: 'Burn Synergy 5', energy: 10 },
    fill: 'yellow'
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'WoW MGR 3',
      description: 'Will-O-Wisp Move Gauge Refresh 3',
      energy: 5
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: 3,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 5
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'WoW Acc + 10',
      description: 'Will-O-Wisp Accuracy + 10 [Req. Lv3 Sync]',
      energy: 7
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: 3,
    r: 0,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 },
    fill: '#66B6EC'
  },
  {
    q: 3,
    r: 1,
    data: { name: 'Pass It On', description: 'Pass It On', energy: 10 },
    fill: 'yellow'
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'THTH MPR 3',
      description: 'Too Hot To Handle Move Gauge Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: 1,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6 },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Sp.Atk + 20',
      description: 'Sp.Atk + 20 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 },
    fill: '#73d958'
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'H.S. 1',
      description: 'Healing Sun 1 [Req. Lv3 Sync]',
      energy: 6
    },
    fill: '#dedbd3'
  }
];

// add cell numbers based on Vileplume's map
export default torkoalGrids.map(obj => {
  let correspondingVileplumeGrid = vileplumeGrids.find(
    vileplumeCell => vileplumeCell.q === obj.q && vileplumeCell.r === obj.r
  );
  obj.data['cellNum'] = correspondingVileplumeGrid.data.cellNum || 0;
  return { ...obj };
});
