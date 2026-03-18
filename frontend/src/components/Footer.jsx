export function Footer(){
    return(
        <footer className="footer">
		<div className="container">
			<div className="footer-block">
				<img src="src/img/icon/logo.svg" alt="logo" className="logo footer-logo" />
				<nav className="footer-nav">
					<a href="#" className="footer-link">Ресторанам </a>
					<a href="#" className="footer-link">Курьерам</a>
					<a href="#" className="footer-link">Пресс-центр</a>
					<a href="#" className="footer-link">Контакты</a>
				</nav>
				<div className="social-links">
					<a href="#" className="social-link"><img src="src/img/social/instagram.svg" alt="instagram" /></a>
					<a href="#" className="social-link"><img src="src/img/social/fb.svg" alt="facebook" /></a>
					<a href="#" className="social-link"><img src="src/img/social/vk.svg" alt="vk" /></a>
				</div>
				{/* <!-- /.social-links --> */}
			</div>
			{/* <!-- /.footer-block --> */}
		</div>
	</footer>
    )
}