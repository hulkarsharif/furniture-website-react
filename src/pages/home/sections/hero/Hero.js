import "./Hero.css";
import chair from "../../../../images/hero.png";
import circle from "../../../../images/green-circle.png";
export function Hero() {
    return (
        <section id="hero-section">
            <div className="hero-section container">
                <div className="hero-section__card">
                    <div className="hero-section__left">
                        <div className="hero-img-wrapper">
                            <img
                                className="cicle"
                                src={circle}
                                alt="Circle shape"
                            />
                            <img className="chair" src={chair} alt="Chair" />
                        </div>
                    </div>

                    <div className="hero-section__right">
                        <span className="uppercase-text-2 text-top">
                            QUALITY DESIGN FOR ALL
                        </span>
                        <h1 className="heading-1">
                            Bring back the classNameic look by using Whiter.
                            Easy home delivery!
                        </h1>
                        <p className="text-md">
                            Rediscover the timeless allure of the past as Whiter
                            effortlessly revives the beloved vintage aesthetic.
                        </p>
                        <div className="orange-line"></div>
                        <span className="uppercase-text-2">
                            EXPLORE OUR PRODUCTS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
