import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({ data, onDelete, checkIncreaseAndLike }) => {
    
    const element = data.map(elem => {
        const { id, ...propElem } = elem;
        return (
            <EmployersListItem
                key={id}
                {...propElem}
                onDelete={() => onDelete(id)}
                checkIncreaseAndLike={(e) => checkIncreaseAndLike(id, e.currentTarget.getAttribute('data-tag'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployersList;