"use client";

import BackgroundSelector from "@/components/BackgroundSelector";
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import PaddingSelector from "@/components/PaddingSelector";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useRef, useState } from "react";

// import { getExtension, initialCode } from "@/utils/utilities";

const page = () => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  return (
    <main className=" h-[100vh] flex flex-col items-center justify-between">
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
       z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />

        <ThemeSelector theme={theme} setTheme={setTheme} />

        <BackgroundSelector
        // background={background}
        // setBackground={setBackground}
        />

        <PaddingSelector
        // paddings={paddings}
        // currentPadding={currentPadding}
        // setCurrentPadding={setCurrentPadding}
        />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
            font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
            duration-300"
            // onClick={exportPng}
          >
            {/* <Download /> */}
            Export PNG
          </button>
        </div>
      </header>
      <div className="code-editor-ref mt-[14rem]" ref={editorRef}>
        <CodeEditor
          language={language}
          theme={theme}
          background={background}
          icon={activeIcon}
          currentPadding={currentPadding}
        />
      </div>
    </main>
  );
};

export default page;
