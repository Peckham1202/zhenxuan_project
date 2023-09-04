export function getTimeInfo() {
  const hour = new Date().getHours();

  if (hour <= 6) {
    return '凌晨';
  } else if (hour <= 11) {
    return '早上';
  } else if (hour <= 14) {
    return '中午';
  } else if (hour <= 18) {
    return '下午';
  } else {
    return '晚上';
  }
}
