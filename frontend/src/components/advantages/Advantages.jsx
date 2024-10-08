import './advantages.scss'
const Advantages = () => {
	return (
		<div className="advantages" id='advantages'>
			<h2 className="advantages-title element-animation">Наши <span>преимущества</span></h2>
			<div className="advantages__list">
				<div className="advantages__item element-animation">
					<img src="../../../public/dopysl.svg" alt="" />
					<div className="advantages__item-desk">
						<h4>Дополнительные услуги</h4>
						<p>Предлагаем сертификацию и таможенное оформление</p>
					</div>
				</div>
				<div className="advantages__item element-animation">
					<img src="../../../public/kompleks.svg" alt="" />
					<div className="advantages__item-desk">
						<h4>Комплексный подход</h4>
						<p>Полный комплекс услуг по обработке грузов разного вида сложности</p>
					</div>
				</div>
				<div className="advantages__item element-animation">
					<img src="../../../public/individ.svg" alt="" />
					<div className="advantages__item-desk">
						<h4>Индивидуальный подход</h4>
						<p>Разрабатываем маршруты под конкретный проект с учетом имеющихся особенностей</p>
					</div>
				</div>
				<div className="advantages__item element-animation">
					<img src="../../../public/oplata.svg" alt="" />
					<div className="advantages__item-desk">
						<h4>Оплата за товар и услуги</h4>
						<p>возможность валютной оплаты за товар</p>
					</div>
				</div>
				<div className="advantages__item element-animation">
					<img src="../../../public/otkrit.svg" alt="" />
					<div className="advantages__item-desk">
						<h4>Открытость к диалогу</h4>
						<p>Будем рады ответить на вопросы, посчитать конкретные запросы</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages