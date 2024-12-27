const key = 'legend'; // Example value for key

const r = key === 'legend' ? {
  // Object properties if the condition is true
  title: 'Legend Title',
  items: ['Item1', 'Item2', 'Item3']
} : {
  // Object properties if the condition is false
  title: 'Default Title',
  items: ['DefaultItem1', 'DefaultItem2']
};

console.log(r);
