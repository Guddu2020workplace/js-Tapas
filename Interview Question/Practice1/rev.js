/* let name=["Tapas Pattanaik"]
let s = name[0].split("")

console.log(s)

let reversearray = []

for (i= s.length - 1; i  >=0 ;i--)
{
    (reversearray.push(s[i]))
}

console.log(reversearray.join(""))*/

//duplicate char from string
let name = "Tapas Pattanaik"

let dname = []
for(i=0;i<name.length;i++)
{
   dname = name[i] + name[i]
}
console.log(dname)