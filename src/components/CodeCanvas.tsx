"use client";

import BackgroundSelector from "@/components/BackgroundSelector";
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import PaddingSelector from "@/components/PaddingSelector";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { useRef, useState } from "react";

// import { getExtension, initialCode } from "@/utils/utilities";

const CodeCanvas = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings] = useState(["1rem", "2rem", "3rem", "4rem"]); // No need for setPaddings

  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if (editorElem) {
      //hide elemnets
      const handleElems = document.querySelectorAll<HTMLDivElement>(".handle");
      const cursorElem = document.querySelector<HTMLDivElement>(".ace_cursor");
      const codetitle = document.querySelector<HTMLDivElement>(".code-title");
      const codeEditor = document.querySelector<HTMLDivElement>(".ace_editor");

      handleElems.forEach((elem) => {
        elem.style.display = "none";
      });
      if (cursorElem) cursorElem.style.display = "none";
      if (codetitle) codetitle.style.boxShadow = "none";
      if (codeEditor) codeEditor.style.boxShadow = "none";

      const canvas = await html2canvas(editorElem);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      // Show elements back
      handleElems.forEach((elem) => {
        elem.style.display = "block";
      });
      if (cursorElem) cursorElem.style.display = "block";
      if (codetitle)
        codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
      if (codeEditor)
        codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
    }
  };

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
          background={background}
          setBackground={setBackground}
        />

        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
            font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
            duration-300"
            onClick={exportPng}
          >
            <Download />
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

export default CodeCanvas;
