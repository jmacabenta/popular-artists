import React from 'react';
import { useParams, Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import './ArtistsPage.scss';

export const ArtistQuery = gql`
    query ArtistQuery($id: String!) {
        artist(id: $id) {
            name
            imageUrl
            formatted_nationality_and_birthday
            hometown
            artworks {
                id
                title
                imageUrl
            }
        }
    }
`

const ArtistPage = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(ArtistQuery, { variables: { id } });
    const { artist } = data || {};
    const {
        name,
        imageUrl,
        formatted_nationality_and_birthday: formattedNationalityAndBirthday,
        hometown,
        artworks,
    } = artist || {};

    return (
        <div className="artist-page">
            <div className="artist-content">
                {loading ?
                    (
                        <div className="loading-box">
                            <div className="loading-text">Loading artist...</div>
                        </div>
                    ) : (
                        <div>
                            <div className="artist-header">
                                <div className="artist-profile">
                                    <Link className="back-text" to="/">&lt; back</Link>
                                    <div className="artist-bio">
                                        <img src={imageUrl} alt="Artist Portrait" />
                                        <h2>{name}</h2>
                                        <p>{formattedNationalityAndBirthday}</p>
                                        <p>{hometown}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="artist-artworks">
                                <h2>Artworks</h2>

                                <div className="artworks-grid">
                                    {artworks && artworks.map(artwork => (
                                        <div key={artwork.id} className="artwork-box">
                                            <img className="artwork-image" src={artwork.imageUrl} alt="Artwork Preview" />
                                            <h4 className="artwork-title">{artwork.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ArtistPage;
