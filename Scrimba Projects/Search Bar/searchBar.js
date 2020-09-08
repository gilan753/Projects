/*
    Task: Create an event listener for 'keyup' for our input field and access the event's target and value
    
    1. Get our input field by it's ID of 'usernameInput' and create an event listener for 'keyup'
    2. Create a let called 'username' that stores the 'event.target.value' on the element 'usernameInput'
    3. console.log out the 'username'
    4. Once we have done console.log(username), go ahead and add 'toLowerCase' to the end of the assigned let, 
        so for example: 'let username = event.target.value.toLowerCase()'
    5. console.log out the 'username' again typing in all caps and you will see it's lowercase!
    
    Helpers
    - The addEventListener() method attaches an event handler to the specified element
    - addEventListener() has a second parameter of 'function', which gives us an 'event', which inside has 
        lots of properties and methods
    - We can use the property of 'target' which returns the element that triggered the event
    - The 'event.target' has another property called 'value', so 'event.target.value' which in the case of 
        our input box, gives us the value the user typed in!
    - Adding the method 'toLowerCase()' will lowercase your value!
*/
// document.getElementById("usernameInput").addEventListener("keyup", function(event) {
//     let username = event.target.value.toLowerCase();
//     console.log(username);
// })



/*
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works
*/
/*
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of classname 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/
/*
    Task: Loop over all our names
    1. Create a new for loop with a incremental counter, called 'counter'
    2. Make sure the counter is less than the allNamesDOMCollection.length in the loop conditional
    3. Declare a const called 'currentName' and store the textContext
    4. Make sure the 'currentName' is lowercase
    5. Log out the 'currentName' so we can see all the names from the loop!
*/
/*
    Task: Comparing the search query vs. the DOM names
    1. Create a conditional that checks if currentName is equal to the user's search query!
    2. If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' to be 
        a block element
    3. If our conditional falls into the else, we have no match! So set the display style to 'none'
    
    Helpers: use the methods 'includes' for objective 1
    - The includes() method determines whether one string may be found within another string, returning 
        true or false as appropriate.
*/
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = "block";
        } else {
            allNamesDOMCollection[i].style.display = "none";
        }
    }
})

