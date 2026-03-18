import { useState } from "react"
import { Cards } from "./Cards"
import "/src/style.css"

export function Main(){
    const [searchText, setSearchText] = useState('')

    return(
        <main className="main">
            <div className="container">
                <section className="container-promo">
                    <section className="promo pizza">
                        <h1 className="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
                        <p className="promo-text">
                            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                        </p>
                    </section>
                </section>
                
                <section className="restaurants">
                    <div className="section-heading">
                        <h2 className="section-title">Рестораны</h2>
                        <label className="search">
                            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="input input-search" placeholder="Поиск блюд и ресторанов" />
                        </label>
                    </div>
                    
                    <Cards searchText={searchText} />
                </section>
            </div>
        </main>
    )
}