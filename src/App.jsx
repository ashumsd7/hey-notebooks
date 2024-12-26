import { RhButton } from "@rhythm-ui/react";
import "./App.css";
import Router from "./routes";

function App() {
  return (
    <div className="relative">
      <Router />




      <RhButton
        className="fixed right-4 bottom-4 hover:scale-105 transition-all duration-300 
             bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600
             shadow-lg hover:shadow-xl rounded-full px-4 py-2 
             flex items-center gap-2 group"
        onClick={() => {
          window.open("https://heyashu.in", "_blank");
        }}
      >
        <span className="text-white font-medium">Crafted with ❤️ by</span>
        <span
          className="font-bold text-white group-hover:underline 
                   inline-flex items-center gap-1"
        >
          Ashu
          <span className="inline-block group-hover:rotate-12 transition-transform duration-300">
            💻
          </span>
        </span>
      </RhButton>
    </div>
  );
}

export default App;
