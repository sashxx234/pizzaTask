import { useNavigate } from "react-router"
import { useState, useEffect } from "react"

export function Header(){
    const nav = useNavigate()
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            setUser(JSON.parse(userData))
        }
    }, [])
    
    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        nav('/')
    }
    
    return(
        <div className="container">
            <header className="header">
                <a className="logo">
                    <img src="src/img/icon/logo.svg" alt="Logo" />
                </a>
                <label className="address">
                    <input type="text" className="input input-address" placeholder="Адрес доставки" />
                </label>
                <div className="buttons">
                    {user ? (
                        <>
                            <span className="user-name">{user.name}</span>
                            <button className="button button-primary button-profile" onClick={() => nav('/profile')}>
                                <span className="button-text">Профиль</span>
                            </button>
                            <button className="button button-primary button-out" onClick={handleLogout}>
                                <span className="button-text">Выйти</span>
                                <span className="button-out-svg"></span>
                            </button>
                        </>
                    ) : (
                        <button className="button button-primary button-auth" onClick={() => nav('/reg')}>
                            <span className="button-auth-svg"></span>
                            <span className="button-text">Войти</span>
                        </button>
                    )}
                    <button className="button button-cart" id="cart-button">
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Корзина</span>
                    </button>
                </div>
            </header>
        </div>
    )
}