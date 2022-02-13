module.exports = function  makeImportant(str, number=str.length){
    let ans=str
    for(let i=0;i<number;i++)
    {
        ans+='!'
    }
    return ans
};
/*
module.exports =(string, bangs = string.length) => string + "!".repeat(bangs);
*/