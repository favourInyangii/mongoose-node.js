// Function to create and save a new person document
const createAndSavePerson = (done) => {
  // Create a new instance of Person model
  const person = new Person({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["Pizza", "Burger"]
  });

  // Save the person document to the database
  person.save((err, data) => {
    if (err) return console.error(err); // Log error if save fails
    done(null, data); // Callback with saved data
  });
};
