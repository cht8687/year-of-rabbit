var yearOfRabbit = require('./');
var test = require('tape');

test('it should check if a year is year of rabbit', function(t) {
  t.plan(4);
  t.equal(yearOfRabbit(1987), true, "1987is year of rabbit");
  t.equal(yearOfRabbit(1988), false, "1988 is not year of rabbit");
  t.equal(yearOfRabbit(new Date(1999, 0)), true, "1999 is year of rabbit");
  t.equal(typeof yearOfRabbit() === 'boolean', true);
});
