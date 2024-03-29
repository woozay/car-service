import React from "react"

export default ({ title, content, children }) => (
    <div class="column is-4">
        <div class="card is-shady">
            <div class="card-image">
                {/* <figure class="image is-4by3">
                    <img src="https://i.imgsafe.org/3f/3f0c578f9d.jpeg" alt="Placeholder image" />
                </figure> */}

            </div>
            <div class="card-content">
                <div className="hexagon">
                    <div className="card-icon">
                        {children}
                    </div>
                </div>
                <div class="content p-t-lg">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </div>
)
