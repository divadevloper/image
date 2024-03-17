let names = document.getElementById('image')
let ims = ['nicki.jpg','nicki6.jpg','nicki3.jpg',]
index= 0
names.src = ims[index]
  

 function next() {
    if (index == ims.length -1) {
        index =0
    } else {
        index ++
    }
    names.src = ims[index]
 } 
 
function prev(){
    if (index==0) {
        index = ims.length -1
    } else {
        index --
    }
    names.src = ims[index]
    }
