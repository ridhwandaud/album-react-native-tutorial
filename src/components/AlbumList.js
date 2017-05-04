// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
<<<<<<< HEAD
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

=======

class AlbumList extends Component {
	componentWillMount() {
		console.log('componentWillMount in AlbumList');
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => console.log(response));
	}
>>>>>>> bfd80eba3a496f2fa79f910395f787dd2aad1cca
	render() {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
