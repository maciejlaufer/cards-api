import cardRouter from '../card.router';

describe('card router', () => {
  test('has get method', () => {
    const routes = [{ path: '/', method: 'get' }];

    routes.forEach(route => {
      const match = cardRouter.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      );

      expect(match).toBeTruthy();
    });
  });
});
