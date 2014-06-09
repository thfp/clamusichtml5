/**
 * @author THFP
 * @data 2014/06/09
 */

/**
 * Initialize function
 */
function init() {
  videojs("test_video", {}, function(){
    // Player (this) is initialized and ready.
  });
}

// Execute once DOM loaded
document.addEventListener("DOMContentLoaded", init, false);