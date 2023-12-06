import "./Process.css";
import { processes } from "./data";

const ProcessRow = (props) => {
    return (
        <div className="process-line">
            <div className="number">
                <p className="num">{props.order}</p>
            </div>
            <div className="process-heading">
                <h4 className="heading-4">{props.title}</h4>
            </div>
            <div className="process-text">
                <p className="text-lg">{props.description}</p>
            </div>
            <div className="process-link">
                <div className="orange-line"></div>
                <a className="uppercase-text-2" href={props.link}>
                    {" "}
                    LEARN MORE
                </a>
            </div>
        </div>
    );
};
export function Process() {
    return (
        <section id="process-section">
            <div className="process-section container">
                <h5 className="uppercase-text-1">OUR WORKING PROCESS</h5>
                {processes.map((process, idx) => {
                    return (
                        <ProcessRow
                            key={idx}
                            order={process.order}
                            title={process.title}
                            description={process.description}
                            link={process.link}
                        />
                    );
                })}
                {/* <div className="process-line">
                    <div className="number">
                        <p className="num">01.</p>
                    </div>
                    <div className="process-heading">
                        <h4 className="heading-4">
                            Discuss the concept with us.
                        </h4>
                    </div>
                    <div className="process-text">
                        <p className="text-lg">
                            Engage in an insightful conversation with our team
                            to explore your project's vision, goals, and desired
                            outcomes
                        </p>
                    </div>
                    <div className="process-link">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div className="process-line">
                    <div className="number">
                        <p className="num">02.</p>
                    </div>
                    <div className="process-heading">
                        <h4 className="heading-4">
                            Confirm the provided design.
                        </h4>
                    </div>
                    <div className="process-text">
                        <p className="text-lg">
                            Once you provide us with the design you envision,
                            our experienced team will meticulously review and
                            validate every aspect.
                        </p>
                    </div>
                    <div className="process-link">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div className="process-line">
                    <div className="number">
                        <p className="num">03.</p>
                    </div>
                    <div className="process-heading">
                        <h4 className="heading-4">
                            Get delivered the furniture on time.
                        </h4>
                    </div>
                    <div className="process-text">
                        <p className="text-lg">
                            Our dedicated team prioritizes punctuality and
                            efficient logistics to ensure that your furniture
                            arrives precisely.
                        </p>
                    </div>
                    <div className="process-link last">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
