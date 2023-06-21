import React, { useCallback } from "react";
import './Track.css'

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track)
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track)
        },
        [props.onRemove, props.track]
    );

    const action = () => {
        if (props.isRemoval) {
            return (
                <button className="TrackAction" onClick={removeTrack}>-</button>
            );
        }
        return (
            <button className="TrackAction" onClick={addTrack}>+</button>
        );
    };

    return (
        <div className="Track">
            <div className="TrackInfo">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
        </div>
    );
};

export default Track;