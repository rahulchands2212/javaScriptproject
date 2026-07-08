const start = document.querySelector("#start");
  const end = document.querySelector("#end");

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
    answer: "New Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: [
      "Mahatma Gandhi",
      "Rabindranath Tagore",
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Isaac Newton",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan",
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: "366",
  },
  {
    question: "Which is the largest desert?",
    options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
    answer: "Sahara",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Leonardo da Vinci", "Van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which is the smallest planet in our Solar System?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    answer: "Mercury",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Dollar"],
    answer: "Yen",
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Lion", "Tiger", "Cheetah", "Leopard"],
    answer: "Cheetah",
  },
  {
    question: "Who discovered gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo", "Kepler"],
    answer: "Isaac Newton",
  },
  {
    question: "Which is the largest country by area?",
    options: ["USA", "China", "Russia", "Canada"],
    answer: "Russia",
  },
  {
    question: "Which organ pumps blood?",
    options: ["Brain", "Heart", "Lungs", "Liver"],
    answer: "Heart",
  },
  {
    question: "Which is the national bird of India?",
    options: ["Parrot", "Peacock", "Crow", "Eagle"],
    answer: "Peacock",
  },
  {
    question: "Which vitamin is produced by sunlight?",
    options: ["A", "B", "C", "D"],
    answer: "D",
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    question: "Who was the first man on the Moon?",
    options: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    answer: "Neil Armstrong",
  },
  {
    question: "Which river is the longest?",
    options: ["Amazon", "Nile", "Yangtze", "Ganga"],
    answer: "Nile",
  },
  {
    question: "Which is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: "Diamond",
  },
  {
    question: "How many players are there in a football team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "Germany", "Italy", "Canada"],
    answer: "France",
  },
  {
    question: "Which is the largest island?",
    options: ["Greenland", "Australia", "Madagascar", "Borneo"],
    answer: "Greenland",
  },
  {
    question: "Who wrote Harry Potter?",
    options: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "C.S. Lewis"],
    answer: "J.K. Rowling",
  },
  {
    question: "Which planet has rings?",
    options: ["Mars", "Earth", "Saturn", "Venus"],
    answer: "Saturn",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Copper", "Silver"],
    answer: "Mercury",
  },
  {
    question: "Which is the national flower of India?",
    options: ["Rose", "Lotus", "Lily", "Sunflower"],
    answer: "Lotus",
  },
  {
    question: "Which blood group is the universal donor?",
    options: ["A+", "B+", "AB+", "O-"],
    answer: "O-",
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Australia", "Africa", "Antarctica"],
    answer: "Australia",
  },
  {
    question: "H2O is the chemical formula for?",
    options: ["Hydrogen", "Water", "Oxygen", "Salt"],
    answer: "Water",
  },
  {
    question: "Which country has the Great Wall?",
    options: ["China", "India", "Japan", "Russia"],
    answer: "China",
  },
  {
    question: "Which is the largest bird?",
    options: ["Ostrich", "Eagle", "Peacock", "Penguin"],
    answer: "Ostrich",
  },
  {
    question: "Who invented the light bulb?",
    options: ["Thomas Edison", "Nikola Tesla", "Newton", "Bell"],
    answer: "Thomas Edison",
  },
  {
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which gas do humans breathe in?",
    options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Helium"],
    answer: "Oxygen",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "Which animal is called the King of the Jungle?",
    options: ["Tiger", "Lion", "Leopard", "Elephant"],
    answer: "Lion",
  },
  {
    question: "How many states are there in India?",
    options: ["27", "28", "29", "30"],
    answer: "28",
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "95°C", "100°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Which country is famous for pyramids?",
    options: ["India", "China", "Egypt", "Mexico"],
    answer: "Egypt",
  },
  {
    question: "Which instrument measures temperature?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
    answer: "Thermometer",
  },
  {
    question: "Which is the largest rainforest?",
    options: ["Amazon", "Congo", "Daintree", "Sundarbans"],
    answer: "Amazon",
  },
  {
    question: "Which is the nearest star to Earth?",
    options: ["Sun", "Sirius", "Polaris", "Alpha Centauri"],
    answer: "Sun",
  },
  {
    question: "Which is the national animal of India?",
    options: ["Tiger", "Lion", "Elephant", "Leopard"],
    answer: "Tiger",
  },
  {
    question: "Which language has the most native speakers?",
    options: ["English", "Hindi", "Mandarin Chinese", "Spanish"],
    answer: "Mandarin Chinese",
  },
];

start.addEventListener("click", (e) => {
  e.preventDefault();
  const outdiv = document.createElement("div");
  outdiv.classList.add("outdiv");

  const qdiv = document.createElement("div");
  qdiv.classList.add("qdiv");

  const adiv = document.createElement("div");
  adiv.classList.add("adiv");

  const abuton = document.createElement("button");
  abuton.classList.add("option");

  const bbuton = document.createElement("button");
  bbuton.classList.add("option");

  const cbuton = document.createElement("button");
  cbuton.classList.add("option");

  const dbuton = document.createElement("button");
  dbuton.classList.add("option");

  //adding question on qdiv
  let qpick;
  function content() {
    qpick = Math.floor(Math.random() * questions.length);
    qdiv.textContent = questions[qpick].question;
    abuton.textContent = questions[qpick].options[0];
    bbuton.textContent = questions[qpick].options[1];
    cbuton.textContent = questions[qpick].options[2];
    dbuton.textContent = questions[qpick].options[3];

    //reset color
    abuton.style.backgroundColor = "white";
    bbuton.style.backgroundColor = "white";
    cbuton.style.backgroundColor = "white";
    dbuton.style.backgroundColor = "white";
  }

  content();

  adiv.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.textContent == questions[qpick].answer) {
      e.target.style.backgroundColor = "green";

      setTimeout(() => {
        content();
      }, 2000);
    }

    if (e.target.textContent != questions[qpick].answer) {
      e.target.style.backgroundColor = "red";
    }
  });

  //===========================================================
  adiv.append(abuton, bbuton, cbuton, dbuton);

  outdiv.append(qdiv, adiv);

  document.body.append(outdiv);
  start.disabled = true;

  //clean question

  end.disabled = false;
  end.addEventListener("click", () => {
    outdiv.remove();
    start.disabled = false;
    end.disabled = true;
  });
  
});
