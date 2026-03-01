// Components
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Footer from "./components/Footer.jsx";
import ProfileCard from "./components/ProfileCard.jsx"

// Next Steps
// In Search component or App if lifting state later
// // const [username, setUsername] = useState(""); // input value
// // const [profile, setProfile] = useState(null); // GitHub user data
// // const [repos, setRepos] = useState([]); // GitHub repos
// // const [loading, setLoading] = useState(false); // loading indicator
// // const [error, setError] = useState(""); // error messages

// Styles
import "./App.css";

// Modules
import {useState} from "react";

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <>
      <div>
        <Header />
        <Search setProfile={setProfile}/>

        <ProfileCard profile={profile}/>
        
        <Footer />

        
        
      </div>
    </>
  )
}

export default App
