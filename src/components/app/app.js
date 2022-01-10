import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John S.', salary: 800, increase: false, like: false, id:1 },
                { name: 'Greck P.', salary: 1200, increase: false, like: false, id:2 },
                { name: 'Frenk K.', salary: 3000, increase: false, like: false, id: 3 },
                { name: 'Ricki L.', salary: 750, increase: false, like: false, id: 4 },
                { name: 'Erick K.', salary: 4000, increase: false, like: false, id:5 }
            ],
            term: '',
            value: 'data'
        }
        this.maxID = 6;
    }

    deleteDataItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newObj = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxID++
        }
        this.setState(({ data }) => {
            return {
                data: [...data, newObj]
            }
        })
    }

    checkIncreaseAndLike = (id, props) => {
        this.setState(({ data }) => ({
            data: data.map(elem => {
                if (elem.id === id) {
                    return { ...elem, [props]: !elem[props] };
                }
                return elem;
            })
        }))
    }

    serchItem = (arrData, term) => {
        if (term.length === 0) {
            return arrData
        }
        return arrData.filter(elem => {
            return elem.name.indexOf(term) > -1
        })
    }

    updateTerm = (term) => {
        this.setState({term})
    }
    
    checkLike = (data, value) => {
        if (value === 'data') {
            return data
        } else if (value === 'like') {
            return data.filter(elem => elem.like)
        } else if (value === 'salary') {
            return data.filter(elem => elem.salary > 1000)
        }
    }

    updateValue = (value) => {
        this.setState({value})
    }

    render() {
        const { data, term, value } = this.state;
        const emp = this.state.data.length;
        const inc = this.state.data.filter(elem => elem.increase).length;
        const newData = this.serchItem(data, term);
        const dataFilter = this.checkLike(newData, value)
        return (
            <div className="app">
                <AppInfo
                    emp={emp}
                    inc={inc}/>
                
                <div className="search-panel">
                    <SearchPanel updateTerm={this.updateTerm}/>
                    <AppFilter
                        updateValue={this.updateValue}
                        value={value}/>
                </div>

                <EmployersList
                    data={dataFilter}
                    onDelete={this.deleteDataItem}
                    checkIncreaseAndLike={this.checkIncreaseAndLike}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    } 
}

export default App;