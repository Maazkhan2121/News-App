import React from 'react'

const Newsitem =(props)=> {



        const { title, description, imageUrl, newsUrl, author, date,source } = props;
        return (
            <div>
                <div class="container my-3">
                    <div class="card" >
                        <img src={!imageUrl ? "https://www.wealthmanagement.com/sites/wealthmanagement.com/files/styles/article_featured_standard/public/san-francisco-economic-recovery.jpg?itok=94s8J_Yj" : imageUrl} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{title}...<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1 }}>
                            {source}
                            </span></h5>
                            <p class="card-text">{description}...</p>
                            <p class="card-text"><small class="text-body-secondary">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>

                            <a href={newsUrl} target="_blank" class="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    
};

export default Newsitem
