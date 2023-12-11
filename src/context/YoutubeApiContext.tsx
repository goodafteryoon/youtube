import { ReactNode, createContext, useContext } from 'react';

// import Youtube from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';

interface YoutubeApiProviderProps {
  children: ReactNode;
}

export const YoutubeApiContext = createContext({ youtube: new FakeYoutube() });

const youtube = new FakeYoutube(); //new Youtube();

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
