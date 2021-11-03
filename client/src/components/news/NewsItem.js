import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, source } = props;
    let defautlUrl = "https://image.cnbcfm.com/api/v1/image/106942183-1631716543077-gettyimages-1234607948-tang-notitle210810_npAPu.jpeg?v=1631716670";

    return (
        <div className="card my-3">
            <div style={{
                display: 'flex',
                position: 'absolute',
                right: '0',
                transform: 'translateY(-50%)'
            }}>
                <span className="badge rounded-pill bg-danger" style={{ fontSize: '14px' }}>
                    {source}
                </span>
            </div>

            <img src={imageUrl ? imageUrl : defautlUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 70) : ""}...</h5>


                <p className="card-text">
                    {description ? description.slice(0, 120) : ""}...
                </p>
                <p className="card-text"><small className="text-muted">{(new Date(date)).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default NewsItem;

