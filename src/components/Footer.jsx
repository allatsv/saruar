import React from "react";

function Footer() {
    return(
<section className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__info">
                        <a href="#"><img src="../../logo.svg" alt="logo" /></a>                       
                        <p className="footer__info-text">Профессионалы с опытом в международных перевозках. Надежность, ответственность и высокое качество сервиса.</p>
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__list-title">О компании</li>
                            <li className="footer__item"><a href="#">Наши успехи</a></li>
                            <li className="footer__item"><a href="#">География</a></li>
                            <li className="footer__item"><a href="#">Отзывы</a></li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__list-title">Наши услуги</li>
                            <li className="footer__item"><a href="#">Автоперевозки</a></li>
                            <li className="footer__item"><a href="#">Мультимодальные</a></li>
                            <li className="footer__item"><a href="#">Мультимодальные</a></li>
                            <li className="footer__item"><a href="#">Опасные грузы</a></li>
                            <li className="footer__item"><a href="#">Доп. услуги</a></li>
                            <li className="footer__item"><a href="#">Консалтинг</a></li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__list-title">Новости</li>
                            <li className="footer__item"><a href="#">Рубрика 1</a></li>
                            <li className="footer__item"><a href="#">Рубрика</a></li>
                            <li className="footer__item"><a href="#">Рубрика 4</a></li>
                            <li className="footer__item"><a href="#">Рубрика 5</a></li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__list-title">Контакты</li>
                            <li className="footer__item">                               
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9951 18.8086C14.9062 18.8086 12.8424 18.3544 10.8037 17.4461C8.76494 16.5378 6.91002 15.2503 5.23891 13.5836C3.56781 11.9169 2.27688 10.0669 1.36613 8.03359C0.455376 6.00026 0 3.94193 0 1.85859C0 1.55859 0.100266 1.30859 0.300799 1.10859C0.501331 0.908594 0.751997 0.808594 1.0528 0.808594H5.11358C5.34753 0.808594 5.55642 0.88776 5.74024 1.04609C5.92406 1.20443 6.03269 1.39193 6.06611 1.60859L6.71784 5.10859C6.75126 5.37526 6.74291 5.60026 6.69277 5.78359C6.64264 5.96693 6.55073 6.12526 6.41704 6.25859L3.98558 8.70859C4.3198 9.32526 4.71669 9.92109 5.17624 10.4961C5.6358 11.0711 6.14131 11.6253 6.69277 12.1586C7.21081 12.6753 7.75392 13.1544 8.3221 13.5961C8.89027 14.0378 9.49187 14.4419 10.1269 14.8086L12.4831 12.4586C12.6335 12.3086 12.8299 12.1961 13.0722 12.1211C13.3145 12.0461 13.5527 12.0253 13.7866 12.0586L17.2458 12.7586C17.4797 12.8253 17.6719 12.9461 17.8223 13.1211C17.9727 13.2961 18.0479 13.4919 18.0479 13.7086V17.7586C18.0479 18.0586 17.9477 18.3086 17.7471 18.5086C17.5466 18.7086 17.2959 18.8086 16.9951 18.8086ZM3.03305 6.80859L4.68745 5.15859L4.26132 2.80859H2.03039C2.11395 3.49193 2.23092 4.16693 2.38132 4.83359C2.53172 5.50026 2.74897 6.15859 3.03305 6.80859ZM12.0069 15.7586C12.6586 16.0419 13.3229 16.2669 13.9997 16.4336C14.6765 16.6003 15.3574 16.7086 16.0426 16.7586V14.5586L13.6863 14.0836L12.0069 15.7586Z" fill="white"/>
                                </svg>
                                <span>+7 (700) 354 5406</span>
                            </li>
                            <li className="footer__item">                               
                                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00532 16.8086C1.45386 16.8086 0.981774 16.6128 0.589064 16.2211C0.196355 15.8294 0 15.3586 0 14.8086V2.80859C0 2.25859 0.196355 1.78776 0.589064 1.39609C0.981774 1.00443 1.45386 0.808594 2.00532 0.808594H18.0479C18.5994 0.808594 19.0715 1.00443 19.4642 1.39609C19.8569 1.78776 20.0532 2.25859 20.0532 2.80859V14.8086C20.0532 15.3586 19.8569 15.8294 19.4642 16.2211C19.0715 16.6128 18.5994 16.8086 18.0479 16.8086H2.00532ZM10.0266 9.80859L2.00532 4.80859V14.8086H18.0479V4.80859L10.0266 9.80859ZM10.0266 7.80859L18.0479 2.80859H2.00532L10.0266 7.80859ZM2.00532 4.80859V2.80859V14.8086V4.80859Z" fill="white"/>
                                </svg>
                                <span>info@saruarlogistics.kz</span>
                            </li>
                            <li className="footer__item">                               
                                <svg className="footer__item-mark" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.21917 9C7.71549 9 8.14036 8.82375 8.4938 8.47125C8.84724 8.11875 9.02396 7.695 9.02396 7.2C9.02396 6.705 8.84724 6.28125 8.4938 5.92875C8.14036 5.57625 7.71549 5.4 7.21917 5.4C6.72285 5.4 6.29797 5.57625 5.94453 5.92875C5.5911 6.28125 5.41438 6.705 5.41438 7.2C5.41438 7.695 5.5911 8.11875 5.94453 8.47125C6.29797 8.82375 6.72285 9 7.21917 9ZM7.21917 15.615C9.05404 13.935 10.4152 12.4087 11.3025 11.0362C12.1899 9.66375 12.6335 8.445 12.6335 7.38C12.6335 5.745 12.1109 4.40625 11.0656 3.36375C10.0204 2.32125 8.7382 1.8 7.21917 1.8C5.70014 1.8 4.41798 2.32125 3.37271 3.36375C2.32743 4.40625 1.80479 5.745 1.80479 7.38C1.80479 8.445 2.24847 9.66375 3.13583 11.0362C4.02318 12.4087 5.3843 13.935 7.21917 15.615ZM7.21917 18C4.79774 15.945 2.98919 14.0362 1.79351 12.2737C0.597837 10.5112 0 8.88 0 7.38C0 5.13 0.725677 3.3375 2.17703 2.0025C3.62838 0.6675 5.3091 0 7.21917 0C9.12924 0 10.81 0.6675 12.2613 2.0025C13.7127 3.3375 14.4383 5.13 14.4383 7.38C14.4383 8.88 13.8405 10.5112 12.6448 12.2737C11.4492 14.0362 9.6406 15.945 7.21917 18Z" fill="white"/>
                                </svg>
                                <span>Казахстан, г Астана,<br />ул. Пример, д5</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copyright">Copyright ©2025 Saruar Logistics | Все права защищены</p>
                    <div className="footer__social">                       
                    <img src="../../facebook.svg" alt="facebook" />                  
                    <img src="../../x.svg" alt="X" />                     
                    <img src="../../instagram.svg" alt="instagram" />   
                    </div>
                </div>
            </div>
            
        </div>
        
        
    </section>
    )
    
}

export default Footer