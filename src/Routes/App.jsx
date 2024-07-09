import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import axios from 'axios';
import { changeLanguage } from '../language/i18n';
import MainLayout from '../Components/Layout/MainLayout';

import Topic from '../Components/App/StoryBook/Topic';
import Chapter from '../Components/App/StoryBook/Chapter';
import Story from '../Components/App/StoryBook/Story';
import Title from '../Components/App/StoryBook/Title';
import Publication from '../Components/App/StoryBook/Publication';
import StoryBook_use from '../Components/App/StoryBook/StoryBook_use';
import SignLayout from '../Components/Layout/SignLayout';
import Login from '../Components/Home/Login';
import SignUp from '../Components/Home/SignUp';
import SignUpEmail from '../Components/Home/SignUp/SignUpEmail';
import ServiceLayout from '../Components/Layout/ServiceLayout';
import Mypage from '../Components/Home/Mypage';

function App() {
  useEffect(() => {
    const getIP = async () => {
      try {
        const getIPResponse = await axios.get(`https://ipapi.co/json`);

        let lng = 'ko';
        if (getIPResponse.data.country_code !== 'KR') {
          lng = 'en';
        }
        changeLanguage(lng);
      } catch (err) {
        console.error(err);
        changeLanguage('ko');
      }
    };
    getIP();
  }, []);

  return (
    <Routes>
      <Route path="/service" element={<MainLayout />}>
        <Route path="storybook/topic" element={<Topic />} />
        <Route path="storybook/chapter" element={<Chapter />} />
        <Route path="storybook/story" element={<Story />} />
        <Route path="storybook/title" element={<Title />} />
        <Route path="storybook/publication" element={<Publication />} />
        <Route path="storybook" element={<StoryBook_use />} />
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
