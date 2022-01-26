/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('counter');
 * mod.thing == 'a thing'; // true
 */

module.exports =
{
  init()
  {
    mem = Memory.unitCapacity;

    if( mem === undefined )
    {
        Memory.unitCapacity = 0;
    }
  },

  set( number )
  {
    Memory.unitCapacity = number;
  },

  get()
  {
    return retrieve();
  },

  increase(idx)
  {
    current = retrieve();
    Memory.unitCapacity = calc_increase(current, idx);

  },

  increment()
  {
    current = retrieve();

    Memory.unitCapacity = calc_increase(current, 1);
  },

  decrease(idx)
  {
      current = retrieve();
      Memory.unitCapacity = calc_decrease(current, idx);
  },

  decrement()
  {
    current = retrieve();
    Memory.unitCapacity = calc_decrease(current, 1);
  }

};

calc_increase = function(x, y)
{
  var ret = x + y;
  return ret;
}


calc_decrease = function(x, y)
{
  var ret = x - y;
  return ret;
}

retrieve = function()
{
    value = JSON.parse(Memory.unitCapacity);
    return value;
}
