// Both var a and function b will get attached to the global object, because they are not inside another function.
b()
console.log(a)

var a = 'Hello world'
function b() {
    console.log('Called b!')
}

// Even though we're calling 'b' before we have written the function b, the console will still log 'Called b!'. Furthermore, when we log 'a', which has not been defined, the console will log 'undefined'. That's not surprising, EXCEPT that if we remove var a from the code altogether, the console will log an error when we try to log the value of a. Intriguing!

