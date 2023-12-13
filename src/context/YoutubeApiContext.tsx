import { ReactNode, createContext, useContext } from 'react';

import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

interface YoutubeApiProviderProps {
  children: ReactNode;
}

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export const YoutubeApiContext = createContext({
  youtube: new Youtube(client),
});

export function YoutubeApiProvider({ children }: YoutubeApiProviderProps) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
