import { Component } from 'react'
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
import NormalUserStoreListItem from '../NormalUserStoreListItem'
import './index.css'

class NormalUser extends Component {
    state = { storesList: [] }

    componentDidMount() {
        this.getStoresList()
    }

    getStoresList = async () => {
        const jwtToken = Cookies.get("jwt_token")
        const apiUrl = 'https://store-ratings-app-backend.onrender.com/user/stores'
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            }
        }

        const response = await fetch(apiUrl, options)


        if (response.ok) {
            const data = await response.json()

            this.setState({ storesList: data })
        }
    }

    render() {
        const { storesList } = this.state

        return (
            <>
                <Navbar />
                <div className='bg-container'>
                    <div className='res-container'>
                        <h1 className='align-self-start mb-3'>Stores</h1>
                        <ul className='admin-list-container'>
                            {storesList.map(eachStore => (
                                <NormalUserStoreListItem key={eachStore.id} store={eachStore} />
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default NormalUser
