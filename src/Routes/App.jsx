import { Routes, Route } from 'react-router-dom';
import Topic from '../Components/App/StoryBook/Topic';
import Chapter from '../Components/App/StoryBook/Chapter';
import Story from '../Components/App/StoryBook/Story';
import Title from '../Components/App/StoryBook/Title';
import Publication from '../Components/App/StoryBook/Publication';
import SignLayout from '../Components/Layout/SignLayout';
import Login from '../Components/Home/Login';
import SignUp from '../Components/Home/SignUp';
import SignUpEmail from '../Components/Home/SignUp/SignUpEmail';
import Mypage from '../Components/Home/Mypage';
import { useEffect } from 'react';
import { getLanguage } from '../language/i18n';
import ServiceLayout from '../Components/Layout/ServiceLayout';
import StoryBook_use from '../Components/App/StoryBook/StoryBook_use';

function App() {
  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ServiceLayout />}>
        <Route path="" element={<Topic />} />
        <Route path="intro" element={<StoryBook_use />} />
        <Route path="chapter" element={<Chapter />} />
        <Route path="story" element={<Story />} />
        <Route path="title" element={<Title />} />
        <Route path="publication" element={<Publication />} />
        <Route path="mypage" element={<Mypage />} />
      </Route>

      <Route path="/sign" element={<SignLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signup_email" element={<SignUpEmail />} />
      </Route>
      <Route path="*" element={<div>404 not found</div>}></Route>
    </Routes>
  );
}

export default App;
