import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { SimpleButton } from '../../components/simpleButton/simpleButton'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import './_FAQ.scss'
import { useState } from 'react'

function FaqScreen() {
    const [sidebar, toggleSideBar] = useState(false)


    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }


    return (
        <div className='faqScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='overflowx'>
                <div className='faqScreen-container'>
                    <div className='faqScreen-container-content'>
                        <h3>Preguntas frecuentes</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )


}
export default FaqScreen;