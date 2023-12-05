import "./Process.css";

export function Process() {
    return (
        <section id="process-section">
            <div class="process-section container">
                <h5 class="uppercase-text-1">OUR WORKING PROCESS</h5>

                <div class="process-line">
                    <div class="number">
                        <p class="num">01.</p>
                    </div>
                    <div class="process-heading">
                        <h4 class="heading-4">Discuss the concept with us.</h4>
                    </div>
                    <div class="process-text">
                        <p class="text-lg">
                            Engage in an insightful conversation with our team
                            to explore your project's vision, goals, and desired
                            outcomes
                        </p>
                    </div>
                    <div class="process-link">
                        <div class="orange-line"></div>
                        <a class="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div class="process-line">
                    <div class="number">
                        <p class="num">02.</p>
                    </div>
                    <div class="process-heading">
                        <h4 class="heading-4">Confirm the provided design.</h4>
                    </div>
                    <div class="process-text">
                        <p class="text-lg">
                            Once you provide us with the design you envision,
                            our experienced team will meticulously review and
                            validate every aspect.
                        </p>
                    </div>
                    <div class="process-link">
                        <div class="orange-line"></div>
                        <a class="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div class="process-line">
                    <div class="number">
                        <p class="num">03.</p>
                    </div>
                    <div class="process-heading">
                        <h4 class="heading-4">
                            Get delivered the furniture on time.
                        </h4>
                    </div>
                    <div class="process-text">
                        <p class="text-lg">
                            Our dedicated team prioritizes punctuality and
                            efficient logistics to ensure that your furniture
                            arrives precisely.
                        </p>
                    </div>
                    <div class="process-link last">
                        <div class="orange-line"></div>
                        <a class="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
