import { useState, useEffect } from "react"
import "/src/style.css"

export function Cards({ searchText = '' }){
    const [partners, setPartners] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('http://localhost:3000/partners')
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных')
                }
                const data = await response.json()
                setPartners(data)
                setError(null)
            } catch (error) {
                console.error('Ошибка загрузки:', error)
                setError(error.message)
            } 
        }

        fetchPartners()
    }, [])

    const filteredPartners = partners.filter(partner => 
        partner.name.toLowerCase().includes(searchText.toLowerCase())
    )

    // if (loading) {
    //     return <div className="loading">Загрузка...</div>
    // }

    // if (error) {
    //     return <div className="error">Ошибка: {error}</div>
    // }

    return(
        <div className="cards cards-restaurants">
            {filteredPartners.map(partner => (
                <a key={partner.id} href="restaurant.html" className="card card-restaurant">
                    <img src={partner.image} alt={partner.name} className="card-image" />
                    <div className="card-text">
                        <div className="card-heading">
                            <h3 className="card-title">{partner.name}</h3>
                            <span className="card-tag tag">{partner.time_of_delivery} мин</span>
                        </div>
                        
                        <div className="card-info">
                            <div className="rating">
                                {partner.stars}
                            </div>
                            <div className="price">От {partner.price}₽</div>
                            <div className="category">{partner.kitchen}</div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}