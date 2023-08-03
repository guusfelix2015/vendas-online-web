import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalData {
  accessToken?: string;
}

interface GlobalContext {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContext);

interface GLobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GLobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({
    accessToken: '',
  });
  return <GlobalContext.Provider value={{ globalData, setGlobalData }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setAcessToken = (accessToken: string) => {
    setGlobalData({ ...globalData, accessToken });
  };

  return {
    accessToken: globalData.accessToken,
    setAcessToken,
  };
};
