const items:{id:number, name:string}[]=[
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    { id: 3, name: "John" }, 
    { id: 4, name: "Bob" },
    { id: 5, name: "Jane"},
    ];
const unique= (items,property) => {
    const set = new Set;
    return items.filter(item=> !set.has(item[property]) && set.add(item[property]));
};

console.log(unique(items,'name'));
