import { Chatbot } from "./components/chatbot-components/Chatbot"
import { Header } from "./components/Header"
import { Welcome_section } from "./components/Welcome_section";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {


  return (
    <>
      <Header />
      <Welcome_section />
      <Chatbot />
      <About />
      <Footer />
    </>
  )
}

export default App
