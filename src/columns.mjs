let columns = [
  {
    label: 'Magasin',
    idx: 0,
    type: 'String',
  },
  {
    label: 'DV',
    idx: 1,
    type: 'String',
  },
  {
    label: 'Région',
    idx: 2,
    type: 'String',
  },
  {
    label: 'Iris',
    idx: 3,
    type: 'String',
  },
  {
    label: 'Département',
    idx: 4,
    type: 'String',
  },
  {
    label: 'Nom de la commune',
    idx: 5,
    type: 'String',
  },
  {
    label: "Nom de l'Iris",
    idx: 6,
    type: 'String',
  },
  {
    label: 'Magasin2',
    idx: 7,
    type: 'String',
  },
  {
    label: 'DV3',
    idx: 8,
    type: 'String',
  },
  {
    label: 'Région4',
    idx: 9,
    type: 'String',
  },
  {
    label: 'Nb RP occupées par des propriétaires',
    idx: 10,
    type: 'Number',
  },
  {
    label: 'Nb de ménage',
    idx: 11,
    type: 'Number',
  },
  {
    label: 'Nombre de chantier > 1000€',
    idx: 12,
    type: 'Number',
  },
  {
    label: 'CA    chantier > 1000€',
    idx: 13,
    type: 'Number',
  },
];

const convert_label = label => {
  //return label.replace(/[^\x20-\x7E]/g, '').replace(/ /g, '_');
  //return label.replace(/[^a-zA-Z0-9]/g, '');
  //return label.replace(/[^a-zA-Z0-9]/g, '_').replace(/_{2,}/g, '_');
  return label
    .substr(0, 24)
    .trim()
    .replace(/[^\w]|_/g, '_')
    .replace(/_{2,}/g, '_')
    .replace(/_$/, '');
};

columns.forEach((c, i) => {
  console.log(`Column ${i} : ${c.label} => ${convert_label(c.label)}`);
});
debugger;
