import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({
  language,
  setLanguage,
  setActiveIcon,
}: LanguageSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div>
        <p className="py-[5px] text-sm font-medium">Language</p>
        <div
          onClick={toggleDropdown}
          className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out"
        >
          {language}
          <ChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu w-[120px] top-[94px]">
            {languages.map((lang, i) => {
              return (
                <div key={i}>
                  <button
                    className="dropdown-item text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                    onClick={() => {
                      handleLanguageChange(lang.name);
                      toggleDropdown();
                    }}
                  >
                    {lang.name}
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

export default LanguageSelector;
