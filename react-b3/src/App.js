import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
		}
]


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [active,setActive] = useState(false)
	const handleAnswerOptionClick = (correct, ans) => {
		// setActive(true)
		if (correct.correct == ans) {
			setScore(score + 1);
		  setActive(true)
      console.log("ok")
		}
	};
	const nextQ = () => {
		setActive(false)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}


	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {quizData.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<button
							 style={{width:100,position:'absolute', left:200,background:'none'}}
							 onClick={() => nextQ()}
							 >Next</button>

							<span style={{position:'relative'}}>Question {currentQuestion + 1}</span>/{quizData.length}
						</div>
						<div className='question-text' >
							{quizData[currentQuestion].question}
							<br/>
							</div>
						
					</div>
					<div className='answer-section'>
              <button 
							onClick={() => handleAnswerOptionClick(quizData[currentQuestion], "a")}
							>{quizData[currentQuestion].a}
              </button>
              <button 
							onClick={() => handleAnswerOptionClick(quizData[currentQuestion], "b")}
							>{quizData[currentQuestion].b}
              </button>
              <button 
							onClick={() => handleAnswerOptionClick(quizData[currentQuestion], "c")}
							>{quizData[currentQuestion].c}
              </button>
              <button 
							onClick={() => handleAnswerOptionClick(quizData[currentQuestion], "d")}
							>{quizData[currentQuestion].d}
              </button>
					</div>
				</>
			)}
		</div>
	);
}

export default App;