
import Header from '../../components/home/header/Header';
import Sidebar from '../../components/home/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Resultado from '../../components/home/resultado/Resultado';
import "./_homeScreen.scss";
function HomeScreen() {
  const [sidebar,toggleSideBar]=useState(false)
  const handleToggleSidebar=()=>{
    console.log("hola")
    toggleSideBar(prev=>!prev)
  }
  return (
    <div className='home__body'>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container border border-info'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className="app_main border border-warning">
          <Resultado />
        </Container>
      </div>
    </div>
  );
}

export default HomeScreen;