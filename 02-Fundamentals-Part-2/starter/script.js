// const metallica = {
//     vocals: "James",
//     guitar: "Kirk",
//     bass: "Rob",
//     drumms: "Lars"
// }

// console.log(metallica)
// console.log(metallica.bass)
// console.log(metallica['guitar'])


// const favouriteMetallicaAlbum = prompt("What is you favourite Metallica Album?");
// console.log(favouriteMetallicaAlbum)

const metallica = {
    vocals: "James",
    guitar: "Kirk",
    bass: "Rob",
    drumms: "Lars",
    foundationYear: 1983,
    yearsOnTheRoad: function() {        
        return new Date().getFullYear() - this.foundationYear;
    }
}

console.log(metallica.yearsOnTheRoad())
