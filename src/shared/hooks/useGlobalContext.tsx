import { createContext, ReactNode, useContext, useState } from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}
interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
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

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  return {
    notification: globalData?.notification,
    accessToken: globalData?.accessToken,
    setAcessToken,
    setNotification,
  };
};
