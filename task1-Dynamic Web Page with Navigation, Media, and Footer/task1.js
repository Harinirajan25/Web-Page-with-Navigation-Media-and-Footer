



let header1 = document.createElement("header")
document.body.append(header1)
console.log(header1)
header1.textContent = "Header"
header1.style.border = "1px solid black"
header1.style.backgroundColor = "#B3F6FF"
header1.style.padding = "20px"
header1.style.textAlign = "center"
header1.style.fontSize = "40px"


let div = document.createElement("div")
document.body.appendChild(div)

let nav = document.createElement("nav")
document.body.appendChild(nav)
console.log(nav)
nav.style.border = "1px solid black"
nav.style.backgroundColor = "#C9D4B5"
nav.style.padding = "20px"
nav.style.textAlign = "center"
nav.style.fontSize = "25px"
nav.style.marginTop = "5px"
nav.style.wordSpacing = "300px"
// nav.style.

// header1.style.fontSize="30px"

let a = document.createElement("a")
nav.appendChild(a)
a.textContent = " Home Contact Login Register Help"
a.style.wordSpacing = "100px"
a.style.textDecoration = "none"
a.setAttribute("href", "#")



let main = document.createElement("main")
document.body.appendChild(main)
console.log(main)
main.style.display = "flex"
main.style.border = "1px solid black"
main.style.marginTop = "5px"
main.style.height = "65vh"

let m = document.createElement("aside")
main.appendChild(m)
m.style.border = "1px solid black"
// m.style.marginTop="0px"
// m.style.marginRight="1000px"
// m.style.marginLeft="0px"
m.style.height = "100vh"
m.style.width = "50%"
let img = document.createElement("img")
m.appendChild(img)
img.src = "https://images.pexels.com/photos/28898232/pexels-photo-28898232/free-photo-of-palau-de-les-arts-opera-house-in-valencia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
img.style.width = "50vw"
img.style.height = "99%"



let m1 = document.createElement("section")
main.appendChild(m1)
m1.style.border = "1px solid black"
m.style.height = "100%"
m1.style.height = "100%"
let ifra = document.createElement("iframe")
m1.appendChild(ifra)
ifra.src = "https://www.youtube.com/embed/m3MLYRgIb6k?si=FvVwS4n7plqdnM40"
ifra.style.width = "100%"
ifra.style.height = "99%"
m.style.width = "50vw"
// m1.style.marginTop="40px"
// m1.style.marginBottom="60px"
// m1.style.marginRight="100px"
// m1.style.marginLeft="20px"
m1.style.width = "50vw"

let footer = document.createElement("footer")
document.body.appendChild(footer)
let h1 = document.createElement("h1")
footer.appendChild(h1)
console.log(footer)
h1.textContent = "Thank You"
footer.style.border = "1px solid black"
footer.style.backgroundColor = "#FADBB9"
// footer.style.padding = "30px"
footer.style.textAlign = "center"
// footer.style.fontSize = "20px"
footer.style.marginTop = "15px"
footer.style.wordSpacing = "3px"