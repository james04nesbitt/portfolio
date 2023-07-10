import InViewElement from "./inview";
const Projects = () => (
<div className="projects"> 
    <h2>Projects</h2>
    <ul>
        <InViewElement>
        <li><a href='https://github.com/james04nesbitt/Signal_Street'><div className="project left">
            <h1>Signal Street</h1>
            <p className="info">Here I created a stock quote web app that supports look up many differnt stocks as well as infomration about them, the ability to create your own watchlist as well as track the performace of your portfolio, stay up to date with importnat financial and economic news, and see the biggest gainers, losers and most active stocks. Incorparted the use of my own Machine Learning alogrithim when looking up a Stock that predicts wheter a stock while go up or down.  </p>
            </div></a>
        </li>
        </InViewElement>
        <InViewElement>
        <li><a href='https://github.com/james04nesbitt/Signal_Street'>
            <div className="project right"><h1>My Machine Learning Projects</h1>
            <p className="info">Here is a link to a repositeroy of diffent files I have used on my Machine Learning/Data Analytics/Data Visualtion Journey</p>
            </div></a>
        
        </li>
        </InViewElement>
    </ul>
</div>
)
export default Projects;