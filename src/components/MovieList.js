import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css/"
import "./App.css"

const MovieList = (props) => {
    return (
	props.movies.map((movie) => {
	    <div class="image-container">
		<img src={movie.Poster} alt="a movie poster" />
	    </div>		
	})
    )
}
