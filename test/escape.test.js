import test from 'ava'
import escape from '../src/escape'

test('number are not escaped', t => {
	t.is(escape(10), 10);
  t.is(escape(3.14), 3.14);
});

test('boolean are converted to true/false', t => {
  t.is(escape(true), 'true');
  t.is(escape(false), 'false');
})

test('date are converted to YYYY-mm-dd HH:ii:ss', t => {
  t.fail()
})

test('string are escaped', t => {
  t.is(escape('foo'), 'foo')
  t.is(escape('foo \''), 'foo \\\'')
})

test('objects are not supported', t => {
  t.throws(() => {
    escape({})
  })

  t.throws(() => {
    escape({dummy: 'value'})
  })
})

test('arrays are not supported', t => {
  t.throws(() => {
    escape([])
  })

  t.throws(() => {
    escape(['x', 'y'])
  })
})

test('undefined and null are converted to NULL', t => {
  t.is(escape(null), 'NULL');
  t.is(escape(undefined), 'NULL');
})