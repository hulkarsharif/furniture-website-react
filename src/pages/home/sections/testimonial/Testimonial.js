import "./Testimonial.css";
import drinking from "../../../../images/lady-drinking-coffee.jpeg";
import playIcon from "../../../../images/play 1 (4).jpg";

export function Testimonial() {
    return (
        <section id="testimonials-section">
            <div class="testimonials-section container">
                <div class="testimonials-section__left">
                    <h3 class="heading-3">
                        “It was super easy to share my unique concept. I got
                        exactly what I ordered. Great service!”
                    </h3>
                    <div class="white-line"></div>
                    <span class="testimonials-name">Jenny Wilson</span>
                    <p class="text-md">St. Celina, Delaware</p>
                </div>

                <div class="testimonials-section__right">
                    <div class="testimonials-img-box">
                        <img
                            class="testimonials-img"
                            src={drinking}
                            alt="Jenny Wilson drinking coffee"
                        />
                        <button class="play-btn">
                            <img
                                class="play-icon"
                                src={playIcon}
                                alt="Play icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
