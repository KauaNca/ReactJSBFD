//import Login from "./components/props/Login.jsx"
//import Login from "./components/state/Login.jsx"
//import Login from "./components/CSS/Login.jsx"
//import Login from "./components/tailwind/Login.jsx"
//import Login from "./components/antd/Login.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaForm.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaFormOO.jsx"

// necessário apenas a partir da utilização de rotas para outras telas
import { BrowserRouter as Router } from 'react-router-dom';
//import AppRoutes from "./routes/AppRoutes.jsx";
import AppRoutes from './routes/AppRoutesBack.jsx';
//Importações para o calendário
import ptBR from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');
//ConfigProvider - define padrões de componentes
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}

export default App;
