/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('hivemind');
 * mod.thing == 'a thing'; // true
 */

module.exports =
{
  make_miner( base, id )
  {
    creep = base.spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], id);
    
  }


};
