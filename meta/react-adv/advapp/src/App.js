import './App.css';

// Using Context API case (global state) - Create a light-dark theme switcher
import { ThemeProvider, useTheme } from './Switch/ThemeContext';
import Switch from './Switch';

// Create a controlled form component and Lab-create a registeration form
import { useState } from 'react';

// Lab-create a registeration form
import { validateEmail } from './components/utils';

// Create a basic List component
import DessertsList from "./components/DessertsList";


// Using Context API case (global state) - Create a light-dark theme switcher
const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};


const Content = () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad corrupti sequi iusto unde repudiandae voluptatem quibusdam provident nemo nulla. Vero inventore voluptates quas tempora aut pariatur dolore molestiae magnam a error harum beatae est, minima perferendis iste suscipit aperiam odio ad eligendi accusantium! Deserunt error et perferendis minima maiores labore corporis dolor cum incidunt quibusdam reprehenderit dolorum illo itaque animi numquam optio corrupti voluptatum, dignissimos assumenda laborum doloremque sunt!
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className='Page'>
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};


// Lab-create a registeration form
const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters.</p>
  );
};

// map() - allows to create new arrays populated with the results of calling a transformation function on every elements
const array1 = [1, 4, 9, 16];

const kvArray = [
  { kvKey: 1, kvValue: 10 },
  { kvKey: 2, kvValue: 20 },
  { kvKey: 3, kvValue: 30 },
];

const kvCart = [ 5, 15, 25 ];

// Create a basic List component
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createAt: "2023-11-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createAt: "2022-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createAt: "2023-11-04",
  },
];

// Simple render list component
const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
];

function App() {

  // Using Context API case (global state) - Create a light-dark theme switcher
  const { theme } = useTheme();

  // Lab-create a registeration form in controlled component way
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => { 
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearRegForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    alert("Lab Reg Account created!");
    clearRegForm();
  };

  // Create a controlled form component using local state (useState) and onChange (to update the state change) props
  const [yourname, setYourname] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
  
    if (Number(score) <= 5) {
      if (comment.length <= 10) {
        alert("Please provide a comment at least 10 characters explaining why the experience was poor.");
        return;
      }
    }

    console.log("Form submited!");
    setComment("");
    setScore("10");
  }

  // map() sample
  // Pass a function to map
  const map1 = array1.map((xmap) => xmap * 2);
  // Expected output: Array [ 2, 4, 18, 32 ]
  console.log(map1);

  const reformattedArray = kvArray.map(({ kvKey, kvValue }) => ({ [kvKey]: kvValue }));
  // Expected output: Array [{ 1:10}, { 2: 20}, { 3: 30}]
  console.log("reformattedArray: ", reformattedArray);
  console.log("kvArray: ", kvArray);

  const kvTotal = kvCart.reduce((kvPrevValue, kvCurrentValue) => kvPrevValue + kvCurrentValue, 0);
  console.log("kvTotal after .reduce process:", kvTotal); // 45 = sum of kvCart [5,n 15, 25]

  const beforeTax = kvCart.map((kvCurrentValue) => kvCurrentValue);
  console.log("before withTax (current value * 1.2): ", beforeTax);

  const withTax = kvCart.map((kvCurrentValue) => kvCurrentValue * 1.2);
  console.log("withTax: ", withTax); // [6, 18, 30]


  // Simple render list component
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  return (
    <div 
      className='App'

      // Using Context API case (global state) - Create a light-dark theme switcher
      style={{
        background: theme === "light" ? "white" : "black",
      }}
    >

      {/* Using Context API case (global state) - Create a light-dark theme switcher */}
      <Header />
      <Page />

      {/* Lab - create a registeration form */}
      <form onSubmit={handleRegSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder='First name' 
            />
          </div>
          <div className='Field'>
            <label>Last name</label>
            <input 
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder='Last name'
            />
          </div>
          <div className='Field'>
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='Email address'
            />
          </div>
          <div className='Field'>
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              value={password.value}
              type='password'
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder='Password'
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className='Field'>
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>

      {/* Create a controlled form component using local state (useState), value prop, and onChange props */}
      <form onSubmit={handleFeedbackSubmit}>
        <fieldset>
          <h2><b>Feedback form</b></h2>
          <div className='Field'>
            <label htmlFor='yourname'>Your name:  </label>
            <input 
              id="yourname"
              type='text'
              placeholder='Your name'
              name="yourname"
              value={yourname}
              onChange={(e) => setYourname(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor='score'>Score: {score}⭐</label>
            <input
              id="score" 
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor='comment'>Comment: </label>
            <textarea 
            id="comment"
            color='grey'
            placeholder ='Enter your user experience.'
            name="comment"
            value={comment}
            onChange={e => setComment(e.target.value)} />
          </div>
          <button disabled={!yourname || !comment} type="submit">Submit</button>
        </fieldset>
      </form>

      {/* Lab - Create a list component */}
      <h2>Lab - List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <br></br>

      {/* Simple render list component */}
      <h2>Simple render list component</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
