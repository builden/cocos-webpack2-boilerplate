import test from 'ava';
import paths from '../../config/paths';

test('paths', t => {
  t.true(Object.keys(paths).length > 0);
});
