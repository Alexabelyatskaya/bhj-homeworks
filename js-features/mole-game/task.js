'use strict'

  let playing = true,
    activeHole = 1,
    hits = 0,
    misses = 0;

    const getHole = function(index) { 
      return document.getElementById(`hole${index}`) 
    },
    deactivateHole = function(index) {
      getHole( index ).className = 'hole'
    },

    activateHole =  function(index) {
      getHole( index ).className = 'hole hole_has-mole'
    }, 
    next = function () { 
       setTimeout( function() {
          if ( !playing ) {
            return;
          }
          deactivateHole( activeHole );
          activeHole = Math.floor( 1 + Math.random() * 9 );
          activateHole(activeHole);
          next();
    }, 800 ); 
  }

    for (let i = 1; i <= 9; i++) {
      getHole(i).onclick = function (e) {
        if (!playing) {
          return;
        }
        if (e.target.className == 'hole hole_has-mole') {
          hits++;
          document.getElementById("dead").textContent = hits;
        } else { 
          misses++; 
          document.getElementById("lost").textContent = misses;
          }
        if (hits >= 10) {
          alert("Победа!");
          playing = false;
        }

        if (misses >= 5) {
          alert("Поражение!");
          playing = false;
        }
      }
  }

  next();