// the javascript code is already provided in the index.html file
// const allQuestions = [
 //      { question: "Which country won the first ever Cricket World Cup in 1975?", options: ["England", "Australia", "West Indies", "India"], correct: 2 },
 //      { question: "What is the highest individual score in Test cricket?", options: ["375", "400*", "365*", "380"], correct: 1 },
 //      { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "Glenn McGrath"], correct: 1 },
 //      { question: "In which year was the first T20 International match played?", options: ["2005", "2006", "2007", "2004"], correct: 0 },
 //      { question: "What does LBW stand for in cricket?", options: ["Left Before Wicket", "Leg Before Wicket", "Late Before Wicket", "Last Before Wicket"], correct: 1 },
 //      { question: "Which stadium is known as the 'Home of Cricket'?", options: ["The Oval", "Lord's", "Eden Gardens", "MCG"], correct: 1 },
 //      { question: "Who holds the record for most runs in a single ODI innings?", options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Chris Gayle"], correct: 0 },
 //      { question: "What is the maximum number of overs a bowler can bowl in a T20 match?", options: ["3", "4", "5", "6"], correct: 1 },
 //      { question: "Which country has won the most Cricket World Cups?", options: ["India", "West Indies", "Australia", "England"], correct: 2 },
 //      { question: "What is a 'duck' in cricket?", options: ["A type of shot", "Getting out for zero runs", "A fielding position", "A type of delivery"], correct: 1 },
 //      { question: "Who is known as the 'Captain Cool' of cricket?", options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "KL Rahul"], correct: 1 },
 //      { question: "Which format of cricket has powerplay overs?", options: ["Test", "ODI", "T20", "Both ODI and T20"], correct: 3 },
 //      { question: "What is the standard length of a cricket pitch?", options: ["20 yards", "22 yards", "24 yards", "25 yards"], correct: 1 },
 //      { question: "Which player has scored the most centuries in international cricket?", options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Jacques Kallis"], correct: 1 },
 //      { question: "What is a 'hat-trick' in cricket?", options: ["3 sixes in a row", "3 wickets in 3 balls", "3 catches in a match", "3 runs in a ball"], correct: 1 },
 //      { question: "Which country hosted the first Cricket World Cup?", options: ["Australia", "England", "India", "West Indies"], correct: 1 },
 //      { question: "What is the maximum number of fielders allowed outside the 30-yard circle in ODIs?", options: ["3", "4", "5", "6"], correct: 2 },
 //      { question: "Who was the first cricketer to score 10,000 runs in Test cricket?", options: ["Allan Border", "Sunil Gavaskar", "Viv Richards", "Garfield Sobers"], correct: 1 },
 //      { question: "What is the term for a bowler bowling with his non-preferred hand?", options: ["Switch bowling", "Ambidextrous bowling", "Cross bowling", "Reverse bowling"], correct: 1 },
 //      { question: "Which cricket ground is famous for its 'Gabba' nickname?", options: ["Melbourne Cricket Ground", "Sydney Cricket Ground", "Brisbane Cricket Ground", "Adelaide Oval"], correct: 2 }
 //    ];

 //    let questions = [];
 //    let currentQuestion = 0;
 //    let score = 0;
 //    let selectedOption = null;
 //    let answered = false;

 //    function getRandomQuestions() {
 //      return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
 //    }

 //    function startQuiz() {
 //      document.getElementById('startScreen').classList.add('hidden');
 //      document.getElementById('quizScreen').classList.remove('hidden');
 //      currentQuestion = 0;
 //      score = 0;
 //      questions = getRandomQuestions();
 //      showQuestion();
 //    }

 //    function showQuestion() {
 //      const q = questions[currentQuestion];
 //      document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
 //      document.getElementById('questionText').textContent = q.question;
 //      const optionsContainer = document.getElementById('optionsContainer');
 //      optionsContainer.innerHTML = '';
 //      q.options.forEach((option, i) => {
 //        const el = document.createElement('div');
 //        el.className = 'option';
 //        el.textContent = option;
 //        el.onclick = () => selectOption(i);
 //        optionsContainer.appendChild(el);
 //      });
 //      updateProgressBar();
 //      document.getElementById('nextBtn').disabled = true;
 //      document.getElementById('nextBtn').textContent = currentQuestion === questions.length - 1 ? 'Show Results' : 'Next Question';
 //      answered = false;
 //    }

 //    function selectOption(index) {
 //      if (answered) return;
 //      const options = document.querySelectorAll('.option');
 //      options.forEach(el => el.classList.remove('selected', 'correct', 'incorrect'));
 //      options[index].classList.add('selected');
 //      setTimeout(() => {
 //        const correct = questions[currentQuestion].correct;
 //        options.forEach((el, i) => {
 //          if (i === correct) el.classList.add('correct');
 //          else if (i === index && i !== correct) el.classList.add('incorrect');
 //        });
 //        if (index === correct) score++;
 //        answered = true;
 //        document.getElementById('nextBtn').disabled = false;
 //      }, 500);
 //    }

 //    function nextQuestion() {
 //      if (++currentQuestion < questions.length) showQuestion();
 //      else showResults();
 //    }

 //    function updateProgressBar() {
 //      const percent = ((currentQuestion + 1) / questions.length) * 100;
 //      document.getElementById('progressBar').style.width = percent + '%';
 //    }

 //    function showResults() {
 //      document.getElementById('quizScreen').classList.add('hidden');
 //      document.getElementById('resultsScreen').classList.remove('hidden');
 //      const percent = Math.round((score / questions.length) * 100);
 //      document.getElementById('finalScore').textContent = `${score} out of ${questions.length} (${percent}%)`;
 //      document.getElementById('scoreMessage').textContent =
 //        percent >= 90 ? "Outstanding! You're a cricket expert! 🏏" :
 //        percent >= 70 ? "Great job! You know your cricket well! 👏" :
 //        percent >= 50 ? "Good effort! Keep learning about cricket! 📚" :
 //        "Keep practicing! Cricket has so much to explore! 💪";
 //    }

 //    function restartQuiz() {
 //      document.getElementById('resultsScreen').classList.add('hidden');
 //      document.getElementById('startScreen').classList.remove('hidden');
 //      currentQuestion = 0;
 //      score = 0;
 //    }
 
