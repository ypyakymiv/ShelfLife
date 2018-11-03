const UPDATE = 'credentials_update';

const update = (credentials) => {
  return {
    type: UPDATE,
    data: credentials
  };
}

export { UPDATE, update };
