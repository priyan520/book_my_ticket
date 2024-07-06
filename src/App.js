import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Movie_info_page from './components/movie_info_page';
import Selct_seat from './components/select_seat';
import Finel from './components/final';
import { HiBars3 } from 'react-icons/hi2';
import Advance_react from './components/advance_react';

function App() {
  return (
    <>
      <header>
        <div className="header">
          <div className="container max-w-[1240px] mx-auto flex items-center justify-between">
            <div className="logo flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQRljVyfj3UiMHupL1q-KarIA2U3vncvyxw&s" alt="" height={"34px"} width={"115px"} />
              <div className="search ml-[20px]">
                <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" className="w-[550px] rounded-[4px] py-[5px] px-[10px]" style={{ border: "1px solid rgb(238, 238, 238)" }} />
              </div>
            </div>

            <div className="flex items-center">
              <select name="" id="" className="w-[85px] text-[14px]">
                <option value="">location</option>
                <option value="">usa</option>
                <option value="">uk</option>
                <option value="">rassia</option>
              </select>
              <button className="w-[67px] h-[25px] bg-[#F84464] text-[white] text-[12px] font-semibold rounded-md ml-[18px]">Sign in</button>
              <button className="ml-[20px]"><HiBars3 className="h-[28px] w-[28px] text-[22px]"></HiBars3></button>
            </div>
          </div>
        </div>
      </header>
      <section className="menu bg-[#F5F5F5] h-[40px]">
        <div className="container max-w-[1240px] mx-auto h-[100%]">
          <div className="con flex justify-between h-[100%] items-center">
            <div className="p_1">
              <ul className="flex">
                <li className="pr-[10px] text-[14px]">Movies</li>
                <li className="px-[10px] text-[14px]">Stream</li>
                <li className="px-[10px] text-[14px]">Events</li>
                <li className="px-[10px] text-[14px]">Plays</li>
                <li className="px-[10px] text-[14px]">Sports</li>
                <li className="pl-[10px] text-[14px]">Activities</li>
              </ul>
            </div>
            <div className="p_2">
              <ul className="flex">
                <li className="pr-[10px] text-[12px]">ListYourShow</li>
                <li className="px-[10px] text-[12px]">Corporates</li>
                <li className="px-[10px] text-[12px]">Offers</li>
                <li className="pl-[10px] text-[12px]">Gift Cards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie_info_page />} />
        <Route path='/select_seat' element={<Selct_seat />} />
        <Route path='/finle' element={<Finel />} />
      </Routes>
      {/* <Advance_react/> */}
    </>
  );
}

export default App;
