var mind = require('hivemind');
var counter_for_units = require('counter');

base = ['Main'];

count_units=function()
{
  size = 0;

  for(var element in Game.creeps)
  {
    size = size + 1;
  }

  return size;
}

construct = function( arr, unitSize )
{
  for(idx = 0; idx < arr.length; idx++)
  {
    current = arr[idx];

    if( unitSize < 1 )
    {
      mind.make_miner(current, counter_for_units.get().toString());
      counter_for_units.increment();
    }
  }
}

refresh = function()
{

}

execute = function()
{
  for(var element in Game.creeps)
  {
    current = Game.creeps[element];

    if(current.store[RESOURCE_ENERGY] < current.store.getCapacity() )
    {
      var sources = current.room.find(FIND_SOURCES);

      if(current.harvest(sources[0]) == ERR_NOT_IN_RANGE)
      {
          current.moveTo(sources[0]);
      }
    }
  }

  if( current.store.getCapacity() == current.store[RESOURCE_ENERGY] )
  {
    current_controller= current.room.controller;
    current.moveTo(current_controller);
    current.upgradeController(current_controller);  

  }
}

clear = function()
{

}



ai_loop = function()
{
    counter_for_units.init();

    bases = [];

    for( var idx = 0; idx < base.length; idx++ )
    {
        bases.push( Game.spawns[ base[ idx ] ] );
    }

    unitSize = count_units();

    construct( bases, unitSize );

    refresh();
    execute();
    clear();
}


ai_loop();
