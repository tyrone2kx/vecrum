import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidemenu from "./components/SideMenu/Sidemenu";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import Header from "./components/SideMenu/components/Header";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && <Header pad isFixed toggleMenu={toggleMenu} bottomBorder />}
      <div className="md:h-screen overflow-hidden md:flex flex-col bg-pageBg w-full md:flex-row">
        <Sidemenu toggleMenu={toggleMenu} isOpen={isOpen} />
        {!isOpen && (
          <div className="mt-12 md:mt-0 overflow-y-auto p-4 pt-3 w-full ">
            <SettingsScreen />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
