module.exports = function average(...args) {
    let sum=0
    for(let i=0;i<args.length;i++)
        sum+=args[i]
    if(args.length!=0)
    return sum/args.length
};
/*
    module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };
*/