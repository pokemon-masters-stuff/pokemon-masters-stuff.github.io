import { shortenedMoveNameByCellId } from '../data';

export const getFillColorByMoveType = ({ type, group, isLocked }) => {
  let colorsByTypeDef = {
    statsBoost: '#66b6ec', // blue
    passive: '#fff04d', // yellow
    moveEffect: '#f24646', // red
    movePowerBoost: '#73d958', // green
    moveAccuracyBoost: '#73d958', // green
    syncBoost: '#d12deb', // purple
    locked: '#dedbd3' // gray
  };
  let colorsByTypeId = {
    1: colorsByTypeDef.statsBoost,
    2: colorsByTypeDef.statsBoost,
    3: colorsByTypeDef.statsBoost,
    4: colorsByTypeDef.statsBoost,
    5: colorsByTypeDef.statsBoost,
    6: colorsByTypeDef.statsBoost,
    7: colorsByTypeDef.passive,
    8: colorsByTypeDef.moveEffect,
    9: colorsByTypeDef.movePowerBoost,
    10: colorsByTypeDef.moveAccuracyBoost
  };
  let cellColor = colorsByTypeDef.syncBoost;

  if (group !== 3) {
    cellColor = colorsByTypeId[type];
  }

  if (isLocked) {
    cellColor = colorsByTypeDef.locked;
  }

  return cellColor;
};

export const renderMoveName = (moveName, abilityId) => {
  let renderedMoveName = moveName;

  if (moveName.length > 11) {
    if (shortenedMoveNameByCellId[abilityId]) {
      renderedMoveName = shortenedMoveNameByCellId[abilityId];
    }
  }

  return renderedMoveName;
};

export const addSyncLvReq = (pokemon, cell, moveName) => {
  let nameWithSyncLvRequirement;
  if (
    pokemon === 'pikachu' ||
    pokemon === 'charizard' ||
    pokemon === 'dewgong' ||
    pokemon === 'infernape' ||
    pokemon === 'haxorus' ||
    pokemon === 'kingdra' ||
    pokemon === 'metagross' ||
    pokemon === 'houndoom' ||
    pokemon === 'raichu' ||
    pokemon === 'reuniclus' ||
    pokemon === 'golisopod' ||
    pokemon === 'salazzle'
  ) {
    if (
      (cell.coords.q === 0 && cell.coords.r === 3) ||
      (cell.coords.q === 0 && cell.coords.r === -3) ||
      (cell.coords.q === 1 && cell.coords.r === -5) ||
      (cell.coords.q === 2 && cell.coords.r === -6) ||
      (cell.coords.q === -3 && cell.coords.r === -1) ||
      (cell.coords.q === -2 && cell.coords.r === -2) ||
      (cell.coords.q === 2 && cell.coords.r === 2) ||
      (cell.coords.q === 3 && cell.coords.r === 1) ||
      (cell.coords.q === -1 && cell.coords.r === 5) ||
      (cell.coords.q === -2 && cell.coords.r === 6)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
    } else if (
      (cell.coords.q === 3 && cell.coords.r === -6) ||
      (cell.coords.q === 2 && cell.coords.r === -5) ||
      (cell.coords.q === 1 && cell.coords.r === -4) ||
      (cell.coords.q === -1 && cell.coords.r === -2) ||
      (cell.coords.q === -2 && cell.coords.r === -1) ||
      (cell.coords.q === -3 && cell.coords.r === 0) ||
      (cell.coords.q === 3 && cell.coords.r === 0) ||
      (cell.coords.q === 2 && cell.coords.r === 1) ||
      (cell.coords.q === 1 && cell.coords.r === 2) ||
      (cell.coords.q === -1 && cell.coords.r === 4) ||
      (cell.coords.q === -2 && cell.coords.r === 5) ||
      (cell.coords.q === -3 && cell.coords.r === 6)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
    }
  }

  if (
    pokemon === 'torkoal' ||
    pokemon === 'vileplume' ||
    pokemon === 'palossand' ||
    pokemon === 'liepard' ||
    pokemon === 'heliolisk' ||
    pokemon === 'masquerain' ||
    pokemon === 'meowstic'
  ) {
    if (
      (cell.coords.q === 0 && cell.coords.r === 3) ||
      (cell.coords.q === 0 && cell.coords.r === -3) ||
      (cell.coords.q === 2 && cell.coords.r === -6) ||
      (cell.coords.q === 1 && cell.coords.r === -5) ||
      (cell.coords.q === -1 && cell.coords.r === -4) ||
      (cell.coords.q === -2 && cell.coords.r === -4) ||
      (cell.coords.q === 2 && cell.coords.r === 2) ||
      (cell.coords.q === 1 && cell.coords.r === 2) ||
      (cell.coords.q === -1 && cell.coords.r === 3) ||
      (cell.coords.q === -2 && cell.coords.r === 4)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
    } else if (
      (cell.coords.q === 3 && cell.coords.r === -6) ||
      (cell.coords.q === 2 && cell.coords.r === -5) ||
      (cell.coords.q === 1 && cell.coords.r === -4) ||
      (cell.coords.q === -1 && cell.coords.r === -3) ||
      (cell.coords.q === -2 && cell.coords.r === -3) ||
      (cell.coords.q === -3 && cell.coords.r === -3) ||
      (cell.coords.q === 3 && cell.coords.r === 0) ||
      (cell.coords.q === 3 && cell.coords.r === 1) ||
      (cell.coords.q === 2 && cell.coords.r === 1) ||
      (cell.coords.q === -3 && cell.coords.r === 3) ||
      (cell.coords.q === -3 && cell.coords.r === 4) ||
      (cell.coords.q === -2 && cell.coords.r === 3)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
    }
  }

  if (
    pokemon === 'serperior' ||
    pokemon === 'alakazam' ||
    pokemon === 'rotom'
  ) {
    if (
      (cell.coords.q === 0 && cell.coords.r === 3) ||
      (cell.coords.q === 0 && cell.coords.r === -3) ||
      (cell.coords.q === 2 && cell.coords.r === -6) ||
      (cell.coords.q === 1 && cell.coords.r === -5) ||
      (cell.coords.q === -1 && cell.coords.r === -3) ||
      (cell.coords.q === -3 && cell.coords.r === -2) ||
      (cell.coords.q === 2 && cell.coords.r === 4) ||
      (cell.coords.q === 1 && cell.coords.r === 4) ||
      (cell.coords.q === -1 && cell.coords.r === 4) ||
      (cell.coords.q === -3 && cell.coords.r === 5)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
    } else if (
      (cell.coords.q === 3 && cell.coords.r === -6) ||
      (cell.coords.q === 2 && cell.coords.r === -5) ||
      (cell.coords.q === 1 && cell.coords.r === -4) ||
      (cell.coords.q === -1 && cell.coords.r === -2) ||
      (cell.coords.q === -2 && cell.coords.r === -2) ||
      (cell.coords.q === -3 && cell.coords.r === -1) ||
      (cell.coords.q === 1 && cell.coords.r === 3) ||
      (cell.coords.q === 2 && cell.coords.r === 3) ||
      (cell.coords.q === 3 && cell.coords.r === 3) ||
      (cell.coords.q === -3 && cell.coords.r === 4) ||
      (cell.coords.q === -2 && cell.coords.r === 4) ||
      (cell.coords.q === -1 && cell.coords.r === 3)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
    }
  }

  if (pokemon === 'mew') {
    if (
      (cell.coords.q === 3 && cell.coords.r === -4) ||
      (cell.coords.q === 4 && cell.coords.r === -4) ||
      (cell.coords.q === 4 && cell.coords.r === -3) ||
      (cell.coords.q === 1 && cell.coords.r === 3) ||
      (cell.coords.q === 0 && cell.coords.r === 4) ||
      (cell.coords.q === -1 && cell.coords.r === 4) ||
      (cell.coords.q === -3 && cell.coords.r === -1) ||
      (cell.coords.q === -4 && cell.coords.r === 0) ||
      (cell.coords.q === -4 && cell.coords.r === 1)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
    } else if (
      (cell.coords.q === -1 && cell.coords.r === -3) ||
      (cell.coords.q === 0 && cell.coords.r === -4) ||
      (cell.coords.q === 1 && cell.coords.r === -4) ||
      (cell.coords.q === 4 && cell.coords.r === -1) ||
      (cell.coords.q === 4 && cell.coords.r === 0) ||
      (cell.coords.q === 3 && cell.coords.r === 1) ||
      (cell.coords.q === -3 && cell.coords.r === 4) ||
      (cell.coords.q === -4 && cell.coords.r === 4) ||
      (cell.coords.q === -4 && cell.coords.r === 3)
    ) {
      nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
    }
  }
  return nameWithSyncLvRequirement;
};
