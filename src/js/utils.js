export function array_to_object(arr) {
  return arr.reduce((result, obj) => {
    const key = Object.values(obj)[0];
    const value = Object.values(obj)[1];
    result[key] = value;
    return result;
  }, {});
}