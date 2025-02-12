import React from "react";

function Pluses() {
    return(
        <section className="pluses">
            <div className="container">
                <div className="pluses__inner">
                    <div className="pluses__block">
                        <img src="../../pluses1.svg" alt="icon" />
                        <h4 className="pluses__block-title">Широкая география<br />перевозок</h4>
                        <p className="pluses__block-text">Надежные транспортные услуги по всему миру благодаря партнерской сети международных перевозчиков.</p>
                    </div>
                    <div className="pluses__block">
                        <img src="../../pluses2.svg" alt="icon" />
                        <h4 className="pluses__block-title">Комплексные<br />логистические решения</h4>
                        <p className="pluses__block-text">Полный цикл логистики – от экспедирования до последней мили. Мы предлагаем удобные и эффективные транспортные решения.</p>
                    </div>
                    <div className="pluses__block">
                        <img src="../../pluses3.svg" alt="icon" />
                        <h4 className="pluses__block-title">24/7 поддержка<br />клиентов</h4>
                        <p className="pluses__block-text">Наша команда всегда на связи, обеспечивая бесперебойную работу и оперативные ответы на любые вопросы.</p>
                    </div>
                    <div className="pluses__block">
                        <img src="../../pluses4.svg" alt="icon" />
                        <h4 className="pluses__block-title">Доставка<br />точно в срок</h4>
                        <p className="pluses__block-text">Гарантированные своевременные перевозки, чтобы ваша цепочка поставок работала без сбоев.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pluses;