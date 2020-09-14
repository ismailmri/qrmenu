import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";


if (typeof window === 'undefined')
const unityContext = new UnityContext({
    loaderUrl: "/placeObj/Build/placeObj.loader.js",
    dataUrl: "/placeObj/Build/placeObj.data",
    frameworkUrl: "/placeObj/Build/placeObj.framework.js",
    codeUrl: "/placeObj/Build/placeObj.wasm",
});

 const UnityModel = () => {
    
    return <Unity unityContext={unityContext} />;
 }

 export default UnityModel