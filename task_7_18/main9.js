// task 9

function extractKey (array , key){

    let extractKey =  array.map ( (item ) => item [key]   );
    return extractKey;
}
const values = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

console.log(extractKey(values, 'name'));