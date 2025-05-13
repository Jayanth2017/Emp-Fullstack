import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import HeaderComponent from "./components/HeaderComponet"; // Make sure to import HeaderComponent
import FooterComponent from "./components/FooterComponent"; // Make sure to import FooterComponent
import ListEmployeeComponent from "./components/ListEmployeeComponents"; // Import ListEmployeeComponent
import AddEmployeeComponent from "./components/AddEmployeeComponents"; // Import AddEmployeeComponent

function App() {
  return (
    <div>
      <Router>
        {" "}
        {/* Wrap your app with Router */}
        <HeaderComponent />
        <div className="container">
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
            <Route path="/" element={<ListEmployeeComponent />} />{" "}
            {/* Use element instead of component */}
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route
              path="/edit-employee/:id"
              element={<AddEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;