import React, { useState, useEffect } from 'react'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Game/ga.loader.js",
  dataUrl: "Game/ga.data",
  frameworkUrl: "Game/ga.framework.js",
  codeUrl: "Game/ga.wasm",
});


function Watch() {
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);
  return (
    <div className="container">
      <p>Loading {progression * 100} percent...</p>
      < Unity className="unity" unityContext={unityContext}
       style={{ width: 1350, height: 600 }}/>
    </div>
  )
}

export default Watch;


