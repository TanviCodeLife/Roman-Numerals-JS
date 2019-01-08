export function numChecker(num) {
  if (num.match(/[^0-9]/g)) {
    console.log('fail');
    return false;
  } else return true;
}
