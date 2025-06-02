import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps={
        country:"us",
        pageSize:20,
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    capatalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
   
      constructor(props){
        super(props);
       console.log("construxtor") 
       this.state={
            articles:[],
            loading:true,
            page:1
       }
       document.title=`${this.capatalizeFirstLetter(this.props.category)}-BuzzFetch`
    }
    async updateNews(){
        this.props.setProgress(10)
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
       

        this.setState({loading:true})
        let data=await fetch(url);
         this.props.setProgress(30)
        let parseData=await data.json();
         this.props.setProgress(50)
        console.log(data)
        this.setState({articles:parseData.articles,totalArticles:parseData.totalResults,loading:false})
         this.props.setProgress(100)
    }
    async componentDidMount(){
        /*let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apikey=d9c2b294b7a14e35a241ecee6fce2a3a&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(data)
        this.setState({articles:parseData.articles,totalArticles:parseData.totalResults,loading:false})*/
        this.updateNews()
    }

    handleNextClick=async ()=>{
        /*if(this.state.page+1<=Math.ceil(this.state.totalArticles/this.props.pageSize)){
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apikey=d9c2b294b7a14e35a241ecee6fce2a3a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
                this.setState({loading:true})
        let data=await fetch(url);
        let parseData=await data.json();
     
        console.log(data)
        this.setState({
            page:this.state.page+1,
            articles:parseData.articles,
            loading:false
        })
        }*/
          this.setState({page:this.state.page+1})
          this.updateNews();

    }

    handlePrevClick=async ()=>{

         /*let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apikey=d9c2b294b7a14e35a241ecee6fce2a3a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
          this.setState({loading:true})
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(data)
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles,
            loading:false

        })*/
       this.setState({page:this.state.page-1})
       this.updateNews();

    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}}>BuzzFetch-Top {this.capatalizeFirstLetter(this.props.category)} Category</h1>
        { this.state.loading && <Spinner/>}
        <div className="row">

            {!this.state.loading  && this.state.articles.map((element)=>{
                
                return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
            
        </div>
                <div className="container d-flex justify-content-between">

                    <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
      </div>
      
    )
  }
}
