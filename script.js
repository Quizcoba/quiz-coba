// script.js

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
      question: "Siapakah presiden pertama Indonesia?",
          answers: {
                a: "Soekarno",
                      b: "Joko Widodo",
                            c: "Megawati Soekarnoputri",
                                  d: "Susilo Bambang Yudhoyono"
                                      },
                                          correctAnswer: "a"
                                            },
                                              {
                                                  question: "Apa ibukota Indonesia?",
                                                      answers: {
                                                            a: "Jakarta",
                                                                  b: "Bandung",
                                                                        c: "Surabaya",
                                                                              d: "Yogyakarta"
                                                                                  },
                                                                                      correctAnswer: "a"
                                                                                        },
                                                                                          {
                                                                                              question: "Apa bahasa resmi di Indonesia?",
                                                                                                  answers: {
                                                                                                        a: "Bahasa Jawa",
                                                                                                              b: "Bahasa Sunda",
                                                                                                                    c: "Bahasa Inggris",
                                                                                                                          d: "Bahasa Indonesia"
                                                                                                                              },
                                                                                                                                  correctAnswer: "d"
                                                                                                                                    }
                                                                                                                                    ];

                                                                                                                                    function buildQuiz() {
                                                                                                                                      const output = [];

                                                                                                                                        myQuestions.forEach((currentQuestion, questionNumber) => {
                                                                                                                                            const answers = [];

                                                                                                                                                for (letter in currentQuestion.answers) {
                                                                                                                                                      answers.push(
                                                                                                                                                              `<label>
                                                                                                                                                                        <input type="radio" name="question${questionNumber}" value="${letter}">
                                                                                                                                                                                  ${letter} :
                                                                                                                                                                                            ${currentQuestion.answers[letter]}
                                                                                                                                                                                                    </label>`
                                                                                                                                                                                                          );
                                                                                                                                                                                                              }

                                                                                                                                                                                                                  output.push(
                                                                                                                                                                                                                        `<div class="question">
                                                                                                                                                                                                                                <h2>${currentQuestion.question}</h2>
                                                                                                                                                                                                                                        <p>${answers.join('')}</p>
                                                                                                                                                                                                                                              </div>`
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                      quizContainer.innerHTML = output.join('');
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                      function showResults() {
                                                                                                                                                                                                                                                        const answerContainers = quizContainer.querySelectorAll('.question');

                                                                                                                                                                                                                                                          let numCorrect = 0;

                                                                                                                                                                                                                                                            myQuestions.forEach((currentQuestion, questionNumber) => {
                                                                                                                                                                                                                                                                const answerContainer = answerContainers[questionNumber];
                                                                                                                                                                                                                                                                    const selector = `input[name=question${questionNumber}]:checked`;
                                                                                                                                                                                                                                                                        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                                                                                                                                                                                                                                                                            if (userAnswer ===
                                                                                                                                                                                                                                                                            