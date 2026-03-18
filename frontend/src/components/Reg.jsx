import { useState } from "react";
import { useNavigate } from "react-router";
export function Reg(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    
    const nav = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('http://localhost:3000/reg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, password })
            })
            
            if (response.ok) {
                alert('Регистрация успешна!')
                setName(''); setEmail(''); setPhone(''); setPassword('')
                nav('/auth')
            }
        } catch (error) {
            console.error('Ошибка:', error)
        }
    }
    
    return(
        <div className="modal-auth">
            <div className="modal-dialog modal-dialog-auth">
                <button className="close-auth">&times;</button>
                <form onSubmit={handleSubmit}>
                    <fieldset className="modal-body">
                        <legend className="modal-title">Регистрация</legend>
                        
                        <label className="label-auth"><span>Имя</span><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></label>
                        <label className="label-auth"><span>Email</span><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  required/></label>
                        <label className="label-auth"><span>Телефон</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required /></label>
                        <label className="label-auth"><span>Пароль</span><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                    </fieldset>
                    
                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary" type="submit">Зарегистрироваться</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}