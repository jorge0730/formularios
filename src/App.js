import './App.css';
import LoginForm from './componentes/loginForm';
import RegistroForm from './componentes/registroForm';

function App() {

  
  return (
    <div className="bg-light vh-100">
      <div className='container h-100'>
        <div className='row aling-items-center h-100'>
          <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
            <h2 className='text-center'>INICIO DE SESIÓN</h2>
            <LoginForm/>
            <RegistroForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
