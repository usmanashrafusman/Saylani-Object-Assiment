var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" },
  ];
  var totalAmount = 0;
  for (var i = 0; i < itemsArray.length; i++) {
    var allPrice = itemsArray[i].price * itemsArray[i].quantity;
    console.log(itemsArray[i].name + ' : '+ allPrice);
    totalAmount += allPrice;
  }
  console.log("The Total Amount is " + totalAmount);

  var user = {
    name: { firstName: "usman", lastName: "ashraf" },
    email: "usman.ashraf@gmail.com",
    password: "12345admin",
    age: 20,
    gender: "male",
    city: "karachi",
    country: "pakistan",
  };
  if (user.hasOwnProperty("age") && user.hasOwnProperty("country")) {
    if (
      user.name.hasOwnProperty("firstName") &&
      user.name.hasOwnProperty("lastName")
    ) {
      console.log("True , firstName & lastName Properties Property Exist");
    }
    console.log("Also Age & Country Property Exist");
  } 

  function Person(name, email, password, gender, city) {
          this.name = name,
          this.email = email,
          this.password = password,
          this.gender = gender,
          this.city = city
  }
  var person1 = new Person("Usman","usman.ashraf@gmail.com","12345admin","Male","Karachi")
  var person2  = new Person("Nouman","NoumanFatta@gmail.com","Chainsmoker","Male","Karachi")
  var person3  = new Person("wasif","wasif03@gmail.com","maila","Male","Karachi")
  console.log(person1,person2,person3)


  
  var dataBase = [];

  var males = 0;
  var females = 0;

  function initial() {
    var userName = document.querySelector("#name").value;
    var userAge = document.querySelector("#age").value;
    var userAdd = document.querySelector("#address").value;
    var male = document.querySelector(".male");
    var female = document.querySelector(".female");

    var gender;
    if (male.checked) {
      gender = "male";
      males++;
    } else if (female.checked) {
      gender = "female";
      females++;
    }


    var education = document.getElementById("education").value;
    var educationDataBase = [];
    educationDataBase.push(education)
 


    var profession = document.getElementById("professions").value;
 
    var profressionDataBase = [];
    profressionDataBase.push(profession);



    var realDataBase = {
      name: userName,
      userAge: userAge,
      userAdd: userAdd,
      userGender: gender,
      education: educationDataBase,
      profession: profressionDataBase,
    };


    dataBase.push(realDataBase);
    console.log(dataBase);
  };

  function quantity() {
    var allFemales = document.querySelector(".allFemales");
    allFemales.innerHTML = `Total females in town are ${females}`;
    var allMales = document.querySelector(".allMales");
    allMales.innerHTML = `Total males in town are ${males}`;

    var noOfPeople = document.querySelector(".noOfPeople");
    noOfPeople.innerHTML = `Total Population of town ${dataBase.length}`;
  };

  var addData = document.querySelector(".btn");
  addData.addEventListener("click", function () {
    initial();
    quantity();
  });