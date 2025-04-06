const questions = [
  { q: "What is the capital of India?", o: ["Mumbai", "Delhi", "Kolkata", "Chennai"], a: 1 },
  { q: "National animal of India?", o: ["Tiger", "Elephant", "Lion", "Leopard"], a: 0 },
  { q: "How many official languages in India?", o: ["18", "21", "22", "24"], a: 2 },
  { q: "National bird of India?", o: ["Peacock", "Sparrow", "Pigeon", "Eagle"], a: 0 },
  { q: "National song of India?", o: ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Maa Tujhe Salaam"], a: 1 },
  { q: "Which is a UNESCO site in India?", o: ["Red Fort", "Taj Mahal", "Gateway of India", "India Gate"], a: 1 },
  { q: "Capital of Rajasthan?", o: ["Jaipur", "Udaipur", "Jodhpur", "Kota"], a: 0 },
  { q: "National tree of India?", o: ["Neem", "Mango", "Banyan", "Peepal"], a: 2 },
  { q: "Famous site: Hampi is in which state?", o: ["Karnataka", "Tamil Nadu", "Maharashtra", "Kerala"], a: 0 },
  { q: "Sun Temple is located in?", o: ["Konark", "Varanasi", "Jaipur", "Agra"], a: 0 }
];

let current = 0;
let score = 0;

function showQuestion() {
  if (current >= questions.length) {
    document.getElementById('question').innerText = "Quiz Complete!";
    document.getElementById('options').innerHTML = "";
    document.getElementById('score').innerText = "Total Score: " + score;

    if (score >= 500) {
      document.getElementById('reward').innerText = "Congratulations! You won ₹10 UPI reward.";
    } else {
      document.getElementById('reward').innerText = "Keep playing to reach 500 points!";
    }
    return;
  }

  const q = questions[current];
  document.getElementById('question').innerText = q.q;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";

  q.o.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (index === q.a) score += 20;
      current++;
      showQuestion();
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('score').innerText = "Current Score: " + score;
}

showQuestion();
