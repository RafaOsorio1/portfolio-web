import "./App.css";
import { ContactMe } from "./Components/Contact/ContactMe";
import { Description } from "./Components/Description/Description";
import { Header } from "./Components/Header/Header";
import { PostsRecents } from "./Components/Posts/PostsRecents";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
      <main className="App">
        <Header></Header>
        <section className="section-app">
          <Description></Description>
        </section>
        <Projects></Projects>
        <PostsRecents></PostsRecents>
        <ContactMe></ContactMe>
      </main>
  );
}

export default App;
