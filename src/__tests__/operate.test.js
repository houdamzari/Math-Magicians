import operate from '../logic/operate';

const obj = {
  test1: 3,
  test2: 4,
  test3: 2,
  test4: 7,
};

describe(' calculation test', () => {
  test('operate function return 7', () => {
    expect(Number(operate(obj.test1, obj.test2, '+'))).toBe(7);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.test4, obj.test2, '-'))).toBe(3);
  });
  test('operate function should return 12', () => {
    expect(Number(operate(obj.test1, obj.test2, 'x'))).toBe(12);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.test2, obj.test3, '÷'))).toBe(2);
  });
});
