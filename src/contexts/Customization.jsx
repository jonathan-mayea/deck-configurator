/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const deckStains = [
  {
    map: "./textures/stains/texture-stain-natural.png",
    name: "natural",
  },
  {
    map: "./textures/stains/texture-stain-teal.png",
    name: "teal",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setmaterial] = useState("stains");
  const [deckStain, setDeckStain] = useState(deckStains[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setmaterial,
        deckStain,
        setDeckStain,
        deckStains,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
