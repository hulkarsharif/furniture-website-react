import "./Features.css";
import heart from "../../../../images/heart 1.png";
import zap from "../../../../images/zap 1.png";
import headphone from "../../../../images/headphones 1.png";
export function Features() {
    return (
        <section id="features-section">
            <div className="features-section container">
                <div className="feature">
                    <div className="feature-icon ellipse-1">
                        <img className="icon" src={heart} alt="heart shape" />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-2">Best quality</h4>
                        <p className="text-md">
                            Uncompromising excellence delivered in every product
                            and experience
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-icon ellipse-2">
                        <img className="icon" src={zap} alt="heart shape" />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-2">Fastest delivery</h4>
                        <p className="text-md">
                            Swift and efficient shipping to bring your order to
                            you promptly.
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-icon ellipse-3">
                        <img
                            className="icon"
                            src={headphone}
                            alt="heart shape"
                        />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-2">Great support</h4>
                        <p className="text-md">
                            Exceptional customer service to assist and guide you
                            effectively
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
