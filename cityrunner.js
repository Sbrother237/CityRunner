(function() { "use strict";

    const TILE_SIZE = 16;
    const WORLD_HEIGHT = 144;
    const WORLD_WIDTH = 256;

    var Animation = function(frame_set, delay) {

        this.count = 0;
        this.delay = delay;
        this.frame_value = frame_set[0];
        this.frame_index = 0;
        this.frame_set = frame_set;

    };

    Animation.prototype = {
        
    }
})