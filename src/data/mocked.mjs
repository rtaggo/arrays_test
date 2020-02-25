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

export const kpis_stats_reg = {
  label: 'Nb RP occupées par des propriétaires',
  idx: 0,
  count: 3685,
  total: 1234320,
  avg: 308580,
  values: [
    {
      key: 'RV0003 - SUD EST',
      value: {
        count: 124,
        total: 66582,
        avg: 536.9516129032259,
      },
    },
    {
      key: 'RV0016 - OUEST',
      value: {
        count: 1055,
        total: 385508,
        avg: 365.41042654028433,
      },
    },
    {
      key: 'RV0018 - NORD',
      value: {
        count: 1909,
        total: 600444,
        avg: 314.53326348873753,
      },
    },
    {
      key: '(vide)',
      value: {
        count: 597,
        total: 181786,
        avg: 304.49916247906197,
      },
    },
  ],
};

export const kpis_stats_dv = {
  label: 'Nb RP occupées par des propriétaires',
  idx: 0,
  count: 3685,
  total: 1234320,
  avg: 154290,
  values: [
    {
      key: 'DV0018 - PROVENCE',
      value: {
        count: 124,
        total: 66582,
        avg: 536.9516129032259,
      },
    },
    {
      key: 'DV0056 - CHAMPAGNE',
      value: {
        count: 416,
        total: 62943,
        avg: 151.30528846153845,
      },
    },
    {
      key: 'DV0058 - GARONNE',
      value: {
        count: 794,
        total: 295172,
        avg: 371.7531486146096,
      },
    },
    {
      key: 'DV0064 - PARIS OUEST',
      value: {
        count: 261,
        total: 90336,
        avg: 346.11494252873564,
      },
    },
    {
      key: 'DV0068 - IDF NORD',
      value: {
        count: 545,
        total: 184822,
        avg: 339.1229357798165,
      },
    },
    {
      key: 'DV0073 - PARIS EST',
      value: {
        count: 360,
        total: 149102,
        avg: 414.1722222222222,
      },
    },
    {
      key: 'DV0075 - IDF SUD EST',
      value: {
        count: 588,
        total: 203577,
        avg: 346.21938775510205,
      },
    },
    {
      key: '(vide)',
      value: {
        count: 597,
        total: 181786,
        avg: 304.49916247906197,
      },
    },
  ],
};

export const kpis_stats_mag = {
  label: 'Nb RP occupées par des propriétaires',
  idx: 0,
  count: 3685,
  total: 1234320,
  avg: 88165.71428571429,
  values: [
    {
      key: 'MAG0006 - THIAIS',
      value: {
        count: 197,
        total: 91727,
        avg: 465.61928934010155,
      },
    },
    {
      key: 'MAG0027 - CHANTILLY',
      value: {
        count: 381,
        total: 117492,
        avg: 308.37795275590554,
      },
    },
    {
      key: 'MAG0029 - MEAUX',
      value: {
        count: 164,
        total: 67330,
        avg: 410.5487804878049,
      },
    },
    {
      key: 'MAG0051 - MARIGNANE ',
      value: {
        count: 124,
        total: 66582,
        avg: 536.9516129032259,
      },
    },
    {
      key: 'MAG0070 - PARIS ROME',
      value: {
        count: 261,
        total: 90336,
        avg: 346.11494252873564,
      },
    },
    {
      key: 'MAG0157 - AUXERRE',
      value: {
        count: 299,
        total: 59057,
        avg: 197.51505016722408,
      },
    },
    {
      key: 'MAG0159 - CHAMPIGNY',
      value: {
        count: 146,
        total: 84688,
        avg: 580.054794520548,
      },
    },
    {
      key: 'MAG0181 - SOISSONS',
      value: {
        count: 416,
        total: 62943,
        avg: 151.30528846153845,
      },
    },
    {
      key: 'MAG0311 - TOULOUSE REVEL',
      value: {
        count: 398,
        total: 117214,
        avg: 294.5075376884422,
      },
    },
    {
      key: 'MAG0313 - TOULOUSE PONTS JUMEAUX',
      value: {
        count: 249,
        total: 89902,
        avg: 361.0522088353414,
      },
    },
    {
      key: 'MAG0357 - PARIS BLANQUI',
      value: {
        count: 163,
        total: 57375,
        avg: 351.99386503067484,
      },
    },
    {
      key: 'MAG0360 - NEMOURS',
      value: {
        count: 143,
        total: 59832,
        avg: 418.4055944055944,
      },
    },
    {
      key: 'MAG0363 - TOULOUSE NORD',
      value: {
        count: 147,
        total: 88056,
        avg: 599.0204081632653,
      },
    },
    {
      key: 'ZB - Zone Blanche',
      value: {
        count: 597,
        total: 181786,
        avg: 304.49916247906197,
      },
    },
  ],
};
