import "./index";
import avatar1 from "./images/avatar1.png";
import "./index.css";

const User = function(){
    return (
        <div>
            <h1>User Comments</h1>
            <section className="card">
                <img src={avatar1} />
                <div className="content">
                    <a className="linkauthor">Mr. Cactus</a>
                </div>
                <div className="metadata">
                    <span className="postdate"></span>
                </div>
                <div className="comment">
                    ...
                </div>
            </section>
        </div>
    );
}

export default User;
