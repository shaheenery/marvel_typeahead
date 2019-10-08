/*
  SuperHero Type Ahead.

  Implement a typeahead component similar to https://twitter.github.io/typeahead.js/
  It should show a list of superheros whose name starts with the supplied text.
  It should use the marvel api (https://developer.marvel.com/docs) to fetch results.

  API Key: e8b5e32b9382d225d2d52857fde70676
  Base URL: https://gateway.marvel.com

*/
import React from 'react';
import Hero from "./Hero.js"

class TypeAhead extends React.Component {

  baseUrl = 'https://gateway.marvel.com';
  charactersPath = '/v1/public/characters';
  apiKey = 'e8b5e32b9382d225d2d52857fde70676';

  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      heroes: []
    };
  }

  async fetchCharacters(str) {
    this.setState({searchString: str})
    let response = await fetch(
      this.baseUrl + this.charactersPath + "?" + new URLSearchParams({ nameStartsWith: str, apikey: this.apiKey }).toString()
    )
    const json = await response.json()
    this.setState({heroes: json.data.results})
  }

  renderHero(h) {
    return <Hero key={h.id} value={h} />;
  }

  render() {
    return (
      <div>
        <input
          className="typeahead"
          type="text"
          onKeyUp={(e) => this.fetchCharacters(e.target.value)}
        />
        <div>{this.state.searchString}</div>
        <ul>
          {this.state.heroes.map((hero) => this.renderHero(hero))}
        </ul>

      </div>
    );
  }
}

export default TypeAhead;
