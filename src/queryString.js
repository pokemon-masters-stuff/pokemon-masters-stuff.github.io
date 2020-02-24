import qs from 'query-string';
//TODO: refactor.

const setQueryStringWithoutPageReload = qsValue => {
  const newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    qsValue;
  window.history.pushState({ path: newurl }, '', newurl);
};

export const getQueryStringValue = (
  key,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  return values[key];
};

export const setQueryStringValue = (
  key,
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  const newQsValue = qs.stringify({
    ...values,
    [key]: value
  });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

export const getGridQueryStringValue = (
  key, //grid
  queryString = window.location.search
) => {
  const values = qs.parse(queryString, { arrayFormat: 'comma' }); // browser always converts comma to %2C
  return values[key] ? values[key].split(',') : values[key];
};

export const setGridQueryStringValue = (
  key, //grid
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString, { arrayFormat: 'comma' });
  let gridArray = values.grid
    ? Array.isArray(values.grid)
      ? values.grid
      : values.grid.split(' ')
    : [];
  gridArray.push(value);

  const newQsValue = qs.stringify(
    {
      ...values,
      grid: gridArray
    },
    { arrayFormat: 'comma' }
  );
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

export const filterGridQueryStringValue = (
  key, //grid
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString, { arrayFormat: 'comma' });

  let gridArray = values.grid
    ? Array.isArray(values.grid)
      ? values.grid
      : values.grid.split(',')
    : [];
  gridArray = gridArray.filter(element => {
    return element !== value;
  });
  const newQsValue = qs.stringify(
    {
      ...values,
      grid: gridArray
    },
    { arrayFormat: 'comma' }
  );
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};
