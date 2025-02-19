import React from "react";

function Numbers() {
    return(
        <section className="numbers">
            <div className="container">
                <div className="numbers__inner">
                    <div className="numbers__block">
                        <p className="numbers__title">50+</p>
                        <p className="numbers__text">современных фур,
                        соответствующих международным стандартам</p>
                    </div>
                    <div className="numbers__block">
                        <p className="numbers__title">30+</p>
                        <p className="numbers__text">стран доставки по всему миру</p>
                    </div>
                    <div className="numbers__block">
                        <p className="numbers__title">25 000+</p>
                        <p className="numbers__text">успешных перевозок в год</p>
                    </div>
                    <div className="numbers__block">
                        <p className="numbers__title">2014 г</p>
                        <p className="numbers__text">Более 10 лет опыта в сфере логистики.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Numbers;