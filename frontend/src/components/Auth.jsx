import { useState } from "react"
import { useNavigate } from "react-router"

export function Auth(){
    const nav = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('http://localhost:3000/loginUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            
            const data = await response.json()
            
            if (data && data.length > 0) {
                localStorage.setItem('user', JSON.stringify(data[0]))
                nav('/')
                window.location.reload()
            }
        } catch (err) {
            console.error(err)
        }
    }
    
    return(
        <div className="modal-auth">
            <div className="modal-dialog modal-dialog-auth">
                <button className="close-auth" onClick={() => nav('/')}>&times;</button>
                <form onSubmit={handleSubmit}>
                    <fieldset className="modal-body">
                        <legend className="modal-title">Авторизация</legend>
                        
                        <label className="label-auth"><span>Email</span><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                        <label className="label-auth"><span>Пароль</span><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                        
                    </fieldset>
                    
                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary" type="submit">Войти</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}