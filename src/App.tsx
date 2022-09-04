import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidemenu from "./components/SideMenu/Sidemenu";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import Header from "./components/SideMenu/components/Header";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  const isMobile = useIsMobile();

  return (
    <>
    {isMobile && <Header pad isFixed toggleMenu={toggleMenu} />}
      <div className="md:h-screen overflow-hidden md:flex flex-col bg-pageBg w-full md:flex-row">
        <Sidemenu toggleMenu={toggleMenu} isOpen={isOpen} />
        {!isOpen && 
        <div className="mt-10 md:mt-0 overflow-y-auto p-4 pt-3 w-full ">
          <SettingsScreen />
        </div>}
      </div>
    </>
  );
}

export default App;
