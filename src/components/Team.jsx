import React from "react";

function Team() {
    return(
        <section className="team">
            <div className="container">
                <div className="team__inner">
                    <img className="team__img-middle" src="../../32d4932d9a6c9f4271624dff2d96dba6.png" alt="img" />
                    <div className="team__imgs">
                        <div className="team__triangle"></div>
                        <img className="team__img" src="../../8781a0b6c1ad62e9b1fc47bdf4150cfe.png" alt="img" />
                    </div>
                    <div className="team__info">
                        <h3 className="subtitle">Saruar Logistics</h3>
                        <h2 className="title">Наша команда — это сплоченный коллектив профессионалов</h2>
                        <p className="team__descrip">Мы гордимся нашими сотрудниками, ведь их квалификация, ответственность и внимание к деталям помогают нам предоставлять клиентам высокий уровень сервиса.</p>
                        <div className="team__blocks">
                            <div className="team__block">
                                <img className="team__block-icon" src="../../additional3.svg" alt="icon" />
                                <div className="team__block-info">
                                    <h4 className="team__block-title">Опыт и профессионализм</h4>
                                    <p className="team__block-descrip">Наши специалисты обладают многолетним опытом и эффективно решают любые логистические задачи.</p>
                                </div>
                            </div>
                            <div className="team__block">
                                <img className="team__block-icon" src="../../additional1.svg" alt="icon" />
                                <div className="team__block-info">
                                    <h4 className="team__block-title">Ответственность и точность</h4>
                                    <p className="team__block-descrip">Каждый сотрудник Saruar Logistics обеспечивает надежные перевозки и высокий уровень сервиса.</p>
                                </div>
                            </div>
                            <div className="team__block">
                                <img className="team__block-icon" src="../../additional2.svg" alt="icon" />
                                <div className="team__block-info">
                                    <h4 className="team__block-title">Индивидуальный подход</h4>
                                    <p className="team__block-descrip">Мы подбираем оптимальные решения с учетом потребностей бизнеса и клиентов.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;