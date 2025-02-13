import React from "react";

function Additional() {
    return(
        <section className="additional">
            <div className="container">
                <div className="additional__inner">
                    <h2 className="title">Дополнительные услуги</h2>
                    <div className="additional__blocks">
                        <div className="additional__block">                        
                            <img src="../../additional1.svg" alt="icon" />
                            <h4 className="additional__block-title">Страхование грузов</h4>
                        </div>
                        <div className="additional__block">                        
                            <img src="../../additional2.svg" alt="icon" />
                            <h4 className="additional__block-title">Таможенное сопровождение</h4>
                        </div>
                        <div className="additional__block">                        
                            <img src="../../additional3.svg" alt="icon" />
                            <h4 className="additional__block-title">Хранение грузов</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Additional;