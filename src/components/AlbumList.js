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

export default AlbumList;
