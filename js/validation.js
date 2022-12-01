export function validatePercentage(value) {
  // A regex to validate numbers between 0 and 100
  const regex = /^(100|[1-9]?\d)$/;
  return regex.test(value);
}