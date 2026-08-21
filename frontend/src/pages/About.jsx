import "./About.css";
import {
    Sun,
    Heart,
    CalendarDays,
    CloudSun
} from "lucide-react";
function About() {
    return (
        <section className="about">
            <div className="about-hero">

                <div className="hero-content">

                    <span className="hero-label">
                        WEATHER DASHBOARD
                    </span>

                    <h1>
                        Discover the weather
                        <br />
                        around the world.
                    </h1>

                    <p>
                        A simple and modern application to explore
                        current weather conditions and forecasts.
                    </p>

                </div>


                <div className="hero-weather">

                    <div className="sun">
                      <CloudSun size={90} />
                    </div>

                    <span>24°</span>

                </div>

            </div>


            {/* Features */}
            <div className="about-section">

                <h2>What can you do?</h2>

                <p className="section-description">
                    Everything you need to explore the weather.
                </p>


                <div className="features">

                    <div className="feature-card">

                        <div className="feature-icon">
                           <Sun size={25} />
                        </div>

                        <h3>Current Weather</h3>

                        <p>
                            Check temperature, humidity,
                            wind and current conditions.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            <Heart size={25} />
                        </div>

                        <h3>Favorite Cities</h3>

                        <p>
                            Save your favorite cities and
                            access them quickly.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            <CalendarDays size={25} />
                        </div>

                        <h3>Weather Forecast</h3>

                        <p>
                            Explore hourly and daily
                            weather forecasts.
                        </p>

                    </div>

                </div>

            </div>


            {/* Technologies */}
            <div className="about-section">

                <h2>Built with</h2>

                <p className="section-description">
                    Technologies used to build this project.
                </p>

                <div className="technologies">

                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Spring Boot</span>
                    <span>REST API</span>
                    <span>CSS</span>

                </div>

            </div>


            {/* Project */}
            <div className="project-info">

                <h2>About the project</h2>

                <p>
                    Weather Dashboard is a student project created
                    to practice React, API integration and modern
                    web application development.
                </p>

            </div>

        </section>
    );
}

export default About;