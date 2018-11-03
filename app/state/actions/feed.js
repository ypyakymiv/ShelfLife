const setFocus = id => {
  return {
    type: 'SET_FOCUS',
    payload: id
  };
}

export {
  setFocus
};
