import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import './PopularArtistsPage.scss';

export const PopularArtistsQuery = gql`
  query {
    popular_artists {
      artists {
        id
        imageUrl
        name
      }
    }
  }
`

const PopularArtistsPage = () => {
  const { loading, data } = useQuery(PopularArtistsQuery);
  const { popular_artists: popularArtists } = data || {};
  const { artists } = popularArtists || {};

  return (
    <div className="popular-artists-page">
      <div className="popular-artists-content">
        <div className="popular-artists-header">
          <h1>Popular Artists</h1>
        </div>
        {loading ?
          (
            <div className="loading-box">
              <div className="loading-text">Loading popular artists...</div>
            </div>
          ) : (
            <div className="artists-grid">
              {artists && artists.map(artist => (
                <Link key={artist.id} to={`/artist/${artist.id}`}>
                  <div className="artist-box">
                    <img className="artist-photo" src={artist.imageUrl} alt="Artist Portrait" />
                    <h4 className="artist-name">{artist.name}</h4>
                    <p className="view-btn">View artist</p>
                  </div>
                </Link>
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default PopularArtistsPage;
