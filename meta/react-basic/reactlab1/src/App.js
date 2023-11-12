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

// React State Management
const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money -50};
  return new Error();
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

const Link = props => 
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
  const articleOrigin = "The Daily Code";

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

  return (
    <div className="App">

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
      <Link url="www.google.com" />

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
