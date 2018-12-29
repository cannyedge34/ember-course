import { helper } from '@ember/component/helper';

export function renameNumber(params/*, hash*/) {
  if (!params) {
    return ''
  };
  const [num] = params
  if (parseInt(num, 10) > 1000) {
    return (num/1000).toFixed(1) + 'K'
  } else {
    return `${num}`
  }
}

export default helper(renameNumber);
