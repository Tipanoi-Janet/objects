//You are working on a web application for a car rental company. They want to keep track
//of their car inventory and rental information. Your task is to create a JavaScript class or
//function constructor for representing cars in their inventory and another one for
//representing rental information.
Requirements:
//1 Create a Car class or function constructor that has the following properties:
//a. make (string): The make of the car, e.g., "Toyota".
//b. model (string): The model of the car, e.g., "Camry".
//c. year (number): The year the car was manufactured, e.g., 2020.
//d. isAvailable (boolean): Indicates if the car is currently available for rent.
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
//false, false to true)
class car{

    constructor(make,model,year,isavailable){
        this.make=make;("toyota")
        this.model=model;("camry")
        this.year=year;(2023)
        
        this.isavailability=isavailable;(true,false)
        this.isAvailable === this.isAvailable
    }
    }
let car=new Car("Toyota","camry",2020,false);
console.log({car});  this.isAvailable === this.isAvailable
    
//2) Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
// rentalStartDate (Date object): The start date of the rental period.
// rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
    
 class Rental{
    constructor(object,renterName,rentalStartDate,rentalEndDate){
        this.object=object
        this.renterName=renterName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate
    }
    calculateRentalDuration(){
        this.rentalEndDate=!this.rentalEndDate
    }
}
let rental=new classRental("Tesla","Janet",30)
  var console:classRental




//3) Create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using
//the calculateRentalDuration method
  
// create car instance
const car = new Car('Toyota', 'Camry', 2020, true)
// create rental instance
const rentalStartDate = new Date('2023-04-01')
const rentalEndDate = new Date('2023-04-10')
const rentalDuration = new Rental(car, 'Jane Doe', rentalStartDate, rentalEndDate)
const rentalduration = rental.carRentalDuration()
console.log('rental Duration in days:', rentalDuration)
 

    
   class Question {
    constructor(text, options, correctAnswer){
        this.text = text,
        this.options = options,
        this.correctAnswer = correctAnswer
    }
    checkAnswer(usersAnswer){
        return usersAnswer === this.correctAnswer
    }
}
class Quiz {
    constructor(){
        this.questions = [],
        this.currentQuestionIndex = 0,
        this.score = 0
    }
    addQuestion(question){
        this.questions.push(question)
    }
    nextQuestion(){
        this.currentQuestionIndex++
    }
    submitAnswer(usersAnswer){
        const currentQuestion = this.questions[this.currentQuestionIndex]
        if (currentQuestion.checkAnswer(usersAnswer)){
            this.score++
        }
        this.nextQuestion()
    }
}
const quiz = new Quiz()
const question1 = new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Rome"],
    "Paris"
  );
  const question2 = new Question(
    "Which planet is known as the Red Planet?",
    ["Venus", "Venus", "Jupiter", "Saturn"],
    "jupiter"
  );
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.submitAnswer('Paris')
quiz.submitAnswer('Venus')
console.log('Score:', quiz.score)
 











