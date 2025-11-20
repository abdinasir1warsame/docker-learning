import { useState } from 'react';
import LandingPage from './components/landPage';
import QuestionsPage from './components/questionsPage';

function App() {
  const [page, setPage] = useState('landing');

  const startQuiz = () => setPage('questions');

  return (
    <>
      {page === 'landing' && <LandingPage onStart={startQuiz} />}
      {page === 'questions' && <QuestionsPage />}
    </>
  );
}

export default App;
