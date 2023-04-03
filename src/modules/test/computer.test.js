import Computer from '../computer';
import Player from '../player';

test('Computer is a subclass of Player', () => {
  const computer = new Computer();
  expect(computer instanceof Player).toBe(true);
});
