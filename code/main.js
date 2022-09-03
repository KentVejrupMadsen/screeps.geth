const Framework = require( './framework.js' );


// Entry for the loop
module.exports = 
{
    entry()
    {
        let framework = new Framework();

        framework.setup();

        framework.remember();
        framework.execute();
        
        framework.memories();
    }
}