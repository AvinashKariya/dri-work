import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='main--body'>
      <div className='main--heading'>
        <h1>Announcements</h1>
      </div>
      <div className='main--announc-body'>
        {Array.from({ length: 9 }, (_, index) => index + 1).map((item) => (
          <div className='main--announce-card'>
            <div className='main--announce-heading'>
              <p>Announce heading</p>
              {/* date or time of db , you just have to change format */}
              <span>18 Aug, 2023</span>
            </div>
            <div className='main--announce-info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              perferendis eaque sit aspernatur dicta dolores, officia officiis
              corporis modi. Aperiam animi nisi quia illo at quam pariatur vel,
              tenetur assumenda!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
