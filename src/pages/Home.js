import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../env'


const Home = () => {
  return (
    <div>
        <Main />
        <Rows id="1" title="Up Coming" fetchURL={requests.requestPopular} />
        <Rows id="2" title="Popular" fetchURL={requests.requestPopular} />
        <Rows id="3" title="Trending" fetchURL={requests.requestTrending} />
        <Rows id="4" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Rows id="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>

  )
}
export default Home