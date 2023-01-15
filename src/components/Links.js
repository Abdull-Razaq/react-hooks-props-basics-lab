import React from "react";

function Links(props) {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href="https://github.com/">{props.github}</a>
            <a href="https://www.linkedin.com/">{props.linkedin}</a>
        </div>
    )
}

export default Links;
