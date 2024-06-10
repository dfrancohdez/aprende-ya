import { NavBar } from '../../components/navBar/NavBar'
import { Banner } from '../../components/principal/banner/Banner'
import { Skills } from '../../components/skills/Skills'
import { Form } from '../../components/form/Form'
import { Footer } from '../../components/footer/Footer'
import { Projects } from '../../components/project/Projects'
import { Materias } from '../../components/principal/materias/Materias'
import './_principal.scss'
import { Recomendaciones } from '../../components/principal/recomendaciones/Recomendaciones'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState } from 'react'

function Principal() {
  const [sidebar, toggleSideBar] = useState(false)
  const handleToggleSidebar = () => {
    // console.log("hola")
    toggleSideBar(prev => !prev)
  }
  return (
    <div>
      <NavBar type1={false} type2={true} handleToggleSidebar={handleToggleSidebar} />
      <div>

        <Sidebar sidebar={sidebar} type1={false} type2={true} />
        <div className={sidebar ? "blur" : ""}>
        </div>
        <div className='overflowx'>
          <Banner />
          <div className='principal'>
            <Materias />
            <Recomendaciones />
          </div>
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default Principal;
