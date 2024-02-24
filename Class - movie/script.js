//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// * title, which is a String representing the title of the movie
// * studio, which is a String representing the studio that made the movie
// * rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie { // a. Creating a class Movie
    constructor(title, studio, rating)  // Creating constructor
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (typeof this.rating === 'undefined')  // b. If rating of movie is not given, take default rating as 'PG'
        {
            this.rating = 'PG'
            }
    }
}
let movie1 = new Movie('LEO', 'Seven Screen Studio', 'U/A')
let movie2 = new Movie('JAILER', 'Sun Pictures', 'U/A')
let movie3 = new Movie('GOOD NIGHT', 'Million Dollar Studio and MRP Entertainment')
let movie4 = new Movie('THUNIVU', 'Bayview Projects LLP and ZEE Studios','U/A')
let movie5 = new Movie('PONNIYIN SELVAN 2', 'Madras Talkies and Lyca Production')
console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);

// c. Method to get title list if rating = PG
function getPG (mov)
{
    let movieHas_PG = []  // New array for storing movie list having rating of "PG"
    for (let i = 0; i < mov.length; i++)
    {
        if (mov[i].rating == 'PG')
        {
            movieHas_PG.push(mov[i].title)
            }
    }
    return movieHas_PG
}

let arr = [movie1, movie2, movie3, movie4, movie5] // checking all the instances
console.log(getPG(arr))

// d. creating instance of class Movie

let movie6 = new Movie('Casino Royale', 'Eon Productions', 'PG13')
console.log(movie6)