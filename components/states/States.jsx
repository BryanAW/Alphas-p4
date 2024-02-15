import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
      /* Initialize the state */
      this.state = {
          substring: '',  // Initialize substring
      };
    /* Bind the handleChange method to the component */
    this.handleChange = this.handleChange.bind(this);
    console.log('window.models.states', window.models.states);
  }

    /* Add a method to handle changes to the input */
    handleChange(event) {
        this.setState({
            substring: event.target.value,
        });
    }

  render() {

    const states = window.models.states();
    /* Get the substring from the state */
    const { substring } = this.state;
    /* Filter the states based on the substring */
    const statesFiltered = states.filter(state => state.toLowerCase().includes(substring.toLowerCase())
    );

    return (
      <div className="content-container">
        <h2>States Filter</h2>
        <p>Filter the list of states by typing below.</p>
        {/* Add an input to filter the states */}
        <input
            type="text"
            className="state-filter"
            placeholder="Type to filter states..."
            value={substring}
            onChange={this.handleChange}
        />
        <div className="filtered-states">
          {/* Show filtered states and if no states are found, show a message */}
            {statesFiltered.length > 0 ? (
                <ul>
                {/* Map over the filtered states and display them */}
                {statesFiltered.map((state, index) => (
                    <li key={index}>{state}</li>
                ))}
                </ul>
            /* If no states are found, display a message */
            ) : (
                <p>No states found with your inputs criteria</p>
            )}
        </div>
      </div>
    );
  }
}

export default States;
