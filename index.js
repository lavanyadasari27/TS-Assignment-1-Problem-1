var items = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "John" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Jane" },
];
var unique = function (items, property) {
    var set = new Set;
    return items.filter(function (item) { return !set.has(item[property]) && set.add(item[property]); });
};
console.log(unique(items, 'name'));
