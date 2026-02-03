import { createContext, useContext, useState } from "react";
import response1 from "../data/response1.json";
import response2 from "../data/response2.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataset, setDataset] = useState(response1);

  const switchDataset = (type) => {
    setDataset(type === "IMF" ? response2 : response1);
  };

  return (
    <DataContext.Provider value={{ dataset, switchDataset }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
