import './employers-list-item.css';

const EmployersListItem = (props) => {
    const { name, salary, onDelete, checkIncreaseAndLike, increase, like } = props;
    let classUse = "list-group-item d-flex justify-content-between";
    if (increase) {
        classUse += ' increase'
    }
    if (like) {
        classUse += " like"
    }

    return (
        <li className={classUse} >
            <span className="list-group-item-label" onClick={checkIncreaseAndLike} data-tag="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={checkIncreaseAndLike}
                    data-tag="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;