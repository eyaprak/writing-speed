import React from 'react';

function ScoreCard({ value, type }) {
    return (
        <div className="col-sm-4">
            <div className={`card border-${type.bgcolor} p-0 text-center mr-2`}>
                <div className="card-header p-0">
                    <h4 className="card-title">{type.title}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">{`${parseFloat(value).toFixed(type.fixed)} ${type.unit}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;