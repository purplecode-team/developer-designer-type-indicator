export default function convertResultToName(result) {
  if (result === 'EFJ') {
    return 'fox';
  }
  if (result === 'EFP') {
    return 'quokka';
  }
  if (result === 'ETJ') {
    return 'pelican';
  }
  if (result === 'ETP') {
    return 'monkey';
  }
  if (result === 'IFJ') {
    return 'squirrel';
  }
  if (result === 'IFP') {
    return 'sloth';
  }
  if (result === 'ITJ') {
    return 'bear';
  }
  if (result === 'ITP') {
    return 'cat';
  }
  return '';
}
