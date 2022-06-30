const incomeData = ['Fire', 'Air', '', 'Water', false];

const state = {
  stateString: '',
  stateObject: {},
};

const transformToString = (data, separator = ' ') => {
  return data.filter(Boolean).join(separator);
};

const transformToObject = (data) => {
  return data.reduce((acc, value) => {
    if (Boolean(value)) {
      acc[value] = value;
    }

    return acc;
  }, {});
};

state.stateString = transformToString(incomeData);
state.stateObject = transformToObject(incomeData);

console.log(state);