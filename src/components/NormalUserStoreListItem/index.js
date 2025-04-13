import './index.css'

const NormalUserStoreListItem = props => {
    const { store } = props
    const { name, email, address, rating, user_rating } = store
    return (
        <li className='store-list-item'>
            <p>Store Name: {name}</p>
            <p>Owner Mail: {email}</p>
            <p>Address: {address}</p>
            <p>Store Overall Rating: {rating}</p>
            <p>User Rating: {user_rating}</p>
            <p>Rate:</p>
            
        </li>
    )
}

export default NormalUserStoreListItem