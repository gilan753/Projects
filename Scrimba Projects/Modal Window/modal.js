/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/

/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/

/**
 * Adds the event listener for opening the modal
 */
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})

/**
 * Adds the event listener for closing the modal
 */
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})