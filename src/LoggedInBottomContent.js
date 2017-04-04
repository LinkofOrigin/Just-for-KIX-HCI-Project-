import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import GamesList from './GamesList';

const styles = {
    root: {
        padding: '10px',
    },
};

export default class LoggedInBottomContent extends Component {
    render() {
        return (
            <div style = { styles.root }>
                <GamesList
                    title = 'Young'
                    list = { this.props.inactiveGamesYoung }
                    handleAddGame = { this.props.handleAddGame }
                    listName = 'inactiveGamesYoung'
                />
                <GamesList
                    title = 'Middle'
                    list = { this.props.inactiveGamesMiddle }
                    handleAddGame = { this.props.handleAddGame }
                    listName = 'inactiveGamesMiddle'
                />
                <GamesList
                    title = 'Old'
                    list = { this.props.inactiveGamesOld }
                    handleAddGame = { this.props.handleAddGame }
                    listName = 'inactiveGamesOld'
                />
                <RaisedButton 
                    onClick = { this.props.handleLogout }
                    label = 'Log Out'
                />
            </div>
        );
    }
}

LoggedInBottomContent.propTypes = {
    inactiveGamesYoung: PropTypes.array.isRequired,
    inactiveGamesMiddle: PropTypes.array.isRequired,
    inactiveGamesOld: PropTypes.array.isRequired,
    handleLogout: PropTypes.func.isRequired,
};