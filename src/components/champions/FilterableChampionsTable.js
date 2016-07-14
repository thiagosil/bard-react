import React from 'react';
import ChampionSearchBar from './ChampionSearchBar';
import ChampionList from './ChampionList';

class FilterableChampionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        championName: ''
    };

    this.handleUserInput =  this.handleUserInput.bind(this);
  }

  handleUserInput(championName) {
   this.setState({
     championName: championName
   });
  }

  render() {
    return (
      <div>
        <ChampionSearchBar
          championName={this.state.championName}
          onUserInput={this.handleUserInput} />

        <hr/>

        <ChampionList
          champions={this.props.champions}
          championName={this.state.championName}/>
      </div>
    );
  }

}

FilterableChampionsTable.propTypes = {
  champions: React.PropTypes.array.isRequired
};

export default FilterableChampionsTable;
