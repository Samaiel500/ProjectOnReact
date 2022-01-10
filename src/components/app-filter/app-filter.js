import './app-filter.css'

const AppFilter = (props) => {
    const btnData = [
        { data: 'data', value: 'Все сотрудники' },
        { data: 'like', value: 'На повышение' },
        { data: 'salary', value: 'З/П больше 1000$' }
    ]

    const button = btnData.map(({ data, value }) => {
        const classItems = props.value === data ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${classItems}`}
                type="button"
                data-check={data}
                onClick={(e) => props.updateValue(e.currentTarget.getAttribute('data-check'))}>
                    {value}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default AppFilter;