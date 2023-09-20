import React from "react";

import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";

const myTheme = {
  // Theme object to extends default dark theme.
};

const imageEditorOptions = {
  // sort of option properties.
};

const App = () => (
  <ImageEditor
    includeUI={{
      //   loadImage: {
      //     path: "img/basketball.png",
      //     name: "SampleImage",
      //   },
      theme: myTheme,
      menu: ["shape", "filter"],
      initMenu: "filter",
      uiSize: {
        width: "1000px",
        height: "700px",
      },
      menuBarPosition: "bottom",
    }}
    cssMaxHeight={500}
    ya
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
);

export default App;
