import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import { SimpleButton } from '../../components/simpleButton/simpleButton'
import { Sidebar } from '../../components/navBar/sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './_profileScreen.scss'
import accountIcon from '../../assets/img/account-profile.svg'
import coursesIcon from '../../assets/img/cursos.svg'
import { getCookie, eraseCookie } from "../../utils/cookie";
import { auth, db } from "../../components/auth/firebase";
import { collection, updateDoc, query, doc, getDoc, deleteDoc } from "firebase/firestore";
import { Collection } from 'react-bootstrap-icons'


function ProfileScreen() {
    const navigate = useNavigate();
    const userID = getCookie('sesion');
    const [userData, setDocument] = useState([]);
    const [sidebar, toggleSideBar] = useState(false);
    const [name, setName] = useState('Nombre Apellido');
    const [email, setEmail] = useState('example@email.com');
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
    const [showPopup2, setShowPopup2] = useState(false); // Estado para controlar el popup
    
    useEffect(() => {
        if (!userID) {
            navigate("/");
        }
    }, [navigate]);
    const documentRef = query(collection(db, 'Users'));

    const obtenerDocumento = async (id) => {
        try {
            const docRef = doc(db, 'Users', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setDocument(data);

                let full_name = data.firstName;
                if (data.lastName) {
                    full_name += ` ${data.lastName}`;
                }
                setName(full_name);
                setEmail(data.email);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error al obtener el documento específico: ", error);
        }
    };

    useEffect(() => {
        obtenerDocumento(userID);
    }, []);

    let full_name;
    if(userData.lastname)
        full_name = userData.firstName + userData.lastname;
    else
        full_name = userData.firstName


    const handleToggleSidebar = () => {
        toggleSideBar(prev => !prev)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLinkClick = (event) => {
        setShowPopup(prev => !prev); 
    }

    const cerrarSesion = async () => {
        await auth.signOut();
        eraseCookie('sesion')
        navigate("/");
    }

    const handleCancel = () => {
        setShowPopup(prev => !prev); 
    }

    const handleCancel2 = () => {
        setShowPopup2(prev => !prev); 
    }

    const handleDelete = async () => {
        try {
            const user = auth.currentUser;
            await user.delete();

            // Eliminar el documento de 'Users'
            const userDocRef = doc(db, 'Users', userID);
            await deleteDoc(userDocRef);

            try{
                const asesoriasDocRef = doc(db, 'Asesorias', userID);
                await deleteDoc(asesoriasDocRef);
            }
            catch (error) {
            }
            setShowPopup(false);
            eraseCookie('sesion');
            navigate("/"); 
        } catch (error) {
            console.error('Error al eliminar cuenta:', error);
            alert('Hubo un error al eliminar la cuenta');
        }
    };

    const handleSave = async () => {
        try {
            const [firstName, ...lastNameArray] = name.split(' ');
            const lastName = lastNameArray.join(' ');
            const docRef = doc(db, 'Users', userID);
            await updateDoc(docRef, {
                firstName: firstName || '',
                lastName: lastName || ''
            });
            setShowPopup2(true);
        } catch (error) {
            console.error('Error actualizando el nombre:', error);
            alert('Hubo un error actualizando el nombre');
        }
    };

    return (
        <div className='profileScreen'>
            <NavBar type1={true} type2={false} handleToggleSidebar={handleToggleSidebar} />
            <div>
                <Sidebar sidebar={sidebar} type1={true} type2={false} />
                <div className={sidebar ? "blur" : ""}></div>
            </div>
            <div className='overflowx'>
                <div className='profileScreen-container'>
                    <div className='profileScreen-container-sidenav'>
                        <h6>Configuraciones</h6>
                        <a href='#' className='profileScreen-container-sidenav-contCoursesSelect'><img src={accountIcon} alt='Perfil' className='profileScreen-container-sidenav-iconAccount'></img>Tu Perfil</a>
                        <a href='#' className='profileScreen-container-sidenav-contCourses'><img src={coursesIcon} alt='Cursos Publicados' className='profileScreen-container-sidenav-iconCourses'></img><div className='profileScreen-container-sidenav-contCourses-text'></div>Cursos publicados</a>
                        <a className= 'profileScreen-container-sidenav-close' href='#' onClick={cerrarSesion}><div className='profileScreen-container-sidenav-close-text'></div>Cerrar sesion</a>
                        <a className= 'profileScreen-container-sidenav-delete' href='#' onClick={handleLinkClick}><div className='profileScreen-container-sidenav-delete-text'></div>Eliminar cuenta</a>
                    </div>
                    <div className='profileScreen-container-content'>
                        <h5>Tu Perfil</h5>
                        <hr className='profileScreen-container-content-line'></hr>
                        <h6>Nombre</h6>
                        <div className='profileScreen-container-content-text'>El nombre asociado a esta cuenta.</div>
                        <input type='text' className='profileScreen-container-content-unlocked' value={name} onChange={handleNameChange}></input>
                        <h6>Correo</h6>
                        <div className='profileScreen-container-content-text'>El correo asociado a esta cuenta.</div>
                        <input type='text' className='profileScreen-container-content-locked' value={email}></input>
                        <div className='profileScreen-container-content-button'><button onClick={handleSave}><p className='profileScreen-container-content-button-text'>Guardar cambios</p></button></div>
                    </div>
                    {showPopup && (
                        <div className="profileScreen-container-popup">
                            <div className="profileScreen-container-popup-content">
                                <h3>¿Desea eliminar su cuenta?</h3>
                                <button onClick={handleCancel}>Cancelar</button>
                                <button onClick={handleDelete}>Eliminar</button>
                            </div>
                        </div>
                    )}
                    {showPopup2 && (
                        <div className="profileScreen-container-popup">
                            <div className="profileScreen-container-popup-content">
                                <h3>Los datos se actulizaron correctamente</h3>
                                <button onClick={handleCancel2}>OK</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>

    )


}
export default ProfileScreen;