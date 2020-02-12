
sheep = [ 10, 17, 1, 15, 10, 22, 17, 1, 17, 17];
let compteur = 0;

  function findSheep(sheep) {
      this.sheep.forEach(element =>{
        if( sheep !== null && sheep !== undefined){
          if(element === sheep) {
            compteur ++
          }
        }
      })
      console.log(compteur + ' moutons');
  }

  function main(){
    findSheep(17);
  }

  main();

