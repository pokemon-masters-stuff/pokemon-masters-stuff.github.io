let pikachuGridData = [
  // Center Grids
  {
    q: 0,
    r: 0,
    data: {
      name: 'Pikachu',
      description:
        'Hidden Ability: MC Plot Armor - Thunderbolt Power + 999 when the user is in a pinch',
      energy: 0
    },

    fill: 'white'
  },
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
  { q: 0, r: 0, data: { name: 'Torkoal' }, fill: 'white' },
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
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
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
    data: { name: 'Ember + 4', description: 'Ember Power + 4', energy: 3 }
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

let infernapeGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Infernape' }, fill: 'white' },
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
  { q: 0, r: 0, data: { name: 'Dewgong' }, fill: 'white' },
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
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 3 }
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
      description: 'Icy Wind Accuracy + 5 [Req. Lv3 Sync]',
      energy: 10
    },
    fill: '#dedbd3'
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
      description: 'Icy Wind Move Gauge Refresh 4 [Req. Lv3 Sync]',
      energy: 8
    },
    fill: '#dedbd3'
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

let haxorusGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Haxorus' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6, cell: 38 }
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 29 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Dragon Sage Outrage Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Dragon Sage Outrage Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cell: 10
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'D.C. + 4',
      description: 'Dragon Claw Power + 4 [Req. Lv3 Sync]',
      energy: 4,
      cell: 16
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 2, cell: 8 }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'D.C. MGR 2',
      description: 'Dragon Claw Move Gauge Refresh 2',
      energy: 5,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'D.C. MGR 2',
      description: 'Dragon Claw Move Gauge Refresh 2',
      energy: 5,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'D.C. Z 1',
      description:
        'Dragon Claw Zero in 1 - Cricial hits land more easily when an attack move is used [Req. Lv3 Sync]',
      energy: 10,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cell: 9
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'D.C. + 3',
      description: 'Dragon Claw Power + 3',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'D.C. + 4',
      description: 'Dragon Claw Power + 4',
      energy: 4,
      cell: 15
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'X Atk MPR 3',
      description: 'X Attack MP Refresh 3',
      energy: 7,
      cell: 41
    }
  },
  {
    q: -1,
    r: -2,
    data: { name: 'Sp.Def + 10', description: 'Sp.Def + 10', energy: 5 }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'Carry On 1',
      description:
        "Carry On 1 - Raises the use's Attack each time another Pokemon on the field of play faints",
      energy: 10,
      cell: 40
    }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 43 }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'Unhindered',
      description:
        "Unhindered - When the Pokemon attacks, ignores damage-reducing effects on the opponent's field of play [Req. Lv3 Sync]",
      energy: 10,
      cell: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 1,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 3, cell: 39 }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'Y.G.D MPR 3',
      description: "You're Going Down MP Refresh 3",
      energy: 7,
      cell: 42
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 5,
      cell: 45
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 3, cell: 20 }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'Y.G.D. D 4',
      description:
        "You're Going Down Durable 4 - Has a good chance of making the user endure the next hit it take when a move is successful",
      energy: 8,
      cell: 23
    }
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 26
    }
  },
  {
    q: -2,
    r: 3,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 3, cell: 19 }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 22 }
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 25 }
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'S.E. 2',
      description:
        "Speed Entry 2 - Shaprly raises the user's speed when the Pokemon enters a battle [Req. Lv3 Sync]",
      energy: 5,
      cell: 28
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cell: 18 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Attack + 5', description: 'Attack + 5', energy: 3, cell: 21 }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Quick Cure',
      description:
        'Quick Cure - Removes confused, flincing, and trapped conditions from the user once during battle',
      energy: 7,
      cell: 24
    }
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 4,
      cell: 27
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 4,
      cell: 30
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 5,
      cell: 33
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'O.C.B 5',
      description:
        'Outrage Confusion Boon 5 - Powers up moves when the user is confused [Req. Lv3 Sync]',
      energy: 8,
      cell: 36
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 31 }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'Outrage MGR 3',
      description: 'Outrage Move Gauge Refresh 3',
      energy: 7,
      cell: 34
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Outrage MGR 3',
      description: 'Outrage Move Gauge Refresh 3 [Req. Lv3 Sync]',
      energy: 7,
      cell: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 4,
      cell: 32
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'Outrage + 4',
      description: 'Outrage Power + 4',
      energy: 5,
      cell: 35
    }
  }
];

let kingdraGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Kingdra' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: -2,
    r: 1,
    data: {
      name: 'Dragon Guard',
      description:
        'Dragon Guard - Reduces damage when the Pokemon is attacked by Dragon-type moves',
      energy: 5,
      cell: 38
    }
  },

  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 29 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'No Mercy Dragon Pulse Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'No Mercy Dragon Pulse Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 2,
      cell: 10
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'D.B. + 5',
      description: 'Dragon Breath Power + 5 [Req. Lv3 Sync]',
      energy: 5,
      cell: 16
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 8 }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'D.B. MGR 3',
      description: 'Dragon Breath Move Gauge Refresh 3',
      energy: 6,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'D.B. H.E. 1',
      description: 'Dragon Breath Hostile Environment 1 [Req. Lv3 Sync]',
      energy: 10,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 2,
      cell: 9
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'D.B. + 5',
      description: 'Dragon Breath Power + 5',
      energy: 5,
      cell: 15
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'X Sp.Atk MPR 3',
      description: 'X Sp.Atk MP Refresh 3',
      energy: 7,
      cell: 41
    }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'S.R. 6',
      description:
        "Special Reserves 6 - Once per battle, radically raises the user's Sp.Atk when in a pinch",
      energy: 7,
      cell: 44
    }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cell: 40
    }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 10, cell: 43 }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'D.M. P.S. 5',
      description: 'Draco Meteor Paralysis Synergy 5 [Req. Lv3 Sync]',
      energy: 10,
      cell: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 39
    }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'Y.I.M MPR 3',
      description: 'Victory Is Mine MP Refresh 3',
      energy: 7,
      cell: 42
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'S.R. 6',
      description:
        "Stamina Reserves 6 - Once per battle, increases the user's move gauge by six when the user is in a pinch [Req. Lv3 Sync]",
      energy: 7,
      cell: 45
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 20 }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'Rain Gear 3',
      description:
        'Rain Gear 3 - Reduces damage when the Pokemon is hit by an attack move when the weather is rainy',
      energy: 7,
      cell: 23
    }
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 26
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cell: 19
    }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 22 }
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 25 }
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'Dire Rain 1',
      description:
        'Dire Rain 1 - Critical hits land more easily when an attack move is used while the weather is rainy [Req. Lv3 Sync]',
      energy: 10,
      cell: 28
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cell: 18 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 3, cell: 21 }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Raging Rain 5',
      description: 'Raging Rain 5 - Power up moves when the weather is rainy',
      energy: 9,
      cell: 24
    }
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 4,
      cell: 27
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 30
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 33
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'D.M. S.Q. 4',
      description:
        "Draco Meteor Status Quo 4 - Has a good chance of returning the user's lowered stats to normal when a move is successful [Req. Lv3 Sync]",
      energy: 10,
      cell: 36
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5,
      cell: 31
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'D.M. Acc + 10',
      description: 'Draco Meteor Accuracy + 10',
      energy: 8,
      cell: 34
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'D.M. MGR 4',
      description: 'Draco Meteor Move Gauge Refresh 4 [Req. Lv3 Sync]',
      energy: 6,
      cell: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 32
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 35
    }
  }
];

let serperiorGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Serperior' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Shoot for the Stars Leaf Storm Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Shoot for the Stars Leaf Storm Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 9
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4 [Req. Lv3 Sync]',
      energy: 3,
      cell: 15
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 2,
      cell: 8
    }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 6,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'E.B. MGR 3',
      description: 'Energy Ball Move Gauge Refresh 3 [Req. Lv3 Sync]',
      energy: 6,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cell: 10
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'G.D. MGR 3',
      description: 'Giga Drain Move Gauge Refresh 3',
      energy: 6,
      cell: 16
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 2, cell: 39 }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 42
    }
  },
  {
    q: -1,
    r: -3,
    data: {
      name: 'Speeding Sun 2',
      description: 'Speeding Sun 2 [Req. Lv3 Sync]',
      energy: 10,
      cell: 45
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'E.B.O.A.R 1',
      description:
        'Energy Ball On a Roll 1 - Raises the chance of lowering stat values with the additional effects',
      energy: 7,
      cell: 38
    }
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny',
      energy: 5,
      cell: 41
    }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6, cell: 44 }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 2,
      cell: 40
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 43
    }
  },
  {
    q: -3,
    r: -2,
    data: {
      name: 'Solar Shield',
      description: 'Solar Shield [Req. Lv3 Sync]',
      energy: 7,
      cell: 46
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 19
    }
  },
  {
    q: -3,
    r: 4,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 22
    }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'G.D. M.H. 2',
      description:
        "Giga Drain Master Healer 2 - increases the amount of HP restored by the user's healing moves [Req. Lv3 Sync]",
      energy: 10,
      cell: 25
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cell: 18
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Power Flux 5',
      description:
        'Power Flux 5 - The fuller the move gauge, the more this powers up moves',
      energy: 10,
      cell: 21
    }
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 20',
      description: 'Sp.Atk + 20',
      energy: 10,
      cell: 24
    }
  },
  {
    q: -1,
    r: 2,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 2, cell: 20 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 23 }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny [Req. Lv3 Sync]',
      energy: 5,
      cell: 26
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: 1,
    data: {
      name: 'T.T.E. MPR 2',
      description: 'Time to Energize MP Refresh 2',
      energy: 7,
      cell: 30
    }
  },
  {
    q: 3,
    r: 2,
    data: {
      name: 'T.T.E. MPR 2',
      description: 'Time to Energize MP Refresh 2',
      energy: 7,
      cell: 33
    }
  },
  {
    q: 3,
    r: 3,
    data: {
      name: 'T.T.E. S',
      description:
        'Time to Energize Selfless - Makes opponents target the user for a short time when a move is successful in a pinch',
      energy: 5,
      cell: 36
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 28
    }
  },
  {
    q: 2,
    r: 2,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 3, cell: 31 }
  },
  {
    q: 2,
    r: 3,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 5, cell: 34 }
  },
  {
    q: 2,
    r: 4,
    data: {
      name: 'On the Ropes 3',
      description:
        'On the Ropes 3 - Reduces damage when the Pokemon is in a pinch and is hit by a physical attack move [Req. Lv3 Sync]',
      energy: 10,
      cell: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cell: 27
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cell: 29
    }
  },
  {
    q: 1,
    r: 3,
    data: {
      name: 'X Sp.Atk MPR 2',
      description: 'X Sp.Atk All MP Refresh 2',
      energy: 7,
      cell: 32
    }
  },
  {
    q: 1,
    r: 4,
    data: {
      name: 'X Sp.Atk MPR 2',
      description: 'X Sp.Atk All MP Refresh 2 [Req. Lv3 Sync]',
      energy: 7,
      cell: 35
    },
    fill: '#dedbd3'
  }
];

let vileplumeGridData = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Vileplume' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: -2,
    r: 1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 18 }
  },
  {
    q: 2,
    r: -1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 27 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Nature Loving Petal Dance Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Nature Loving Petal Dance Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 9
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2 [Req. Lv3 Sync]',
      energy: 4,
      cell: 15
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 8
    }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'E.B.O.A.R 2',
      description:
        'Energy Ball On a Roll 2 - Raises the chance of lowering stat values with the additional effects',
      energy: 8,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2 [Req. Lv3 Sync]',
      energy: 5,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cell: 10
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'E.B. MGR 2',
      description: 'Energy Ball Move Gauge Refresh 2',
      energy: 5,
      cell: 16
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cell: 36 }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 38
    }
  },
  {
    q: -1,
    r: -3,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 3, cell: 42 }
  },
  {
    q: -1,
    r: -4,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny [Req. Lv3 Sync]',
      energy: 9,
      cell: 45
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'S.S. MGR 3',
      description: 'Stun Spore Move Gauge Refresh 3',
      energy: 4,
      cell: 37
    }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'Healing Sun 2',
      description: 'Healing Sun 2',
      energy: 7,
      cell: 40
    }
  },
  {
    q: -2,
    r: -3,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5,
      cell: 43
    }
  },
  {
    q: -2,
    r: -4,
    data: {
      name: 'HP + 30',
      description: 'HP + 30 [Req. Lv3 Sync]',
      energy: 10,
      cell: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 39 }
  },
  {
    q: -3,
    r: -2,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 41
    }
  },
  {
    q: -3,
    r: -3,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 10, cell: 44 }
  },

  // Lower Left
  {
    q: -3,
    r: 2,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 19
    }
  },
  {
    q: -3,
    r: 3,
    data: {
      name: 'S.S. MGR 3',
      description: 'Stun Spore Move Gauge Refresh 3',
      energy: 4,
      cell: 21
    }
  },
  {
    q: -3,
    r: 4,
    data: {
      name: 'S.S. S.S. 9',
      description:
        "Stun Spore Satisfied Snarl 9 - Lowers the target's Sp.Atk when a move targeting that opponent is successful",
      energy: 9,
      cell: 24
    }
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'P.S. 5',
      description: 'Paralysis Synergy 5',
      energy: 10,
      cell: 20
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cell: 23
    }
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 5,
      cell: 26
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 22
    }
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'E.B.O.A.R 2',
      description:
        'Energy Ball On a Roll 2 - Raises the chance of lowering stat values with the additional effects [Req. Lv3 Sync]',
      energy: 8,
      cell: 25
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'X Sp.Def MPR 3',
      description: 'X Sp.Def MP Refresh 3',
      energy: 7,
      cell: 28
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 31
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'C.S. 5',
      description: 'Confusion Synergy 5',
      energy: 10,
      cell: 34
    }
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'S.S. F 2',
      description:
        'Stun Spore Flabbergast 2 - occasionally leaves the target confused if a move is successful',
      energy: 9,
      cell: 29
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 32
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10 [Req. Lv3 Sync]',
      energy: 4,
      cell: 35
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cell: 30
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'P.I.O MPR 3',
      description: 'Pour It On MP Refresh 3 [Req. Lv3 Sync]',
      energy: 7,
      cell: 33
    },
    fill: '#dedbd3'
  }
];

export {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData
};
