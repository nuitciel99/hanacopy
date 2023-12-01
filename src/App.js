import './reset.scss';
import './style.scss';

import MainContents from './components/MainContents';
import RecruitContent from './components/RecruitContent';
import Footer from './components/Footer';
import Navbar from './component/Navbar'
import SubContent from './component/SubContent'





function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContents />
      <SubContent />
      <RecruitContent />
      <Footer />
      
    </div>
  );
}

export default App;
