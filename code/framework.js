const Cache = require( './cache/store.js' );

class Framework
{
    constructor()
    {
        this.cache = new Cache();
    }

    setup()
    {

    }

    remember()
    {
        this.cache.load();   
    }

    execute()
    {
        
    }

    memories()
    {
        this.cache.save();
    }
}


module.exports=Framework;