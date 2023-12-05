import "./Design.css";
import arrowLeft from "../../../../images/arrow-left2.jpg";
import arrowRight from "../../../../images/arrow-right1.jpg";
import chairLight from "../../../../images/chair-light.jpeg";
import chairDark from "../../../../images/chair-dark.jpeg";
import couch from "../../../../images/couch.jpeg";
export function Design() {
    return (
        <section id="designs-section">
            <div class="designs-section container">
                <h3 class="heading-3">Explore our exclusive design.</h3>
                <div class="arrows">
                    <img
                        class="arrow-right"
                        src={arrowLeft}
                        alt="arrow right"
                    />
                    <img class="arrow-left" src={arrowRight} alt="arrow left" />
                </div>

                <div class="design-card">
                    <img
                        class="design-img chair-light"
                        src={chairLight}
                        alt="Chair"
                    />
                </div>

                <div class="design-card">
                    <img
                        class="design-img chair-dark"
                        src={chairDark}
                        alt="Chair"
                    />
                </div>

                <div class="design-card" id="design-last-card">
                    <img class="design-img couch" src={couch} alt="Couch" />
                    <div class="design-inner-card">
                        <span>$271</span>
                        <p id="inner-card-text">White Phonix</p>
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
