const rashi = {
    A: "Aries ♈",
    B: "Taurus ♉",
    C: "Gemini ♊",
    D: "Cancer ♋",
    E: "Leo ♌",
    F: "Virgo ♍",
    G: "Libra ♎",
    H: "Scorpio ♏",
    I: "Sagittarius ♐",
    J: "Capricorn ♑",
    K: "Aquarius ♒",
    L: "Pisces ♓",

    M: "Aries ♈",
    N: "Taurus ♉",
    O: "Gemini ♊",
    P: "Cancer ♋",
    Q: "Leo ♌",
    R: "Virgo ♍",
    S: "Libra ♎",
    T: "Scorpio ♏",
    U: "Sagittarius ♐",
    V: "Capricorn ♑",
    W: "Aquarius ♒",
    X: "Pisces ♓",
    Y: "Aries ♈",
    Z: "Taurus ♉"
};

const compliments = [
  "You have a beautiful smile. 😊",
  "Your confidence inspires others.",
  "You are stronger than you think.",
  "Your kindness makes a difference.",
  "You have an amazing personality.",
  "You always bring positive energy.",
  "You are a quick learner.",
  "Your creativity is impressive.",
  "You have a great sense of humor.",
  "You are capable of achieving great things.",
  "You light up every room you enter.",
  "You are thoughtful and caring.",
  "Your determination is inspiring.",
  "You have a unique perspective.",
  "You are incredibly talented.",
  "Your honesty is admirable.",
  "You make people feel comfortable.",
  "You have a wonderful imagination.",
  "You are full of potential.",
  "Your patience is a strength.",
  "You are a natural problem solver.",
  "You spread happiness wherever you go.",
  "You have an incredible mindset.",
  "You never stop improving.",
  "You are a wonderful friend.",
  "Your hard work will pay off.",
  "You have a calm and positive attitude.",
  "You are destined for success.",
  "You inspire people with your actions.",
  "You have a bright future ahead.",
  "Today is your day—believe in yourself!"
];

const prediction = [
    "Today is a lucky day for you.",
    "A new opportunity will come your way.",
    "Someone may appreciate your hard work.",
    "Good news is waiting for you.",
    "Your confidence will bring success.",
    "A surprise may brighten your day.",
    "Today is perfect for learning something new.",
    "Positive energy surrounds you today.",
    "A small step will lead to a big achievement.",
    "You may reconnect with an old friend.",
    "Patience will reward you soon.",
    "Your creativity will shine today.",
    "A happy moment is waiting for you.",
    "You may discover a hidden talent.",
    "Today is great for making new plans.",
    "Your efforts will be noticed.",
    "An exciting adventure is ahead.",
    "A peaceful day is coming.",
    "Trust your instincts today.",
    "Success is closer than you think."
];

const recommendation = [
    "Stay positive throughout the day.",
    "Drink plenty of water.",
    "Spend time with your family.",
    "Take a short walk to refresh your mind.",
    "Focus on your goals.",
    "Avoid unnecessary arguments.",
    "Read a good book today.",
    "Learn a new skill.",
    "Help someone in need.",
    "Believe in yourself.",
    "Take breaks while working.",
    "Keep a smile on your face.",
    "Practice gratitude today.",
    "Don't overthink small problems.",
    "Complete your pending tasks.",
    "Spend less time on social media.",
    "Trust the process and stay patient.",
    "Maintain a healthy routine.",
    "Enjoy the present moment.",
    "Never stop learning."
];

const frm = document.getElementById("pt");
const result = document.getElementById('result');
frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const first = document.getElementById("first"); //select first name input 
    const n1 = first.value;     //store value of input in n1
    const n2 = n1.toUpperCase();        //convert into uper case
    const first_l = n2[0];          //store fist letter 

    const dob = document.getElementById('dob');
    const d1 = dob.value;
    const d2 = d1.split("-");
    const day = d2[2];

    if(day-1){
    let p = Math.floor(Math.random()*prediction.length);
    let r = Math.floor(Math.random()*recommendation.length);
    result.innerText = `Your rashi is ${rashi[first_l] }
     ${compliments[day]}
    Prediction  ${prediction[p]}
    Recommendation  ${recommendation[r]}`;
    }else{
        alert("please fill the details first")
    }
    
    frm.reset();
    
})

