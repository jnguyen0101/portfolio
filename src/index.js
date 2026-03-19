import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Navbar() {
    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-links">
                <a className="navbar-link" href="#navbar">Home</a>
                <a className="navbar-link" href="#about-me-section">About Me</a>
                <a className="navbar-link" href="#projects-section">Projects</a>
            </div>
        </nav>
    );
}

function AboutMe() {
    return (
        <div className="about-me-section">

        </div>
    )
}

function Projects() {
    return (
        <div className="projects-section"></div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <div className="contact-logo">
                <a href="https://linkedin.com/in/jenny-nguyen-17045b179" target="_blank" rel="noreferrer">
                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70"
                         height="70"
                         viewBox="0 0 50 50">
                        <g fill="currentColor">
                            <path
                                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="contact-logo">
                <a href="https://github.com/jnguyen0101" target="_blank" rel="noreferrer">
                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70"
                         height="70"
                         viewBox="0 0 30 30">
                        <g fill="currentColor">
                            <path
                                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="contact-logo">
                <a href="mailto:jtn2497@utexas.edu">
                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         width="70"
                         height="70">
                        <g fill="currentColor">
                            <path
                                d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="contact-logo">
                <a href="tel:+14698779171">
                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
                         width="70"
                         height="70">
                        <g fill="currentColor">
                            <path
                                d="M123.28788,96.79737,100.78819,80.34893a6.26082,6.26082,0,0,0-8.08382.58949l-12.02065,11.805-.04092.04092a5.33619,5.33619,0,0,1-7.50362-.08369L52.35966,71.92108,35.2994,54.86081a5.33619,5.33619,0,0,1-.08369-7.50362l.04092-.04092,11.805-12.02065a6.26082,6.26082,0,0,0,.58949-8.08382L31.20263,4.71212a6.26247,6.26247,0,0,0-9.48412-.73271l-8.47993,8.47993q-.80336.80336-1.5342,1.66808C10.14787,15.9666,6.77822,20.09128,5.49694,22.745a34.59493,34.59493,0,0,0,5.73882,38.17081l55.84846,55.84846a34.59493,34.59493,0,0,0,38.17081,5.73882c2.65369-1.28128,6.77836-4.65093,8.61754-6.20744q.86472-.73083,1.66808-1.5342l8.47993-8.47993A6.26247,6.26247,0,0,0,123.28788,96.79737Z"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="copyright">
                © 2026 Jenny Nguyen
            </div>
        </footer>
    );
}

root.render(
    <div className="container">
        <Navbar/>
        <AboutMe/>
        <Projects/>
        <Footer/>
    </div>
);
