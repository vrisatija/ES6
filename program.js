function fun(a)
{
    console.log(`Hello, ${a}!`)
    const aa=a.toLowerCase(a)
    console.log(`Your name lowercased is \"${aa}\".`)
}
var a=process.argv[2]
fun(a)