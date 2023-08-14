# IMDB_Movie_App

Design an interactive movie search dashboard using the OMDB API. 

Features:
1. Inputs & Search: Integrate two input fields:
API Key input
Movie title input
Ensure both fields aren't empty before proceeding. Use a single "Search" button to initiate the search.

2. Custom Spinning Loader:
   During the data fetching phase, exhibit a CSS-based spinning loader. This loader should be hidden once data is successfully fetched or if an error occurs.

3. Movie Results: For each located movie, dynamically display a card illustrating:
The movie's poster
The title and its release year
A "More Details" option linking to IMDB using `imdbID`.

4. Error Management: In situations where errors arise (like "Invalid API Key!"), relay meaningful feedback to users.

5. Adaptive Design: Ensure the dashboard's optimal performance across mobile and desktop.
