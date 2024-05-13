import {NavBar} from '../../components/navBar/NavBar'
import {Banner} from '../../components/banner/Banner'
import {Skills} from '../../components/skills/Skills'
import {Form} from '../../components/form/Form'
import {Footer} from '../../components/footer/Footer'
import {Projects} from '../../components/project/Projects'
function Start() {
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

export default Start;
