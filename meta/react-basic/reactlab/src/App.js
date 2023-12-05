import React from 'react';
import avator from './avatar-boy.png';
import boy from './boy.png';

import Heading from "./Heading";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

// React State Management
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import { useReducer } from 'react';

// Managing state in React - Life the state up
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

// Week 3 - Navbar
import Homepage from "./Homepage";
import AboutMe from "./components/AboutMe";
import ContactUs from './components/ContactUs';
import { Routes, Route, Link } from 'react-router-dom';

// Week 3 - Using embedded assets
import rooftops from './assets/images/central-park.jpg';

// Week3 - Media packages (npm install react-player first)
import ReactPlayer from 'react-player';

// Week 3 - Media packages
const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=jx5hdo50a2M' />
  );
};

// Week 2 - React State Management
const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money -50};
  return new Error();
}

// Week 3 - conditional components
function LoginOutButton(props) {
  if (props.isLoggedIn) {
    return <LogoutButton />
  } else {
    return <LoginButton />
  }
}

function LoginButton() {
  return <button>Log In</button>
}

function LogoutButton() {
  return <button>Log Out</button>
}

// Week 3 - conditional rendering
function MovitationalMessage(props) {
  const weekday = (props.mday >= 1 && props.mday <=5);
  const weekend = (props.mday >= 6 && props.mday <=7);
  let message;

  if (props.holiday) {
    message = "Do whatever you want!";
  } else if (weekday) {
    message = "Get it done.";
  } else if (weekend) {
    message = "Have some rest!!";
  } else {
    message = "Something has gone wrong :(";
  }

  return (
    <div>{message}</div>
  )
}


// Prop drilling - child -> parent -> sibling
// -Original coding - BusinessCard component
function BusinessCard(props) {
  return (
    <div>
      <h1>Virtual Business Card (Original Code Here)</h1>
      <h2><img src={boy} alt='bizcard-boy' /></h2>
      <h3>Person Von Personton</h3>
      <p> Person Von Personton is the VIP of Person Ops</p>
      <button onClick={() => console.log(props.msg)}>Get More Info</button>
    </div>
  )
}


// -NOW change to prop drilling
//  LeveledBusinessCard component renders and pass props.msg into Profile component
function LeveledBusinessCard(props) {
  return (
    <div style={ {border: "5px solid red" }}>
      <h1>Virtual Business Card (Props Drilling Start)</h1>
      <Profile msg={props.msg} />
    </div>
  );
};

//  Profile component renders and pass props.msg into ProfileDetails component
function Profile(props) {
  return (
    <div style={ {border: "5px solid purple"} }>
      <h2><img src={boy} alt='bizcard-boy' /></h2>
      <h3>Person Von Personton</h3>
      <ProfileDetails msg={props.msg} />
    </div>
  );
};

//  Profile
function ProfileDetails(props) {
  return (
    <div style={ {border: "5px solid blue"} }>
      <p> Person Von Personton is the VIP of Person Ops</p>
      <Button msg={props.msg} />
    </div>
  );
};

function Button(props) {
  return (
    <div style={{ border: "5px solid orange" }}>
      <button onClick={() => console.log(props.msg)}>Get more info.</button>
    </div>
  );
};

// Lab: Multiple components

// Embedding a JS expression in an attribute
function Logo() {
  const userPic = <img src={avator} alt='avator-embedded'/>;
  return userPic;
}

// Expressions as props
function SocialMediaPostExpression(props) {
  return (
    <div>
      <p>{props.read ? "READ" : "Not READ"}</p>
      <p>You've read this article <b>{props.timesRead}</b> time(s).</p>
      <p>Article origin: {props.orign}</p>
      <p>Arictle ID: {props.articleID}</p>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.text}</p>
    </div>
  );
}

function createArticleId() {
  return Math.floor(Math.random() * 100000)
}

// Functions in JSX
function DisplayRandomNumber(props) {
  const getRandomNumber = (highestNum) => Math.floor(Math.random() * highestNum) +  1;

  return (
    <div>
      <p>Hereis a random number between 1 and 10:</p>
      <h1>{ getRandomNumber(props.range) }</h1>
    </div>
  );
}

// Ternary operators in JSX
// condition ? true : false
const DisplayUserName = (props) => {
  return (
    <h2>{props.user ? `Hello, ${props.user}!` : "Hello, Friend!"}</h2>
  )
}

// JSX syntax and the arrow function
const SocialMediaPost = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>By: {props.author}</h3>
      <p>{props.text}</p>
    </div>
  )
}

const UrlLink = props => 
  <div>
    <a href={props.url}>{props.url}</a>
  </div>


// Styling JSX elements
const styles = {
  color: "white",
  fontSize: "80px",
  backgroundColor: "blue"
}

function Promo(props) {
  return (
    <div>
      <h1 style={styles}>{props.heading}</h1>
      <h2>{props.promoSubHeading}</h2>
    </div>
  );
}

// Props and children
function Highlighter(props) {
  const highlightStyles = {
    background: "yellow",
    padding: "10px",
    fontWeight: "bold"
  }
  return (
    <div style={highlightStyles}>
      {props.children}
    </div>
  )
}

function BlogEntry() {
  return (
    <div>
      <h2>Joseph's Coding Blog</h2>
      <p>Read on for tips on how to study for coding interview..."</p>
    </div>
  )
}

function App() {

  // week-3 lab -song selection
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  )

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  )

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause()
    }
  };

  // week-3 creating an video/audio component
  const vidUrl = 'https://www.facebook.com/facebook/videos/10153231379946729';

  // week-3 using embedded assets
  const randomImageUrl = "https://picsum.photos/400/265"
  
  // week-3 single view conditional update
  const svtime = new Date();
  const svday = svtime.toLocaleString("en-us", { weekday: "long"});
  const svmorning = svtime.getHours() >= 6 && svtime.getHours() <= 12;
  let svdayMessage;

  if (svday.toLowerCase() === "monday") {
    svdayMessage = `Happy ${svday}`;
  } else if (svday.toLowerCase() === "tuesday") {
    svdayMessage = `${svday}, four days to go`;
  } else if (svday.toLowerCase() === "wednesday") {
    svdayMessage = `${svday}, half way there`;
  } else if (svday.toLowerCase() === "thursday") {
    svdayMessage = `${svday}, start planning the weekend`;
  } else if (svday.toLowerCase() === "friday") {
    svdayMessage = `Woo - hoo, the weekend is coming!`;
  } else {
    svdayMessage = "Stay calm and keep having fun";
  }

  // week-3 conditional rendering
  // if 'enabled' variable has a expression value, the message will display.
  let enabled = "true";

  // Managing state in React - Life the state up
  const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
      {fruitName: 'orange', id: 4},
  ]);

  // React State Management
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);

  // Expression as props
  const articleOrigin = "The Daily Code";

  return (    
    <div className="App">
      {/* week-3 lab -song selection */}
      <div>
        <button onClick={toggle1} style={{marginRight: "10px"}}>Caspian Tern 1</button>
        <button onClick={toggle2}>Caspian Tern 2</button>
      </div>

      {/* week-3 -create an audio / video component */}
      <div>
        <h1>React Player example</h1>
        <ReactPlayer 
          url={vidUrl}
          playing={false}
          volume={0.5}
        />
      </div>

      {/* week-3 media packages (first $ npm install react-player) */}
      <div>
        <MyVideo />
      </div>

      {/* week-3 using embedded assets */}
      <div>
        <h1>
          Task: add three images with some styling.
        </h1>
        <img height={200} style={{marginRight: "10px"}} src={rooftops} alt='A rooftop in New York using the import statement' />
        <img height={200} style={{marginRight: "20px"}} src={require("./assets/images/central-park.jpg")} alt='a central park using require function' />
        <img height={200} src={randomImageUrl} alt='a park providing a url' />
      </div>
    
      {/* week-3 single view conditional update */}
      <h1>{svdayMessage}</h1>
      {svmorning ? <h2>Have you had breakfast yet?</h2> : ''}

      {/* week-3 conditional components */}
      <LoginOutButton isLoggedIn={true} />

      {/* week-3 conditional rendering */}
      <div>
        {enabled && 
          <MovitationalMessage mday={new Date().getDay()} holiday={false} />}
      </div>

      {/* week-3 navbar (install React Router lib first $ npm -i react-router-dom@6) */}
      <nav className='nav'>
        <Link to="/" className="nav-item" style={{marginRight: "10px"}}>Home</Link>
        <Link to="/about-me" className="nav-item" style={{marginRight: "10px"}}>About Little Lemon</Link>
        <Link to="/contact-us" className="nav-item">Contact Us</Link>
      </nav>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>

      {/* Managing state in React */}
      <h1>Where should the state go? (Life-up state)</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />

      {/* React State Management */}
      <div>
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      </div>

      <h1>Wallet: {state.money}</h1>
      <div>
        <button style={{marginRight: "10px"}} onClick={() => dispatch({type: 'ride'})}>
          A new customer!
        </button>
        <button onClick={() => dispatch({type: 'fuel'})}>
          Refill the tank!
        </button>
      </div>

      {/* Prop drilling */}
      <div>
        <BusinessCard msg="Origin code here!" />
        <br></br>
        <LeveledBusinessCard msg="I have traveled a long way to get here!"/>
      </div>

      {/* Lab: Multiple components  */}
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />

      {/* Embedding a JS expression in an attribute */}
      <h1>Hello World Embedding a JS expression in an attribute!</h1>
      <Logo />

      {/* Expression as props */}
      <SocialMediaPostExpression
         title="Day 100 of Learning React Expression"
         author="Joe Maye"
         text="Here you go"
         read={true}
         timesRead={10 * 4 / 2 * 9 - 10}
         orign = {`This article was orginally published in ${articleOrigin}`}
         articleID = {createArticleId()}
      />

      {/* Functions in JSX */}
      <DisplayRandomNumber range={1000}/>

      {/* Ternary operators in JSX */}
      <DisplayUserName user=""/>

      {/* JSX syntax and the arrow function */}
      <SocialMediaPost
        title="Day 100 of Learning React"
        author="JW Kwong"
        text="I can't believe it's only benn 100 days since I started learning React" />
      <UrlLink url="www.google.com" />

      {/* Use CSS style rules from an external file and add it to a component as an internal style */}
      <Sidebar sidebarContent="Sidebar content here..." />

      {/* StylingJSX elements */}
      <Promo heading="SALE SALE SALE" promoSubHeading="Buy it now or miss out!"/>

      {/* Props and children */}
      <Highlighter children={<BlogEntry/>}/>
      {/* Below three lines codes are the same as the above code behavior */}
      {/* <Highlighter> */}
        {/* <BlogEntry /> */}
      {/* </Highlighter> */}
      <br></br>

      {/* Passing props */}
      <Heading firstName="Wendy" />
      <Heading firstName="Bob" />
    </div>
  );
}

export default App;
