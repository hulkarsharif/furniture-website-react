import "./About.css";
import couple from "../../../../images/wife-husband.jpeg";
import green from "../../../../images/green-shape.svg";
export function About() {
    return (
        <section id="about-section">
            <div class="about-section container">
                <div class="about-section__left">
                    <div class="img-box">
                        <img
                            class="about-section__img"
                            src={couple}
                            alt="Wife and husband"
                        />
                        <img class="about-section__shape" src={green} alt="" />
                    </div>
                </div>

                <div class="about-section__right">
                    <h3 class="heading-3">
                        Spend your happy time with full comfort.
                    </h3>
                    <p class="text-lg">
                        Embrace blissful comfort: Revel in delightful moments,
                        surrounded by unmatched tranquility and exquisite
                        relaxation.
                    </p>
                    <div class="orange-line"></div>
                    <span class="uppercase-text-2">EXPLORE OUR PRODUCTS</span>
                </div>
            </div>
        </section>
    );
}
