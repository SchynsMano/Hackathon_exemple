import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Madrid', 'Paris', 'Rome', 'Berlin'],
    answer: 'Paris',
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['Leonardo da Vinci', 'Michelangelo', 'Pablo Picasso', 'Vincent van Gogh'],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the largest mammal?',
    choices: ['Elephant', 'Whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Whale',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    answer: 'Mars',
  },
  {
    question: 'Who painted the Sistine Chapel ceiling?',
    choices: ['Raphael', 'Donatello', 'Leonardo da Vinci', 'Michelangelo'],
    answer: 'Michelangelo',
  },
  {
    question: 'What is the capital of Spain?',
    choices: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],
    answer: 'Madrid',
  },
  {
    question: 'Which gas do plants absorb during photosynthesis?',
    choices: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    answer: 'Carbon Dioxide',
  },
  {
    question: 'Who developed the theory of relativity?',
    choices: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Nikola Tesla'],
    answer: 'Albert Einstein',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    choices: ['China', 'Japan', 'India', 'South Korea'],
    answer: 'Japan',
  },
  {
    question: 'What is the largest organ in the human body?',
    choices: ['Heart', 'Brain', 'Skin', 'Liver'],
    answer: 'Skin',
  },
  {
    question: 'Which famous scientist discovered the law of gravity?',
    choices: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    answer: 'Isaac Newton',
  },
  {
    question: 'Which bird is known for its ability to mimic human speech?',
    choices: ['Pigeon', 'Parrot', 'Eagle', 'Crow'],
    answer: 'Parrot',
  },
];
  // Add more questions in the same format
  const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
  
    useEffect(() => {
      const shuffled = shuffleArray(questions);
      setShuffledQuestions(shuffled);
    }, []);
  
    const shuffleArray = (array) => {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    const handleAnswerButtonClick = (selectedAnswer) => {
      const isCorrect = shuffledQuestions[currentQuestion].answer === selectedAnswer;
  
      if (isCorrect) {
        setScore(score + 1);
      }
  
      if (currentQuestion < 4) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    };
  
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      const shuffled = shuffleArray(questions);
      setShuffledQuestions(shuffled);
    };
  
    return (
      <View style={styles.container}>
        {showScore ? (
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Your Score: {score} / 5</Text>
            <Button title="Restart Quiz" onPress={resetQuiz} />
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.questionText}>
              {shuffledQuestions[currentQuestion]?.question}
            </Text>
            {shuffledQuestions[currentQuestion]?.choices.map((choice, index) => (
              <Button
                key={index}
                title={choice}
                onPress={() => handleAnswerButtonClick(choice)}
                style={styles.answerButton}
              />
            ))}
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDF7E4',
    },
    scoreContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    scoreText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    quizContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    questionText: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
    },
    answerButton: {
      marginVertical: 5,
      width: 200,
    },
  });
  
  export default QuizApp;