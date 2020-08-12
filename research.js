
// mot :est le caractere rechercher

const research = (myString, mot) =>{
    for( let i=0;i<myString.length;i++){
        if(myString[i] == mot ){
        console.log(true)
        console.log(myString.indexOf(i))
        }
        else
            break
    }
}