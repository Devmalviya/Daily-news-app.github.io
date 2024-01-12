import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
   
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Daily-News`
  }

  async componentDidMount() {
  
    this.fetchArticles();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchArticles = async () => {
    this.props.setProgress(10);
    const { country, category, pageSize, api } = this.props;
    const { page, articles } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api}&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: [...articles, ...parsedData.articles],
      loading: false
    });
    this.props.setProgress(100);
  };
 

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1, loading: true }),
        () => this.fetchArticles()
      );
    }
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-3">
        <h1>Daily News - Top Headlines coming from {this.capitalizeFirstLetter(this.props.category)}</h1>
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
        </div>
        {loading && <div>Loading...</div>}
      </div>
    );
  }
}

export default News;
