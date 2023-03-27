import Square from '../square';

test('Square class correctly instantiate a new square', () => {
  const square = new Square(1, 2);
  expect(square).toEqual({
    x: 1,
    y: 2,
    coordonates: [1, 2],
    shipReference: null,
    attacked: false,
  });
});

test('shipReference attribute can be modified correctly', () => {
  const square = new Square(1, 2);
  expect(square.shipReference).toBeNull();
  square.shipReference = {};
  expect(square.shipReference).toEqual({});
});

test('attack method correctly change the attacked attribute of a square', () => {
  const square = new Square(1, 2);
  expect(square.attacked).toBe(false);
  square.attack();
  expect(square.attacked).toBe(true);
});
