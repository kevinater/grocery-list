
// Creating a promise object to load JSON data
let myReq = new Request("./groceries.json");

function displayData() {
    
    // Initialized fetch request and converted response into JSON object
    fetch(myReq)
    .then(function(resp) {
        return resp.json();
    })

    // Looped through each item and changed text based on class name.
    .then(function(data) {
        for (let i=0; i<data.length; i++) {
            document.getElementsByClassName('item-quantity')[i].innerHTML = 'QTY: ' + data[i].qty;
            document.getElementsByClassName('item-name')[i].innerHTML = data[i].item;
            document.getElementsByClassName('item-information')[i].innerHTML = data[i].brand + ' ' + data[i].type;
            document.getElementsByClassName('item-type')[i].innerHTML = data[i].category.toUpperCase(); 
        }
        

        })
};
