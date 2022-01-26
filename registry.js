/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('registry');
 * mod.thing == 'a thing'; // true
 */

module.exports = 
{
    index_unit( unit_name )
    {
        if( is_empty() )
        {
            Memory.unit_index = [unit_name];
        }
        else 
        {
            append( unit_name );
        }
    },
    
    index_clear()
    {
        Memory.unit_index = [];
    }

};

function registry_exist()
{
    try
    {
        mem = Memory.unit_index;
        access = Object.keys( mem ).length;
    }
    catch(error)
    {
        return false;
    }
    
    return true;
}

function is_empty()
{
    if( registry_exist() == false )
    {
        Memory.unit_index = [];
    }
        
    if( Object.keys( Memory.unit_index ).length === 0 )
    {
            return true;
    }
    
    
    
    return false;
}

function append( unit_name )
{
    arr = Memory.unit_index;
    console.log(arr);
    arr.push(unit_name);
    
    Memory.unit_index = arr;
    
}