export default function matchResultType(state) {
  let result = '';
  if (state.E > 2) {
    result += 'E';
  } else {
    result += 'I';
  }
  if (state.T > 2) {
    result += 'T';
  } else {
    result += 'F';
  }
  if (state.J > 2) {
    result += 'J';
  } else {
    result += 'P';
  }
  return result;
}
