import React from "react";

import "./index.css";
import CourseDashboard from "./components/CourseDashboard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <CourseDashboard />
    </div>
  );
};

export default App;