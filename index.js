
sheep = [true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true ,
    false, false, true, true];

let compteur = 0;

  function findSheep() {
      this.sheep.forEach(element =>{
        if( element !== null && element !== undefined){
          if(element === true) {
            compteur ++
          }
        }
      })
      console.log(compteur + ' moutons');
  }
  function main(){
    findSheep();
  }

  main();

