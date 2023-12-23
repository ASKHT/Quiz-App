const quizData = [
  {
    question: " Q1.What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Q2.Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "Q3.What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "Q4.What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Q5. What is the capital of France?",
    a: "London",
    b: "Berlin",
    c: "Paris",
    d: "Madrid",
    correct: "c",
  },
  {
    question: "Q6. In which year did World War II end?",
    a: "1943",
    b: "1945",
    c: "1948",
    d: "1950",
    correct: "b",
  },
  {
    question: "Q7. Who wrote 'Romeo and Juliet'?",
    a: "William Shakespeare",
    b: "Jane Austen",
    c: "Charles Dickens",
    d: "Leo Tolstoy",
    correct: "a",
  },
  {
    question: "Q8. Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Venus",
    d: "Jupiter",
    correct: "b",
  },
  {
    question: "Q9. What is the largest mammal in the world?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Gorilla",
    correct: "b",
  },
  {
    question: "Q10. Who developed the theory of relativity?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Galileo Galilei",
    d: "Stephen Hawking",
    correct: "b",
  },
  {
    question: "Q11. What is the currency of Japan?",
    a: "Yuan",
    b: "Won",
    c: "Yen",
    d: "Ringgit",
    correct: "c",
  },
  {
    question: "Q12. Who painted the Mona Lisa?",
    a: "Vincent van Gogh",
    b: "Pablo Picasso",
    c: "Leonardo da Vinci",
    d: "Claude Monet",
    correct: "c",
  },
  {
    question: "Q13. What is the boiling point of water in Celsius?",
    a: "100°C",
    b: "0°C",
    c: "-100°C",
    d: "50°C",
    correct: "a",
  },
  {
    question: "Q14. Who is the author of 'To Kill a Mockingbird'?",
    a: "George Orwell",
    b: "Harper Lee",
    c: "J.K. Rowling",
    d: "Ernest Hemingway",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let answer = document.querySelectorAll(".answer");
let submitBtn = document.getElementById("submit");
let prev = document.querySelector("#prev");
console.log(prev);

let answervalue = undefined;
let score = 0;
let currquiz = 0;
loadquiz();
function loadquiz() {
  deselectAnswers();

  question.innerText = quizData[currquiz].question;
  a_text.innerText = quizData[currquiz].a;
  b_text.innerText = quizData[currquiz].b;
  c_text.innerText = quizData[currquiz].c;
  d_text.innerText = quizData[currquiz].d;
}
let ind;

function selected() {
  answervalue = undefined;

  answer.forEach((item) => {
    if (item.checked) {
      answervalue = item.id;
    }
  });

  return answervalue;
}
function deselectAnswers() {
  answer.forEach((item) => {
    item.checked = false;
  });
}
prev.addEventListener("click", () => {
  if (currquiz > 0) {
    currquiz--;
    loadquiz();
  }
});
submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = selected();

  if (answer) {
    if (answer === quizData[currquiz].correct) {
      score++;
    }

    ind = currquiz++;
    if (currquiz < quizData.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <div class="buttons"> <button onclick="location.reload()">Attemp again</button></div>
               
            `;
    }
  }

  //   console.log(currquiz);
});
