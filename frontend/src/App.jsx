import Header from "./sections/Header";
import Router from "./router/Router";
import { LoadingBarContainer } from "react-top-loading-bar";
import {Toaster} from 'sonner'

const App = () => {
  return (
    <LoadingBarContainer>
      <main className="font-clash w-full h-dvh ">
        <Toaster richColors/>
        <Header />
        <Router />
      </main>
    </LoadingBarContainer>
  );
};

export default App;
