import ReactDOM from 'react-dom/client';
import AppRouter from '../../kasa/src/components/AppRouter';
import '../../kasa/src/styles/index.scss'; 

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<AppRouter />);
