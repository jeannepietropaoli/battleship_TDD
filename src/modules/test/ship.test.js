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

test('calling hit method on ship instance correclty increase its hits by one', () => {
  const ship = new Ship(2, 'vertical');
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('sinking ship instance if hit method has been called at least as many times as ship length', () => {
  const ship = new Ship([[1, 1]]);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
