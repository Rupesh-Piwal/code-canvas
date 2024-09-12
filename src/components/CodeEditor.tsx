"use client";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

const CodeEditor = () => {
  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      //   defaultSize={{
      //     width: width,
      //     height: height || 500,
      //   }}
    >
      <div>
        <AceEditor />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
