import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes  from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


    

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    


  const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    // GET https://newsapi.org/v2/top-headlines/sources?country=usapiKey=API_KEY
const updateNews = async () => {
    props.setProgress(10);
    setpage(page +1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(50);
   
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    
    
    props.setProgress(100);
}
useEffect(() => {
     updateNews();
    //  document.title = `${this.capitalizeFirstLetter(props.category)} - Dily Updates`
}, )


const fetchMoreData = async () => {
    setpage(page +1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)

    }
    // this.updateNews();


// const handleNextclick = async () => {
//    await props.setState({page : page + 1})
//     updateNews();
// }
// const handlepreclick = async () => {
//    await props.setState({page : page - 1})
//     updateNews();
// }



return (
    <>
        <h1 class="text-center">Daily Updates -- Top headlines on {capitalizeFirstLetter(props.category)}</h1>
         {loading &&  <div className="text-center">
                     <div class="spinner-border text-dark" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}

         <InfiniteScroll
            style={{ overflow: 'hidden' }}
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<div class="text-center">
                <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>}
        > 
            <div class="container my-3">
                <div class="row">
                    {articles?.map((element) => {
                        return <div class="col-md-3" key={element.url}>
                            <Newsitem title={element.title?.slice(0, 40)} description={element.description?.slice(0, 80)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} class="card-img-top" />
                        </div>
                    })}
                </div>
                {/* <div class="conatiner d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={handlepreclick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" class="btn btn-dark" onClick={handleNextclick}>Next &rarr;</button>
                </div>  */}
            </div>
        </InfiniteScroll>

        </>

)
            
}


News.defualtprops = {
    country: 'us',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;