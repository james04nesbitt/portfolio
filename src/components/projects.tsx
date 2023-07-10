import InViewElement from "./inview";
const Projects = () => (
    <div className="projects">
        <h2 className="tp">Projects</h2>
        <ul>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Signal_Street'><div className="project left">
                    <h1>Signal Street</h1>
                    <p className="info">Here I created a stock quote web app that supports look up many differnt stocks as well as infomration about them, the ability to create your own watchlist as well as track the performace of your portfolio, stay up to date with importnat financial and economic news, and see the biggest gainers, losers and most active stocks. Incorparted the use of my own Machine Learning alogrithim when looking up a Stock that predicts wheter a stock while go up or down. <br /><br />Coded With: Django, Python, styled with CSS, SQLite for the database </p>

                </div></a>
                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Signal_Street'>
                    <div className="project right"><h1>My Machine Learning Projects</h1>
                        <p className="info">Here is a link to a repositeroy of diffent files, primairly in Python, that I have used on my Machine Learning/Data Analytics/Data Visualtion Journey. For data visuzialtion I am skilled the utilization of Matplotlib. For Machine Learning, I love exploring Natural Langauge Prossescing and Time Series Models using Sci-kit-learn.</p>
                    </div></a>

                </li>
            </InViewElement>
            <InViewElement>
                <li><a href='https://github.com/james04nesbitt/Stock-Ticker'><div className="project left">
                    <h1>Stock Quote</h1>
                    <p className="info">Here was an old project I implemnted before the creation of Signal Street, where the user inputs in a stock quote and retirves relevant infomration pertaining to the stock. <br /><br /> Coded With: Python, PyQt6 for the GUI, YFinance API</p>
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