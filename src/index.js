import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  New  from './New';
import { Work1 } from './Task';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import Contacts from './Contact';
import {Count} from './Count';
import {Color} from './Color';
import { Effect } from './Effect';
import { Fetch } from './Fetch';
import { Datafetching } from './Datafetching';
import { Movie } from './Movie';
import { Detail } from './Detail';
import { Weather } from './Weather';
import { Teamperature } from './Teamperature';
import Login from './Login';
import { Todo } from './Todo';
import Main from './Main';
import Key from './Key';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contacts/>}></Route>
      <Route path='/Count' element={<Count/>}></Route>
      <Route path='/Color' element={<Color/>}></Route>
      <Route path='/Effect' element={<Effect/>}></Route>
      <Route path='/Fetch' element={<Fetch/>}></Route>
      <Route path='/Datafetching' element={<Datafetching/>}></Route>
      <Route path='/Movie' element={<Movie/>}></Route>
      <Route path='/Detail/:id' element={<Detail/>}></Route>
      <Route path='/Weather' element={<Weather/>}></Route>
      <Route path='/Teamperature' element={<Teamperature/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Todo' element={<Todo/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path='/key' element={<Key/>}></Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
