import qs from 'query-string';

const setQueryStringWithoutPageReload = (qsValue) => {
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
  const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const values = qs.parse(queryString, { arrayFormat: 'comma' });
  if (key === 'grid') {
    if (base64regex.test(values.grid)) {
      let encoded = values.grid;
      let str = window.atob(encoded);
      let len = str.length;
      let decodedGridArray = new Array(len);
      for (let i = 0; i < len; i++) {
        decodedGridArray[i] = str.charCodeAt(i);
      }
      return decodedGridArray;
    } else {
      if (Array.isArray(values.grid)) {
        return values[key];
      } else {
        return values[key] ? values[key].split(',') : values[key];
      }
    }
  } else {
    return values[key];
  }
};

export const clearQueryStringValue = () => {
  setQueryStringWithoutPageReload('');
};
