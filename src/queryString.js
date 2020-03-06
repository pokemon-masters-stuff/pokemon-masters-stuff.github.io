import qs from 'query-string';

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
  const values = qs.parse(queryString, { arrayFormat: 'comma' });
  if (key === 'grid') {
    if (Array.isArray(values.grid)) {
      return values[key];
    } else {
      return values[key] ? values[key].split(',') : values[key];
    }
  } else {
    return values[key];
  }
};

export const clearQueryStringValue = () => {
  setQueryStringWithoutPageReload('');
};
