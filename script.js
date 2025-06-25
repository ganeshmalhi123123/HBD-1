// Falling hearts animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.textContent = '💖';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Track how many times "No" is clicked on first question
let noClickCount = 0;

const questions = [
  {
    question: "💘 Do you love me?",
    options: ["Yes 😍", "No 😅"],
    onClick: (answer, btns) => {
      const yesBtn = btns[0];
      if (answer.startsWith("No")) {
        noClickCount++;
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
        yesBtn.style.backgroundColor = "#fffacd"; // light yellow
        return; // do NOT advance to next question
      }
      // Reset counter and go to next question
      noClickCount = 0;
      nextQuestion();
    }
  },
  {
    question: "🗓️ Do you remember the day we first talked?",
    options: ["Yes 💬", "No 🤔"],
    onClick: (answer) => {
      if (answer.startsWith("Yes")) {
        alert("🌟 That was the beginning of my happiest journey.");
      }
      nextQuestion();
    }
  },
  {
    question: "📸 What’s your favorite memory with me so far?",
    options: ["Our first date 💑", "That night walk 🌙", "When we laughed uncontrollably 😂", "Let me type it ✍️"],
    onClick: () => nextQuestion()
  },
  {
    question: "⏳ If you could relive one moment with me, what would it be?",
    options: ["A kiss 😘", "A hug 🤗", "Our trip ✈️", "That one call 📞"],
    onClick: () => nextQuestion()
  },
  {
    question: "❤️ How much do you think I love you?",
    options: [
      "A lot 💕",
      "To the moon and back 🌙",
      "Beyond infinity ♾️",
      "More than words can say 💖"
    ],
    onClick: () => {
      alert("❌ Wrong... It’s even more than that 😌.");
      nextQuestion();
    }
  },
  {
    question: "✨ Do you believe in magic?",
    options: ["Yes ✨", "No ❌"],
    onClick: (answer) => {
      if (answer.startsWith("Yes")) {
        alert("🪄 Because every day with you feels like it.");
      } else {
        alert("💫 I didn’t either, until I met you.");
      }
      nextQuestion();
    }
  },
  {
    question: "🎶 Which song reminds you of us?",
    options: ["Perfect – Ed Sheeran 💑", "All of Me – John Legend 🎹", "Thinking Out Loud 💭", "Let me choose one 🎧"],
    onClick: () => nextQuestion()
  },
  {
    question: "😄 Can you guess how many times I smiled today thinking of you?",
    options: ["Just one? 🤔", "Ten? 😊", "Hundreds! 🥰"],
    onClick: () => {
      alert("💘 Just one? Try hundreds.");
      document.getElementById("surprise-btn").classList.remove("hidden");
    }
  }
];

let current = 0;

function nextQuestion() {
  const container = document.getElementById("question-container");
  const optionsBox = document.getElementById("options");

  if (current >= questions.length) return;

  container.innerHTML = questions[current].question;
  optionsBox.innerHTML = "";

  const btns = [];
  questions[current].options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => questions[current].onClick(option, btns);
    optionsBox.appendChild(btn);
    btns.push(btn);
  });

  current++;
}

function showSurprise() {
  document.getElementById("surprise-btn").classList.add("hidden");
  document.getElementById("video-container").classList.remove("hidden");
}

// Start the first question
nextQuestion();