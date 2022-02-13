var inputs = process.argv.slice(2);
let result=(inputs)=> inputs.map(n=>n.charAt(0))
let r=result(inputs)
r=r.join('')
console.log(`[${inputs}] becomes \"${r}\"`)
/*  var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);

    console.log(`[${inputs}] becomes "${result}"`);
    */