import React, { Component } from "react";
import PropTypes from "prop-types";

class TopHeadlines extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f66285a0724448d7ad5b15b0b0deb548&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ headlines: parsedData.articles });
  }

  render() {
    const { headlines } = this.state;

    return (
      <div className="container mt-3">
        <h2>Top 10 Headlines</h2>
        <ul className="list-group">
          {headlines.map((headline, index) => (
            <li className="list-group-item" key={index}>
              {headline.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TopHeadlines;
