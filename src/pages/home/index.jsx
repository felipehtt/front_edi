import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        <div className='pagina-home'>

            <div>

                <h1>- HOME</h1>

                <h2>Intenções de Festas</h2>

                <img src="" alt="" />

                <ul>
                    <li><Link to='/consultar'>Consultar intenções</Link></li>
                    <li><Link to='/cadastrar'>Cadastrar Intenção</Link></li>
                </ul>

            </div>

        </div>

    );

}