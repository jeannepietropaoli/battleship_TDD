import Ship from '../ship';

test('Ship class correctly instantiate a new instance', () => {
  const ship = new Ship([
    [1, 1],
    [2, 1],
  ]);
  expect(ship).toBeInstanceOf(Ship);
  expect(ship).toEqual({
    hits: 0,
    sunk: false,
    position: [
      [1, 1],
      [2, 1],
    ],
    length: 2,
  });
});
