let testData = [
  // Center Grids
  { q: 0, r: 0, data: {}, fill: 'pat-1' },
  {
    q: 0,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 0,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  ,
  {
    q: 2,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 0,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 0,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 0,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 0,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: -4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: -5,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: -4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: -5,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: -6,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: -4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: -5,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: -6,
    data: { name: '', description: '', energy: 0 }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: -4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: -4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: -2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: -3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },

  // Lower Left
  {
    q: -3,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 5,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -3,
    r: 6,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 5,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -2,
    r: 6,
    data: { name: '', description: '', energy: 0 }
  },

  {
    q: -1,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: 4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: -1,
    r: 5,
    data: { name: '', description: '', energy: 0 }
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 3,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: 0,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 2,
    r: 4,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: 1,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: 2,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: 3,
    data: { name: '', description: '', energy: 0 }
  },
  {
    q: 1,
    r: 4,
    data: { name: '', description: '', energy: 0 }
  }
];

let pikachuGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Pikachu' }, fill: 'pat-1' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0 }
  },
  {
    q: 0,
    r: 1,
    data: { name: 'Defense + 5', description: 'Defense + 5', energy: 0 }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'T.B. + 5', description: 'Thunderbolt Power + 5', energy: 3 }
  },
  ,
  {
    q: 2,
    r: -1,
    data: { name: 'T.S.+ 4', description: 'Thunder Shock Power + 4', energy: 2 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Thunder of Newfound Passion Power + 25',
      energy: 5
    }
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Thunder of Newfound Passion Power + 25',
      energy: 5
    }
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 }
  },
  {
    q: 1,
    r: -3,
    data: { name: 'T.S.+ 3', description: 'Thunder Shock Power + 3', energy: 2 }
  },
  {
    q: 1,
    r: -4,
    data: { name: 'T.S.+ 3', description: 'Thunder Shock Power + 3', energy: 2 }
  },
  {
    q: 1,
    r: -5,
    data: { name: 'T.S.+ 5', description: 'Thunder Shock Power + 5', energy: 2 }
  },
  {
    q: 2,
    r: -3,
    data: { name: 'T.B. + 4', description: 'Thunderbolt Power + 4', energy: 2 }
  },
  {
    q: 2,
    r: -4,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 5', energy: 5 }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'J.S. MPR 3',
      description: 'Jump Start Move Gauge Refresh 3',
      energy: 7
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'T.S. MPR 4',
      description: 'Thunder Shock Move Gauge Refresh 4',
      energy: 6
    }
  },
  {
    q: 3,
    r: -4,
    data: { name: 'T.B. + 4', description: 'Thunderbolt Power + 4', energy: 2 }
  },
  {
    q: 3,
    r: -5,
    data: { name: 'T.B. + 6', description: 'Thunderbolt Power + 6', energy: 3 }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'T.B. MGR 3',
      description: 'Thunderbolt Move Gauge Refresh 3',
      energy: 6
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'T.S.+ 4', description: 'Thunder Shock Power + 4', energy: 2 }
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Unyielding 1', description: 'Unyielding 1', energy: 11 }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'P. MPR 3',
      description: 'Potion MP Refresh 3',
      energy: 7
    }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Unyielding 1', description: 'Unyielding 1', energy: 11 }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'P. MH 1', description: 'Potion Master Healer 1', energy: 10 }
  },
  {
    q: -3,
    r: 0,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 }
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 4 }
  },
  {
    q: -3,
    r: -1,
    data: { name: 'P. MH 1', description: 'Potion Master Healer 1', energy: 10 }
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'T.S.+ 5', description: 'Thunder Shock Power + 5', energy: 2 }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    }
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    }
  },
  {
    q: -2,
    r: 3,
    data: { name: 'T.S.+ 4', description: 'Thunder Shock Power + 4', energy: 2 }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    }
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'T.B. + 4', description: 'Thunderbolt Power + 4', energy: 3 }
  },
  {
    q: -1,
    r: 4,
    data: { name: 'T.B. + 5', description: 'Thunderbolt Power + 5', energy: 4 }
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'T.B. HE 1',
      description: 'Thunderbolt Hostile Enviornment 1',
      energy: 5
    }
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4 }
  },
  {
    q: 3,
    r: 0,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 4 }
  },
  {
    q: 3,
    r: 1,
    data: { name: 'P.R 9', description: 'Power Reserves 9', energy: 12 }
  },
  {
    q: 2,
    r: 0,
    data: { name: 'P.R 5', description: 'Power Reserves 5', energy: 10 }
  },
  {
    q: 2,
    r: 1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 4 }
  },
  {
    q: 2,
    r: 2,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 6 }
  },
  {
    q: 1,
    r: 1,
    data: { name: 'T.B. + 4', description: 'Thunderbolt Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: 2,
    data: { name: 'P.S. 5', description: 'Paralysis Synergy 5', energy: 10 }
  }
];

let torkoalGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Torkoal' }, fill: 'pat-1' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0 }
  },
  {
    q: 0,
    r: 1,
    data: { name: 'Defense + 5', description: 'Defense + 5', energy: 0 }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 }
  },
  ,
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat + 25',
      energy: 5
    }
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat + 25',
      energy: 5
    }
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 }
  },
  {
    q: 1,
    r: -3,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 2 }
  },
  {
    q: 1,
    r: -4,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: -5,
    data: { name: 'P.C. 1', description: 'Power Chain 1', energy: 5 }
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 2 }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'X Sp.Atk MPR 3',
      description: 'X Sp.Atk MP Refresh 3',
      energy: 7
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'Ember MGR 4',
      description: 'Ember Move Gauge Refresh 4',
      energy: 6
    }
  },
  {
    q: 2,
    r: -6,
    data: { name: 'P.C. 1', description: 'Power Chain 1', energy: 5 }
  },
  {
    q: 3,
    r: -4,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: 3,
    r: -5,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: 3,
    r: -6,
    data: { name: 'P.C. 1', description: 'Power Chain 1', energy: 5 }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3 }
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: -1,
    r: -3,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 }
  },
  {
    q: -1,
    r: -4,
    data: { name: 'S.S. 7', description: 'Solar Shield 7', energy: 7 }
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'WoW MGR 3',
      description: 'Will-O-Wisp Move Gauge Refresh 3',
      energy: 5
    }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 }
  },
  {
    q: -2,
    r: -3,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 5 }
  },
  {
    q: -2,
    r: -4,
    data: { name: 'Fortuitous 4', description: 'Fortuitous 4', energy: 10 }
  },
  {
    q: -3,
    r: -1,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: -3,
    r: -2,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 }
  },
  {
    q: -3,
    r: -3,
    data: { name: 'C.S. 5', description: 'Critical Strike 5', energy: 10 }
  },

  // Lower Left
  {
    q: -3,
    r: 2,
    data: { name: 'B.S. 5', description: 'Burn Synergy 5', energy: 8 }
  },
  {
    q: -3,
    r: 3,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 5 }
  },
  {
    q: -3,
    r: 4,
    data: { name: 'B.S. 5', description: 'Burn Synergy 5', energy: 10 }
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'WoW MGR 3',
      description: 'Will-O-Wisp Move Gauge Refresh 3',
      energy: 5
    }
  },
  {
    q: -2,
    r: 3,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'WoW Acc + 10',
      description: 'Will-O-Wisp Accuracy + 10',
      energy: 7
    }
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 4 }
  },
  {
    q: 3,
    r: 0,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: 3,
    r: 1,
    data: { name: 'Pass It On', description: 'Pass It On', energy: 10 }
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'THTH MPR 3',
      description: 'Too Hot To Handle Move Gauge Refresh 3',
      energy: 7
    }
  },
  {
    q: 2,
    r: 1,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6 }
  },
  {
    q: 2,
    r: 2,
    data: { name: 'Sp.Atk + 20', description: 'Sp.Atk + 20', energy: 10 }
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: 2,
    data: { name: 'H.S. 1', description: 'Healing Sun 1', energy: 6 }
  }
];

let infernapeGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Infernape' }, fill: 'pat-1' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0 }
  },
  {
    q: 0,
    r: 1,
    data: { name: 'Defense + 5', description: 'Defense + 5', energy: 0 }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 0 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0 }
  },
  {
    q: -2,
    r: 1,
    data: {
      name: 'D.H. MPR 3',
      description: 'Dire Hit Move Gauge Refresh 3',
      energy: 7
    }
  },
  ,
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 4 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Burn-It-All Overheat Power + 25',
      energy: 5
    }
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Burn-It-All Overheat Power + 25',
      energy: 5
    }
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 2 }
  },
  {
    q: 1,
    r: -3,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 2 }
  },
  {
    q: 1,
    r: -4,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: -5,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 4 }
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Attack + 10', description: 'Attack + 10', energy: 3 }
  },
  {
    q: 2,
    r: -4,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 3 }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'F.P. MPR 3',
      description: 'Fire Punch Move Gauge Refresh 3',
      energy: 6
    }
  },
  {
    q: 2,
    r: -6,
    data: { name: 'Attack + 20', description: 'Attack + 20', energy: 5 }
  },
  {
    q: 3,
    r: -4,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 2 }
  },
  {
    q: 3,
    r: -5,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 4 }
  },
  {
    q: 3,
    r: -6,
    data: { name: 'F.P. + 4', description: 'Fire Punch Power + 4', energy: 5 }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'Spd.Entry 2', description: 'Speedy Entry 2', energy: 5 }
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Attack + 10', description: 'Attack + 10', energy: 5 }
  },
  {
    q: -2,
    r: 0,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 8 }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'C.S. 1', description: 'Critical Strike 1', energy: 12 }
  },
  {
    q: -3,
    r: 0,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 3 }
  },
  {
    q: -3,
    r: -1,
    data: { name: 'S.E. 1', description: 'Sharp Entry 1', energy: 15 }
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 3 }
  },
  {
    q: -3,
    r: 5,
    data: { name: 'Endurance', description: 'Endurance', energy: 7 }
  },
  {
    q: -3,
    r: 6,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'W.O.F MPR 3',
      description: "We're On Fire MP Refresh 3",
      energy: 7
    }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 3 }
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Hp + 20', description: 'Hp + 20', energy: 5 }
  },
  {
    q: -2,
    r: 6,
    data: { name: 'P.R. 2', description: 'Power Reserves 2', energy: 7 }
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Hp + 10', description: 'Hp + 10', energy: 2 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Hp + 20', description: 'Hp + 20', energy: 3 }
  },
  {
    q: -1,
    r: 4,
    data: { name: 'A.E. 2', description: 'Agile Entry 2', energy: 7 }
  },
  {
    q: -1,
    r: 5,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 }
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'F.B. Acc + 5',
      description: 'Fire Blast Accuracy + 5',
      energy: 5
    }
  },
  {
    q: 3,
    r: 0,
    data: { name: 'F.B. + 5', description: 'Fire Blast Power + 5', energy: 7 }
  },
  {
    q: 3,
    r: 1,
    data: { name: 'F.B. + 5', description: 'Fire Blast Power + 5', energy: 7 }
  },
  {
    q: 2,
    r: 0,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'F.B. MGR 3',
      description: 'Fire Blast Move Gauge Refresh 3',
      energy: 7
    }
  },
  {
    q: 2,
    r: 2,
    data: { name: 'F.B. + 5', description: 'Fire Blast Power + 5', energy: 7 }
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 4 }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'F.B. Acc + 5',
      description: 'Fire Blast Accuracy + 5',
      energy: 5
    }
  }
];

let dewgongGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Dewgong' }, fill: 'pat-1' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0 }
  },
  {
    q: 0,
    r: 1,
    data: { name: 'Defense + 5', description: 'Defense + 5', energy: 0 }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'H.E. 1', description: 'Hostile Enviornment 1', energy: 7 }
  },
  ,
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat + 25',
      energy: 5
    }
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Fiery Passion Overheat + 25',
      energy: 5
    }
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2 }
  },
  {
    q: 1,
    r: -3,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: -4,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 3 }
  },
  {
    q: 1,
    r: -5,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 4 }
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 }
  },
  {
    q: 2,
    r: -4,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 4 }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'I.B. MGR 3',
      description: 'Ice Beam Move Gauge Refresh 3',
      energy: 6
    }
  },
  {
    q: 2,
    r: -6,
    data: { name: 'Sp.Atk + 10', description: 'Sp.Atk + 10', energy: 5 }
  },
  {
    q: 3,
    r: -4,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 3 }
  },
  {
    q: 3,
    r: -5,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 3 }
  },
  {
    q: 3,
    r: -6,
    data: { name: 'Ice Beam + 4', description: 'Ice Beam Power + 4', energy: 4 }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'H.E. 1', description: 'Hostile Enviornment 1', energy: 7 }
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4 }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'D.H. MPR 3',
      description: 'Dire Hit MP Refresh 3',
      energy: 7
    }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 5 }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'F.S. 8', description: 'Freeze Synergy 8', energy: 10 }
  },
  {
    q: -3,
    r: 0,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 5 }
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 3 }
  },
  {
    q: -3,
    r: -1,
    data: { name: 'F.S. 8', description: 'Freeze Synergy 8', energy: 10 }
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'H.H 1', description: 'Healing Hail 1', energy: 7 }
  },
  {
    q: -3,
    r: 5,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 5 }
  },
  {
    q: -3,
    r: 6,
    data: { name: 'I.H. 3', description: 'Invigorating Hail 3', energy: 8 }
  },
  {
    q: -2,
    r: 3,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 4 }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Speed + 20', description: 'Speed + 20', energy: 5 }
  },
  {
    q: -2,
    r: 5,
    data: {
      name: 'ITYAL MPR 3',
      description: "I'll Teach You A Lesson MP Refresh 3",
      energy: 7
    }
  },
  {
    q: -2,
    r: 6,
    data: { name: 'I.H. 3', description: 'Invigorating Hail 3', energy: 8 }
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Snow Shelter', description: 'Snow Shelter', energy: 7 }
  },
  {
    q: -1,
    r: 4,
    data: { name: 'Defense + 10', description: 'Defense + 10', energy: 4 }
  },
  {
    q: -1,
    r: 5,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 5 }
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 }
  },
  {
    q: 3,
    r: 0,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'I.W. Acc + 5',
      description: 'Icy Wind Accuracy + 5',
      energy: 10
    }
  },
  {
    q: 2,
    r: 0,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3 }
  },
  {
    q: 2,
    r: 1,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'I.W. MGR 4',
      description: 'Icy Wind Move Gauge Refresh 4',
      energy: 8
    }
  },
  {
    q: 1,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 3 }
  },
  {
    q: 1,
    r: 2,
    data: { name: 'I.W. + 5', description: 'Icy Wind Power + 5', energy: 5 }
  }
];

export { pikachuGridData, torkoalGridData, infernapeGridData, dewgongGridData };
