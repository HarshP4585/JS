let order = function(buyer, item) {
    console.log(`${buyer} ordered ${item}`);
}

let myName = "Dummy"

// export {order, myName} // use as to change the name of exported var
export default order // only single item to export
