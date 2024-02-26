import InViewElement from "./inview";
import { Link } from 'react-router-dom';
const Projects = () => (
    <div className="projects">
        <h2 className="tp">Projects</h2>
        <ul>
        <InViewElement>
                <li><Link to='/neural_network/'>
                    <div className="project left"><h1>Neural Network</h1>
                        <p className="info">Here I built an entire Neural network from scratch using only the numpy library.</p>
                    </div></Link>

                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Signal_Street'><div className="project right">
                    <h1>Signal Street</h1>
                    <p className="info">Here I created a stock quote web app that supports look up many different stocks as well as information about them, the ability to create your own watchlist as well as track the performance of your portfolio, stay up to date with important financial and economic news, and see the biggest gainers, losers and most active stocks. Incorporated the use of my own Machine Learning algorithm when looking up a Stock that predicts whether a stock while go up or down. <br /><br />Coded With: Django, Python, styled with CSS, SQLite for the database </p>

                </div></a>
                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/DS-ML'>
                    <div className="project left"><h1>My Machine Learning Projects</h1>
                        <p className="info">Here is a link to a repository of different files, primarily in Python, that I have used on my Machine Learning/Data Analytics/Data Visualization Journey. For data visualization I am skilled the utilization of Matplotlib. For Machine Learning, I love exploring Natural Language Processing and Time Series Models using Sci-kit-learn.</p>
                    </div></a>

                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Stock-Ticker'><div className="project right">
                    <h1>Stock Quote</h1>
                    <p className="info">Here was an old project I implemented before the creation of Signal Street, where the user inputs in a stock quote and retrieves relevant information pertaining to the stock. <br /><br /> Coded With: Python, PyQt6 for the GUI, YFinance API</p>
                </div></a>
                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Stock-Ticker'><div className="project left">
                    <h1>Portfolio</h1>
                    <p className="info">Here is the link to the repository contain the code used to make this portfolio<br /><br /> Coded With: React, Typescript</p>
                </div></a>
                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Stock-Ticker'><div className="project right">
                    <h1>Old Portfolio Website</h1>
                    <p className="info">Here is my old portfolio website that I also created using React, featuring some of my older projects as well.<br /><br /> Coded With: React, Javascript</p>
                </div></a>
                </li>
            </InViewElement>
        </ul>
    </div>
)
export default Projects;