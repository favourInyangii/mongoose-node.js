// Function to create many people documents
const createManyPeople = (arrayOfPeople, done) => {
    // Use the create method of Person model to save multiple documents
    Person.create(arrayOfPeople, (err, data) => {
      if (err) return console.error(err); // Log error if creation fails
      done(null, data); // Callback with created data
    });
  };
  
  // Function to find people by name
const findPeopleByName = (name, done) => {
    // Use the find method of Person model to search for documents by name
    Person.find({ name: name }, (err, data) => {
      if (err) return console.error(err); // Log error if search fails
      done(null, data); // Callback with found data
    });
  };

  // Function to find one person by favorite food
const findOneByFood = (food, done) => {
    // Use the findOne method of Person model to search for one document by favorite food
    Person.findOne({ favoriteFoods: food }, (err, data) => {
      if (err) return console.error(err); // Log error if search fails
      done(null, data); // Callback with found data
    });
  };

  // Function to find a person by ID
const findPersonById = (personId, done) => {
    // Use the findById method of Person model to search for a document by ID
    Person.findById(personId, (err, data) => {
      if (err) return console.error(err); // Log error if search fails
      done(null, data); // Callback with found data
    });
  };

  // Function to find a person by ID, update their favoriteFoods, and save the document
const findEditThenSave = (personId, done) => {
    // Find the person by ID
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err); // Log error if search fails
      
      // Add "hamburger" to the list of favoriteFoods
      person.favoriteFoods.push("hamburger");
      
      // Save the updated document
      person.save((err, updatedPerson) => {
        if (err) return console.error(err); // Log error if save fails
        done(null, updatedPerson); // Callback with updated data
      });
    });
  };

  // Function to find a person by name and update their age
const findAndUpdate = (personName, done) => {
    const ageToSet = 20; // New age to set
    
    // Find the person by name and update their age
    Person.findOneAndUpdate(
      { name: personName }, // Search query
      { age: ageToSet }, // Update data
      { new: true }, // Return the updated document
      (err, updatedPerson) => {
        if (err) return console.error(err); // Log error if update fails
        done(null, updatedPerson); // Callback with updated data
      }
    );
  };

  // Function to delete a person by ID
const removeById = (personId, done) => {
    // Find the person by ID and remove the document
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) return console.error(err); // Log error if delete fails
      done(null, removedPerson); // Callback with removed data
    });
  };

  // Function to remove people by name
const removeManyPeople = (done) => {
    const nameToRemove = "Mary"; // Name to remove
    
    // Remove all documents matching the name
    Person.remove({ name: nameToRemove }, (err, result) => {
      if (err) return console.error(err); // Log error if delete fails
      done(null, result); // Callback with result of the delete operation
    });
  };

  // Function to find people who like burritos, sort by name, limit to 2 results, and hide age
const queryChain = (done) => {
    const foodToSearch = "burritos"; // Food to search for
    
    // Find documents, sort by name, limit to 2 results, and select specific fields
    Person.find({ favoriteFoods: foodToSearch })
      .sort({ name: 1 }) // Sort by name in ascending order
      .limit(2) // Limit to 2 results
      .select({ age: 0 }) // Hide age field
      .exec((err, data) => {
        if (err) return console.error(err); // Log error if query fails
        done(null, data); // Callback with query results
      });
  };
  