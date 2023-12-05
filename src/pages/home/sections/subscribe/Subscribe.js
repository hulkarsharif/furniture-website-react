import "./Subscribe.css";
import lock from "../../../../images/lock 1.jpg";

export function Subscribe() {
    return (
        <section id="subscribe-section">
            <div class="subscribe-section container">
                <h3 class="heading-3">
                    Subscribe to our <br />
                    newsletter to get updated
                </h3>
                <p class="text-lg">
                    Get our latest update on your inbox. With lots of unique
                    blocks, <br />
                    you can easily build a page without coding. Build your next{" "}
                    <br />
                    consultancy website within few minutes.
                </p>
                <label for="emailInput">
                    <input
                        type="email"
                        placeholder="Enter email address"
                        id="emailInput"
                    />
                </label>
                <input type="submit" value="Subscribe" id="subscribeInput" />

                <div class="promise-container">
                    <img class="lock-img" src={lock} alt="lock icon" />
                    <p class="text-md">We don’t spam at all, our promise!</p>
                </div>
            </div>
        </section>
    );
}
