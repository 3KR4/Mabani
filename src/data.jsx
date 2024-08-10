export const design = Array.from({ length: 45 }, (_, index) => ({
  id: index + 1,
  img: require(`./img/design/${index + 1}.jpeg`),
}));

export const furniture = Array.from({ length: 27 }, (_, index) => ({
  id: index + 1,
  img: require(`./img/furniture/${index + 1}.jpeg`),
}));

export const contracting = Array.from({ length: 84 }, (_, index) => ({
  id: index + 1,
  img: require(`./img/contracting/${index + 1}.jpeg`),
}));

export const management = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  img: require(`./img/Management/${index + 1}.jpg`),
}));