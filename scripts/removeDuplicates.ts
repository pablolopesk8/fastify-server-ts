const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 1, name: 'Item 1 Duplicate' },
  { id: 3, name: 'Item 3' },
  { id: 2, name: 'Item 2 Duplicate' },
  { id: 2, name: 'Item 2 Duplicate' },
  { id: 2, name: 'Item 2 Duplicate' },
  { id: 1, name: 'Item 1 Duplicate' },
  { id: 2, name: 'Item 2 Duplicate' },
];

const duplicates = new Set<string | number>();

const uniqueItems = items.filter((item) => {
  const key = item.id;

  if (duplicates.has(key)) return false;

  duplicates.add(key);
  return true;
});

console.log(uniqueItems);
