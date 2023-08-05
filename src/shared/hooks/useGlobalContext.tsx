import { createContext, ReactNode, useContext, useState } from 'react';

import { UserType } from '../../modules/login/types/UserTypes';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}
interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
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
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return <GlobalContext.Provider value={{ globalData, setGlobalData }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user,
    });
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
    user: globalData.user,
    setUser,
    setNotification,
  };
};
