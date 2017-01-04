import path from 'path';
import test from 'ava';

test('path', t => {
  t.is(path.basename('/hash.md'), 'hash.md');
});
