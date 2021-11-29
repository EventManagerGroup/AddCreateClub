
function GetItemById(data, id) {
    // filter array down to only the item that has the id
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter
    var ret = data.filter(function (item) {
        return item.id === id;
    });

    // Return the first item from the filtered array
    // returns undefined if item was not found
    return ret[0];
}

export default GetItemByID;
