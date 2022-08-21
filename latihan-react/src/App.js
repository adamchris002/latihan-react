import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

//import components
import Profile from './components/Profile';

function App() {
  const profiles= [
    {
      id: 1,
      name: "Adam",
      hobby: "main games"
    }, {
      id: 2,
      name: "Tony",
      hobby: "benerin radio"
    }, {
      id: 3,
      name: "Joko", 
      hobby: "buat film"
    }
  ]
  return (
    <>
      <div className="App mt-5">
      <header className="App-header">
      <h1 className="text-center hello">SUPREME</h1>
        <div className="m-5">
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <hr/>
        </div>
        <Profile name={"Adam"} hobby={"Main Game"}></Profile>
        <Profile name={"Joko"} hobby={"Bikin Film"}></Profile>
        <Profile name={"Tony"} hobby={"Benerin Radio"}></Profile>
      </header>
    </div>
    {/* <div className="container">
      <div className="">
        <h1 className="text-title text-center">React beginner</h1>
        <p class="text-center">Welcome to my web page</p>
        <hr/>
      </div>
      {profiles.map((profile) => {
        const {id, name, hobby} = profile;
        return <Profile name={name} hobby={hobby}></Profile>
      })}
    </div> */}

    <div className='container'>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            const {id, name, hobby} = profile;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{hobby}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
