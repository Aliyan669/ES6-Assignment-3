let mobiles = [
  {
      storage: 256,
      rom: 8,
      model: "v13",
      companyName: "iPhone",
  },  
  {
    storage: 128,
    rom: 6,
    model: "F19 Pro",
    companyName: "Oppo",
  },
  {
    storage: 128,
    rom: 4,
    model: "Camon 18T",
    companyName: "Tecno",
  },
  {
    storage: 64,
    rom: 3,
    model: "C3",
    companyName: "Realme",
  },
];
let mobileName = document.getElementById("mobileName");
let model = document.getElementById("model");
let btn = document.getElementById("btn");
let view = document.getElementById("view");
console.log(mobileName)
let firstdrop = mobiles.map(function (x) {
  mobileName.innerHTML += `<option class="hello">${x.companyName}</option>`;
  return x;
});
// console.log(firstdrop )
function nested(){
  model.disabled = false;
  btn.disabled = false;
  model.innerHTML = " ";
 let a = mobiles.filter(function(x){
   if(x.companyName == mobileName.value){
    return x;
   } 
})
 a.map(function(e){
    model.innerHTML += `<option>${e.model}</option>`;
 
});
}
function search(){
  let b = mobiles.filter(function(e){ 
    if(e.model == model.value){
      return e;
    }
  })
  view.innerHTML = " ";
  b.map(function(e) {
    view.innerHTML = `<div>            
        <h2><i><b>${e.companyName} </b> </i>${e.model}</h2>
        <p><i><b> Rom : ${e.rom}</b> </i></p>
        <p><i><b> Storage : ${e.storage}</b> </i></p>
</div>`
});
}


