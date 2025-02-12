import React from "react";

function News() {
    return(
        <section className="news">
            <div className="container">
                <div className="news__inner">
                    <h2 className="title">Новости</h2>
                    <div className="news__blocks">
                    <div className="news__block">
                    <img className="news__img" src="../../30458c10bece1f6288dc3965c775fb5b.png" alt="img" />
                        <div className="news__info">
                            <div className="news__info-category">Рубрика 1</div>
                            <h4 className="news__info-title">Что такое мультимодальные перевозки и кому они подходят?</h4>
                            <p className="news__info-date">06 января, 2025</p>
                        </div>
                    </div>
                    <div className="news__block">
                    <img className="news__img" src="../../bf542d485fbae04004be2a7e86486ff9.png" alt="img" />
                        <div className="news__info">
                            <div className="news__info-category">Рубрика 2</div>
                            <h4 className="news__info-title">5 причин выбрать Saruar Logistics для доставки грузов из Китая</h4>
                            <p className="news__info-date">August 29, 2024</p>
                        </div>
                    </div>
                    <div className="news__block">
                    <img className="news__img" src="../../616b6baefa48322ddcf6cd99b1f7e7ab.png" alt="img" />
                        <div className="news__info">
                            <div className="news__info-category">Рубрика 1</div>
                            <h4 className="news__info-title">Как мы работаем с<br />рефрижераторными<br />перевозками?</h4>
                        </div>
                    </div>
                    </div>
                    <a href="#">
                        <div className="main-btn">
                            <span>ВСЕ НОВОСТИ</span>                          
                            <svg className="main-btn__arrow" width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1858 11.2474C22.834 11.2474 22.6111 11.2474 22.3883 11.2474C15.5511 11.2474 8.71386 11.2474 1.8649 11.2474C1.66553 11.2474 1.47789 11.2592 1.27852 11.2474C0.50449 11.1888 0.0119279 10.708 0.000200284 9.99259C-0.0115274 9.28893 0.492762 8.77291 1.25506 8.726C1.43098 8.71427 1.60689 8.726 1.78281 8.726C8.64349 8.726 15.5042 8.726 22.3649 8.726C22.5877 8.726 22.8222 8.726 23.1741 8.726C22.9512 8.49145 22.8222 8.32726 22.6815 8.18653C20.6878 6.19283 18.7058 4.21085 16.7121 2.21715C16.243 1.73631 16.1375 1.18511 16.4072 0.669097C16.6769 0.164807 17.1226 -0.0814739 17.6738 0.0240751C17.9553 0.0827134 18.2719 0.246901 18.4713 0.446271C21.3446 3.29609 24.2061 6.15764 27.0677 9.03092C27.6775 9.64076 27.6775 10.3327 27.0677 10.9425C24.1944 13.8275 21.3211 16.7008 18.4478 19.5624C17.8849 20.1253 17.1226 20.137 16.6183 19.6445C16.0788 19.1167 16.1023 18.3779 16.7004 17.7798C18.6824 15.7861 20.6761 13.7924 22.6698 11.8104C22.8105 11.6579 22.9512 11.5055 23.1858 11.2474Z" fill="#CC1C19"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default News;