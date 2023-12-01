import './reset.scss';
import './style.scss';

import MainContents from './components/MainContents';
import RecruitContent from './components/RecruitContent';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">

      <MainContents />
      <RecruitContent />
      <Footer />
      
    </div>
  );
}

export default App;
