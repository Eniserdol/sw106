class Person{
    constructor(name, age){
        this.name =name
        this.age = age
        this.photos =[]
        this.likes=[]
    }
    greet(person){
    console.log("Hello, "+ person.name +  " this is " + this.name)
}

    addPhoto(photo){
        this.photos.push(photo)
    }
likePhoto(photo){
    this.likes.push(photo)
    photo.likedBy.push(this)
}

}

class Photo{
    constructor(filename){
        this.filename = filename
        this.likedBy =[]
    }
}

const mihri = new Person("mihri", 35)
const steve = new Person("steve",21 )
const armagan = new Person("armagan",36)
const eli = new Person("eli",34)


const photo  = new Photo("berlin.jpg")

steve.addPhoto(photo)
mihri .likePhoto(photo)
//console.log(steve,steve.photos[0].likedBy)

console.log(mihri.likes[0].likedBy[0].likes[0].filename)

//console.log(mihri.greet(steve))
//console.log(steve.greet(armagan))
