import {NavBar} from './components/NavBar'
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Form} from './components/Form'
import {Footer} from './components/Footer'
import {Projects} from './components/Projects'
function GetStart() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  )
}

export default GetStart;
