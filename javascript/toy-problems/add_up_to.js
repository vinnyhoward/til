// A special but very easy toy problem, meant to show and test how efficient different solutions can be.

const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  };
  return total;
}
// Time Elapsed: 1.8610480509996414 seconds seconds

const addUpToAlt = (n) => {
  return n * (n + 1) / 2;
};
// Time Elapsed: 0.00019770000129938126 seconds seconds

addUpTo(1000000000);
