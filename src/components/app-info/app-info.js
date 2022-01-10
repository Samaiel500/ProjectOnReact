
import './app-info.css';

const AppInfo = (props) => {   
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании JNS</h1>
            <h2>Общее число сотрудников: {props.emp}</h2>
            <h2>Премию получат: {props.inc}</h2>
        </div>
    );
}

export default AppInfo;