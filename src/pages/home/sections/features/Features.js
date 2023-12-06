import "./Features.css";
import { features } from "./data";

const Feature = (props) => {
    return (
        <div className="feature">
            <div className="feature-icon ellipse-1">
                <img className="icon" src={props.img} alt="heart shape" />
            </div>
            <div className="feature-text">
                <h4 className="heading-2">{props.title}</h4>
                <p className="text-md">{props.description}</p>
            </div>
        </div>
    );
};
export function Features() {
    return (
        <section id="features-section">
            <div className="features-section container">
                {features.map((feature, idx) => {
                    return (
                        <Feature
                            key={idx}
                            img={feature.img}
                            title={feature.title}
                            description={feature.description}
                        />
                    );
                })}
            </div>
        </section>
    );
}
