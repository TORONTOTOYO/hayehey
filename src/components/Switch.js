import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import he from 'he';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import getAuth for authentication
import { db } from './firebase'; // Adjust the path as needed

const Button = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [answerLocked, setAnswerLocked] = useState(false);
    const [timer, setTimer] = useState(15);
    const [sirenSound, setSirenSound] = useState(null);
    const [points, setPoints] = useState(0); 

    const auth = getAuth();
    const user = auth.currentUser; // Get current authenticated user
    const userId = user ? user.uid : "";

    useEffect(() => {
        // Initialize siren sound once
        const sound = new Audio("/alarm.mp3");
        setSirenSound(sound);

        return () => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
        };
    }, []);

    useEffect(() => {
        let countdown;

        if (showModal && !answerLocked) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(countdown);
                        setFeedback("Time's up!");
                        setAnswerLocked(true);
                        setTimeout(handleCloseModal, 2000);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }

        return () => clearInterval(countdown);
    }, [showModal, timer, answerLocked]);

    useEffect(() => {
        if (!showModal) {
            stopSiren();
        }
    }, [showModal]);

    useEffect(() => {
      // Fetch the initial score when the component mounts
      const fetchScore = async () => {
          try {
              if (userId) {
                  const userDoc = doc(db, 'users', userId);
                  const docSnap = await getDoc(userDoc);
                  if (docSnap.exists()) {
                      setPoints(docSnap.data().score || 0);
                  }
              }
          } catch (error) {
              console.error('Error fetching score:', error);
          }
      };
      fetchScore();
  }, [userId]);


      const fetchQuestionsFromCategories = async (categories, limit = 5) => {
        try {
            const requests = categories.map(category =>
                fetch(`https://the-trivia-api.com/api/questions?limit=${limit}&categories=${category}`)
            );

            const responses = await Promise.all(requests);
            const dataArrays = await Promise.all(responses.map(res => res.json()));

            // Flatten the array of arrays into a single array of questions
            const allQuestions = dataArrays.flat();

            // Shuffle the combined questions array
            allQuestions.sort(() => Math.random() - 0.5);

            // Ensure the limit is respected
            const limitedQuestions = allQuestions.slice(0, limit);

            return limitedQuestions.map(questionData => {
                const formattedQuestion = he.decode(questionData.question);
                const allChoices = [...questionData.incorrectAnswers, questionData.correctAnswer];
                
                // Shuffle the choices so the correct answer is not always in the same position
                const shuffledChoices = allChoices.sort(() => Math.random() - 0.5);

                const formattedChoices = shuffledChoices.map(choice => he.decode(choice));
                const formattedCorrectAnswer = he.decode(questionData.correctAnswer);
                
                return { question: formattedQuestion, choices: formattedChoices, correctAnswer: formattedCorrectAnswer };
            });
            
        } catch (error) {
            console.error('Error fetching trivia questions:', error);
            return [{ question: 'Failed to load questions. Reload the page.', choices: [], correctAnswer: '' }];
        }
    };

    const handleClick = async () => {
        // Only include the relevant categories for programming, mathematics, and English vocabulary
        const categories = ['Programming', 'Mathematics', 'English Vocabulary'];
        const questions = await fetchQuestionsFromCategories(categories, 5); 
        if (questions.length > 0) {
            const question = questions[0];
            setQuestion(question.question);
            setChoices(question.choices);
            setCorrectAnswer(question.correctAnswer);
            setShowOverlay(true);
            setShowModal(true);
            setAnswerLocked(false);
            setTimer(15);
            if (sirenSound) sirenSound.play();
        } else {
            setQuestion('No questions found. Please try again.');
            setChoices([]);
            setCorrectAnswer('');
        }
    };

      const handleChoiceClick = async (choice) => {
        if (answerLocked) return;
        setSelectedAnswer(choice);
        setAnswerLocked(true);

        if (choice === correctAnswer) {
            setFeedback("Correct! Well done.");
            setPoints(prevPoints => {
                const newPoints = prevPoints + 1;
                updateScore(newPoints);
                return newPoints;
            });
            stopSiren();
        } else {
            setFeedback(`Wrong! The correct answer was: ${correctAnswer}`);
            triggerVibration();
        }

        setTimeout(() => {
            handleCloseModal();
        }, 5000);
    };

    const updateScore = async (newScore) => {
        try {
            if (userId) {
                const userDoc = doc(db, 'users', userId);
                await updateDoc(userDoc, { score: newScore });
            }
        } catch (error) {
            console.error('Error updating score:', error);
        }
    };


      const triggerVibration = () => {
        if (navigator.vibrate) {
            navigator.vibrate([200]); // Pattern: vibrate for 200ms, pause for 100ms, vibrate for 200ms
        }
      };

      const handleCloseModal = () => {
          setShowOverlay(false);
          setShowModal(false);
          setFeedback("");
          setSelectedAnswer("");
          setTimer(15);
          stopSiren();
      };

      const stopSiren = () => {
          if (sirenSound) {
              sirenSound.pause();
              sirenSound.currentTime = 0;
          }
      };

    return (
        <StyledWrapper>
            <button className="btn-class-name" onClick={handleClick}>
                <span className="back" />
                <span className="front" />
            </button>
            {showOverlay && <Overlay />}
            {showModal && (
                <AmongUsModal 
                    question={question} 
                    choices={choices} 
                    selectedAnswer={selectedAnswer}
                    onChoiceClick={handleChoiceClick}
                    feedback={feedback} 
                    onCloseModal={handleCloseModal}
                    timer={timer}
                />
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: flex-end; /* Aligns items to the bottom */
  height: 45vh; /* Height for larger screens */
  width: 75vw; /* Width for larger screens */
  position: absolute; /* Keeps it within normal document flow */
  margin: 0 auto; /* Center horizontally within the parent container */
  bottom: 0; /* Default bottom position */
  left: 0;
  right: 0; /* Ensure it stretches full width of the parent container */

  .btn-class-name {
    --primary: 255, 90, 120;
    --secondary: 150, 50, 60;
    width: 60px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    outline: 10px solid rgb(var(--primary), 0.5);
    border-radius: 100%;
    position: absolute; /* Absolute positioning for the button */
    bottom: 10px; /* Position the button 10px from the bottom of the wrapper */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust position to center */
    transition: 0.3s;
  }

  .btn-class-name .back {
    background: rgb(var(--secondary));
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .btn-class-name .front {
    background: linear-gradient(
      0deg,
      rgba(var(--primary), 0.6) 20%,
      rgba(var(--primary)) 50%
    );
    box-shadow: 0 0.5em 1em -0.2em rgba(var(--secondary), 0.5);
    border-radius: 100%;
    position: absolute;
    border: 1px solid rgb(var(--secondary));
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: inherit;
    transform: translateY(-15%);
    transition: 0.15s;
    color: rgb(var(--secondary));
  }

  .btn-class-name:active .front {
    transform: translateY(0%);
    box-shadow: 0 0;
  }

  /* Mobile View Adjustments */
  @media (max-width: 768px) {
    height: 45vh; /* Adjust height for medium screens */
    width: 85vw; /* Adjust width for medium screens */
    
    .btn-class-name {
      width: 50px; /* Slightly smaller size for mobile */
      height: 45px;
      bottom: 5px; /* Adjust position slightly for smaller screens */
    }

    .btn-class-name .front {
      font-size: 1rem; /* Adjust font size */
    }
  }

  @media (max-width: 480px) {
    height: 45vh; /* Further adjust height for small screens */
    width: 80vw; /* Further adjust width for small screens */
    
    .btn-class-name {
      width: 45px; /* Further reduce size for small screens */
      height: 40px;
      bottom: 2px; /* Adjust position further for very small screens */
    }

    .btn-class-name .front {
      font-size: 0.9rem; /* Adjust font size further */
    }
  }
`;


const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.6);
  z-index: 1000;
  animation: ${blink} 1s ease-in-out infinite;
  animation-duration: 1s;
`;

const AmongUsModal = ({ question, choices, selectedAnswer, onChoiceClick, feedback, timer }) => (
    <ModalContainer>
        <ModalContent>
        <CrewmateIcon />
            <Content>
                <h2>Emergency Question!!</h2>
                <p style={{color:'#F5F7F8'}}>{question}</p>
                <ChoicesContainer>
                    {choices.map((choice, index) => (
                        <Choice 
                            key={index} 
                            onClick={() => onChoiceClick(choice)}
                            selected={choice === selectedAnswer}
                            disabled={!!selectedAnswer}
                        >
                            {choice}
                        </Choice>
                    ))}
                </ChoicesContainer>
                {feedback && (
                    <Feedback
                        {...(selectedAnswer === feedback ? { correct: "true" } : {})}
                    >
                        {feedback}
                    </Feedback>
                )}                
                <Timer>{timer} seconds remaining</Timer>
            </Content>
        </ModalContent>
    </ModalContainer>
);

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  padding: 20px;
  background: #20232a;
  border: 5px solid #ff0000;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2000;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #00ff00;
    text-align: center;

    @media (max-width: 600px) {
    max-width: 400px;
    max-height: 200px;
    height: 50%;
    width: 90%;
    font-size: 2rem;
    margin: 0 auto; /* Center the h2 element */
  }
}

  @media (max-width: 600px) {
    width: 90vw;
    padding: 15px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 10px; /* Reduce gap on smaller screens */
    align-items: center; /* Center content */
  }
`;

const SvgContainer = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin-top: 8em;
  margin-right: -4rem;

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    margin-top: 0; /* Reset margin to avoid pushing down other elements */
    margin-right: 0;
    margin-left: 6rem;
    margin-bottom: 4rem;
    align-self: center; /* Center the SVG horizontally */
    order: 5; /* Move the SVG to the bottom of the stack */
  }
`;


const Content = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  margin-left: 10rem;

  @media (max-width: 600px) {
    margin-left: 0; /* Reset left margin for better alignment on mobile */
  }
`;

const Choice = styled.div`
  background: ${({ selected }) => (selected ? '#00ff00' : '#ff0000')};
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ selected }) => (selected ? '#00cc00' : '#cc0000')};
  }

  @media (max-width: 600px) {
    padding: 8px; /* Adjust padding for smaller screens */
  }
`;

const Feedback = styled.p`
  color: ${({ $correct }) => ($correct === "true" ? "green" : "red")};
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 0.9rem; /* Slightly smaller font size on mobile */
  }
`;

const Timer = styled.div`
  font-size: 1.2rem;
  color: red;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 1rem; /* Adjust font size for better readability */
  }
`;

const CrewmateIcon = () => (
    <SvgContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="150" height="150">
        {/* Body */}
        <path d="M75 120 Q75 250 150 280 Q225 250 225 120 L225 100 Q225 50 150 50 Q75 50 75 100 Z" fill="#E1D7C6" stroke="#000000" strokeWidth="10"/>
        {/* Muscular Chest */}
        <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 170 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" strokeWidth="10"/>
        {/* Abs */}
        <path d="M125 170 L175 170 Q180 220 150 230 Q120 220 125 170" fill="#6C4E31" stroke="#000000" strokeWidth="5"/>
        <path d="M137 185 L163 185" stroke="#000000" strokeWidth="5"/>
        <path d="M135 200 L165 200" stroke="#000000" strokeWidth="5"/>
        <path d="M137 215 L163 215" stroke="#000000" strokeWidth="5"/>
        {/* Bicep Highlight */}
        <path d="M85 130 Q95 120 105 130 Q115 140 105 150 Q95 160 85 150 Z" fill="#FFFFFF" opacity="0.6"/>
        {/* Arm */}
        <rect x="200" y="130" width="50" height="80" rx="25" ry="25" fill="#6C4E31" stroke="#000000" strokeWidth="10"/>
        {/* Legs */}
        <rect x="100" y="250" width="50" height="60" rx="20" ry="20" fill="#6C4E31" stroke="#000000" strokeWidth="10"/>
        <rect x="150" y="250" width="50" height="60" rx="20" ry="20" fill="#6C4E31" stroke="#000000" strokeWidth="10"/>
        {/* Hair */}
        <path d="M100 70 Q150 20 200 70 L200 90 Q150 40 100 90 Z" fill="#FFD700" stroke="#000000" strokeWidth="5"/>
        {/* Face */}
        <circle cx="130" cy="100" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="5"/>
        <circle cx="170" cy="100" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="5"/>
        {/* Shades */}
        <path d="M110 95 L190 95" stroke="#000000" strokeWidth="5"/>
        <path d="M110 95 Q120 105 130 105 Q140 105 150 95 Q160 105 170 105 Q180 105 190 95" fill="#333333" stroke="#000000" strokeWidth="3"/>
        {/* Mustache */}
        <path d="M135 125 Q150 135 165 125" fill="none" stroke="#000000" strokeWidth="3"/>
        {/* Mouth (neutral expression) */}
        <line x1="140" y1="140" x2="160" y2="140" stroke="#000000" strokeWidth="3"/>
      </svg>
    </SvgContainer>
  );
  

export default Button;
