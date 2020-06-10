import api from './api'

class DataApi extends React.Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.loadingData()
    }

    loadingData = async () => {
        const response = await api.get('itens')
        this.setState({ items: response.data })
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DataApi