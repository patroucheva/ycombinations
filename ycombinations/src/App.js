import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Navigation Bar */}
        <div id="navbar">
          <img src={logo} alt="Logo" style={{ width: '55px', height: '55px' }} />
          <a href="#about">About</a>
          <a href="#combinations">Combinations</a>
        </div>

        {/* Hero Section */}
        <div id="hero">
          <h1>Startup Directory</h1>
          <p>Description of the website goes here...</p>
        </div>

        {/* Main Content Container */}
        <div className="content">
          {/* Sidebar */}
          <div id="sidebar">
            Sidebar content here
          </div>

          {/* Right Content Container */}
          <div className="right-content">
            {/* Sort By Dropdown */}
            <div id="sort-by">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort">
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="relevance">Relevance</option>
              </select>
            </div>

            {/* Search Bar */}
            <div id="search-bar">
              <input type="text" placeholder="Search..." />
            </div>

            {/* Pagination */}
            <div id="showing-text">
              Showing { } of 1,000+ companies
            </div>

            {/* Companies List */}
            <div id="companies">
              Companies list here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
