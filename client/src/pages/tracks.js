import React from 'react';
import {Layout} from '../components';
import {gql, useQuery} from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
    query ExampleQuery {
        tracksForHome {
            id
            title
            thumbnail
            modulesCount
            length
            author {
                photo
                name
                id
            }
        }
    }
`;

const Tracks = () => {

    const {loading, error, data} = useQuery(TRACKS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // return <Layout grid>{JSON.stringify(data)}</Layout>;
    return (
        <QueryResult error={error} loading={loading} data={data}>
            <Layout grid>
                {data?.tracksForHome?.map(track => (
                    <TrackCard key={track.id} track={track}/>
                ))}
            </Layout>
        </QueryResult>
    );
};

export default Tracks;
