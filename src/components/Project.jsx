import React from 'react'
import Cards from './Cards'

function Project() {
  const data=[
    {
      name:"Wanderlust Website",
      desc:"a wanderlust website where user get information about hotels.Implement CRUD operations for users and adding a hotels.Using a javascript for frontend. Employ Node.js with Express and MongoDB for the backend.",
      tech:["Html","css","JavaScript","Node js","MongoDb"],
      ref:"air.png",
      live:"https://airbnb-lite.onrender.com/listing",
      src:"https://github.com/Piyush631/Airbnb_lite"
    },
    {
      name:"power fitness",
      desc:"Dynamic Gold Gym website using React.js and Rapid API, offering users comprehensive exercise information and YouTube demonstration videos.By integrating Rapid API, users access up-to-date exercise details, including descriptions and muscle targeting ",
      tech:["React","Tailwindcss","RapidApi"],
      ref:"gym.png",
      live:"https://power-fitness-center.netlify.app/",
      src:"https://github.com/Piyush631/powergym"
    },
    {
      name:"Doctalk",
      desc:"Develop a website through which a user book a appointment from a doctors . User also get a various types of information regarding hospital etc.",
      tech:["Html","css","php","javacript"],
      ref:"doctor.png",
    },
    {
      name:"Weather Prediction",
      desc:"Built on React  and Tailwind CSS, this app utilizes an API server to predict weather conditions and	providing users with accurate forecasts seamlessly",
      
      tech:["React","Html","tailwind","Api"],
      ref:"weather.png",
      live:"https://github.com/Piyush631/WeatherPrediction",
      src:"https://github.com/Piyush631/WeatherPrediction"
    },
    {
      name:"Vanilla JavaScript projects",
      desc:"Designed a captivating set of projects, including a Simon Game, Dice Throw, Todo app using Vanilla JavaScript to reinforce fundamental concepts.",
      
      tech:["javascript","Html","css","bootstrap"],
      ref:"vanila.png",
    },
    {
      name:"Visit Chamba",
      desc:"online travelling related website a where user get a information about various tourist places in Chamba and also book hotel and Taxi online",
      
      tech:["HtML","Css","javaScript","mysql"],
      ref:"chamba.png",
    }
  ]
  return (
    <div id="project">
    <div className=' sm:pl-12 pl-2'>
      <h1 className='sm:text-[85px] text-[30px]'>My Projects</h1>
    </div>
    <div className='border-b-2 border-gray-300 mt-8' >

    </div>
   <div className='w-full flex flex-wrap gap-20 p-20'>
   { data.map((item,index)=>(

<Cards data={item} />
 ))}

    

   </div>
    
  </div>
  )
}

export default Project