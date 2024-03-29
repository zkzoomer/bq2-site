import { useDispatch } from 'react-redux'
import { useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../hooks/scrollToTop';
import { Home } from './Home';
import '../styles/App.css'
import { Background } from '../styles/styles';
import { setModal } from '../state/modal/reducer';
import TopLevelModals from '../components/TopLevelModals';
import Header from '../components/Header';
import ContentWrapper from '../components/ContentWrapper';
import NotFound from './NotFound';
import QuizPage from './QuizPage';

import fundamentalsQuiz from "../quizes/fundamentals.json"
import ethereumQuiz from "../quizes/ethereum.json"
import smartContractsQuiz from "../quizes/smart-contracts.json"

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch()

    return (
        <Router>
            <ScrollToTop />
            <TopLevelModals isOpen={isOpen} closeModal={() => { onClose(); dispatch(setModal(""))}} />
            <Background>  
                <Header onOpen={onOpen}/>
                    <ContentWrapper>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/quiz/1" element={<QuizPage quiz={fundamentalsQuiz} />} />
                                <Route path="/quiz/2" element={<QuizPage quiz={ethereumQuiz} />} />
                                <Route path="/quiz/3" element={<QuizPage quiz={smartContractsQuiz} />} />
                                <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </ContentWrapper>
            </Background>
        </Router>
    );
}

export default App;