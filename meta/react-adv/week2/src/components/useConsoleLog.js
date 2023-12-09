// Create a custom hook
import { useEffect } from "react";

function useConsoleLog(varName) {
    useEffect(() => {
        console.log("varName: " + varName);
    }, [varName]);
}

export default useConsoleLog;