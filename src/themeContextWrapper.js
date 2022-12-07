import React, { useContext,useState } from "react";

export const ThemeWrapper = React.createContext();
export const ThemeToggel = React.createContext();

export function UseThemeWrapper() {
    return useContext(ThemeWrapper);
} 
export function UseToggel() {
    return useContext(ThemeToggel);
}

export default function ThemeContext({children}) {
    const [themeName, setThemename] = useState(1);

    function clickUpdating(e) {
        console.dir(e.target.value);
        setThemename(e.target.value);
    }

    return(
        <ThemeWrapper.Provider value={themeName}>
            <ThemeToggel.Provider value={clickUpdating}>
                {children}
            </ThemeToggel.Provider>
        </ThemeWrapper.Provider>
    )
}