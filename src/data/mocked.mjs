export const data1 = [
  { a: 'riri', b: 1, c: 'd' },
  { a: 'fifi', b: 2, c: 'd' },
  { a: 'loulou', b: 3, c: 'd' },
  { a: 'donald', b: 3, e: '1' },
];

export const data2 = [
  { a: 'riri', z: 5 },
  { a: 'loulou', z: 6 },
  { a: 'picsou', z: 0 },
  { a: 'donald', z: 2 },
];

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateData = (nb, extraFields) => {
  let arr = [];
  extraFields = extraFields || [];
  let setUnique = new Set();
  for (let i = 0; i < nb; i++) {
    const aname = `name_${randomNumber(0, nb)}`;
    if (!setUnique.has(aname)) {
      let elt = {
        name: aname,
        a: `a_${i}`,
      };
      extraFields.forEach(f => {
        elt[f] = `f_${randomNumber(0, 100)}`;
      });
      arr.push(elt);
      setUnique.add(aname);
    }
  }
  return arr;
};
