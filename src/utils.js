export const prepareJsonForTable = (json) =>
  Object.keys(json).map((el, index) => ({
    id: index,
    key: el,
    value: json[el] ?? '-',
  }));
