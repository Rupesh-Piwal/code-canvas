import { themes } from "@/utils/utilities";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div
          onClick={toggleDropdown}
          className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out"
        >
          {theme}
          <ChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu w-[120px] top-[94px]">
            {themes.map((theme, i) => {
              return (
                <div key={i}>
                  <button
                    className="dropdown-item text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                    onClick={() => {
                      handleThemeChange(theme);
                      toggleDropdown();
                    }}
                  >
                    {theme}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default ThemeSelector;
