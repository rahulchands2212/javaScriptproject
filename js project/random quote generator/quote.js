const animeQuotes = [
  "Power comes to those who never give up.",
  "Every scar tells the story of your growth.",
  "Your greatest battle is against yourself.",
  "Stand up, even if the world knocks you down.",
  "A true warrior fights with heart, not anger.",
  "Fear disappears when courage takes its place.",
  "The strongest heroes were once the weakest.",
  "Every defeat is training for your next victory.",
  "Protect what matters, no matter the cost.",
  "Dreams only die when you stop chasing them.",
  "The impossible becomes possible with effort.",
  "Never let anyone decide your limits.",
  "Strength is earned through pain.",
  "Keep moving forward, no matter how slow.",
  "A calm mind wins the toughest battles.",
  "Your future depends on today's actions.",
  "Hard work will outshine natural talent.",
  "Every sunrise brings another chance to improve.",
  "Believe in yourself before anyone else does.",
  "Victory belongs to those who refuse to quit.",
  "A warrior's spirit never breaks.",
  "Your determination is your greatest weapon.",
  "Darkness cannot stop someone chasing the light.",
  "The journey makes you stronger than the destination.",
  "Don't fear failure; fear giving up.",
  "Legends are built through consistency.",
  "Even a small flame can light the darkest night.",
  "Courage is choosing to fight despite fear.",
  "The next level begins outside your comfort zone.",
  "Turn your pain into power.",
  "Never underestimate your hidden potential.",
  "Every rival makes you stronger.",
  "Greatness requires sacrifice.",
  "Your heart decides how far you can go.",
  "Fight today so tomorrow becomes easier.",
  "A hero never stops learning.",
  "The strongest chains are the ones in your mind.",
  "Every challenge hides an opportunity.",
  "Protect your dreams like your greatest treasure.",
  "Your willpower defines your destiny.",
  "Rise every time you fall.",
  "The strongest people smile through hardship.",
  "Discipline creates unstoppable warriors.",
  "Your story is far from over.",
  "Every ending is the beginning of a new arc.",
  "Never stop leveling up.",
  "Face every battle with confidence.",
  "A true champion never seeks easy paths.",
  "Your greatest transformation starts today.",
  "The next chapter is yours to write."
];

const btn = document.getElementById("btn"); //select button
const qoute = document.getElementById("quote"); //select qoute

btn.addEventListener('click',()=>{
    let index = Math.floor(Math.random()*50);   //random index
    qoute.innerText = animeQuotes[index]; //inner text change
});

btn.addEventListener('mouseenter',()=>{
  btn.style.cursor = 'pointer';
});