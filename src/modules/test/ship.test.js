import Ship from '../ship';

test('Ship class correctly instantiate a new instance', () => {
  const ship = new Ship(2, 'horizontal', 'ship1');
  expect(ship).toBeInstanceOf(Ship);
  expect(ship).toEqual({
    hits: 0,
    position: [],
    length: 2,
    orientation: 'horizontal',
    name: 'ship1',
  });
});

test('calling hit method on ship instance correclty increases its hits by one', () => {
  const ship = new Ship(2, 'vertical');
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('sinking ship instance if hit method has been called at least as many times as ship length', () => {
  const ship = new Ship(1, 'horizontal', 'ship');
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('ship instance is not sunk if hit method has not been called as many times as ship length', () => {
  const ship = new Ship(2, 'vertical', 'ship');
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test('isPlaced method return true if ship position s array is not empty', () => {
  const ship = new Ship(2, 'vertical', 'ship');
  expect(ship.isPlaced()).toBe(false);
  ship.position = [[1, 1]];
  expect(ship.isPlaced()).toBe(true);
});

test('calculatePosition method should return an array of coordinates pair representing the ship on the gameboard', () => {
  const ship1 = new Ship(2, 'horizontal', 'ship1');
  ship1.position = ship1.calculatePosition([1, 1]);
  expect(ship1.position).toEqual([
    [1, 1],
    [2, 1],
  ]);
  const ship2 = new Ship(3, 'vertical');
  ship2.position = ship2.calculatePosition([3, 3]);
  expect(ship2.position).toEqual([
    [3, 3],
    [3, 4],
    [3, 5],
  ]);
});

test('setPosition method should set the position attribute of the ship instance', () => {
  const ship = new Ship(2, 'horizontal', 'ship');
  ship.setPosition([
    [1, 1],
    [2, 1],
  ]);
  expect(ship.position).toEqual([
    [1, 1],
    [2, 1],
  ]);
});

test('setOrientationRandomly method should set the orientation attribute of the ship instance to either horizontal or vertical randomly', () => {
  const ship = new Ship(2, 'horizontal', 'ship');
  ship.setOrientationRandomly();
  expect(['horizontal', 'vertical']).toContain(ship.orientation);
});
