import axios from "axios";
import { useState, useEffect } from "react";
import Customslide from "./CustomSlide";

const jokes = [
    {
        attachments: [
          {
            fallback: "What kind of magic do cows believe in? MOODOO.",
            footer: " - ",
            text: "Press --> to load the next joke",
          },
        ],
        response_type: "in_channel",
        username: "icanhazdadjoke",
      },
];

async function getJokeFromInternet() {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/slack");
    const data = response.data;

    jokes.push(data);
    //   console.log(data);
    //   console.log(jokes);
    return response;
  } catch (error) {
    console.error("error in gettingJokeFrom Internet" + error);
  }
}

function Homepage() {
  useEffect(() => {getJokeFromInternet();}, []);

  const [activeJokeIndex, setActiveJokeIndex] = useState(0);

  const nextJoke = () => {
    if(jokes.length-activeJokeIndex<=2){
        getJokeFromInternet();
    }
    
    setActiveJokeIndex(activeJokeIndex+1);
  };

  const previousJoke=()=>{
    if(activeJokeIndex>1){
        setActiveJokeIndex(activeJokeIndex-1)
    }
  }

  return (
    <div className="row">
      <div className="col col-2">
        <button onClick={previousJoke}>
          <i className="bi bi-chevron-left"></i>
        </button>
      </div>
      <div className="col col-8">
        {activeJokeIndex && <Customslide {...jokes[activeJokeIndex]}></Customslide>}
        
      </div>
      <div className="col col-2">
        <button onClick={nextJoke}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
