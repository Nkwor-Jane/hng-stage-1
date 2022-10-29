import React from "react";
import "../styles/ProfilePage.css";
import ProfileImage from "../styles/profile__img.png";

export default function ProfilePage() {
    return (
        <div className="profile">
            <div className="icon">

            </div>
            <div className="image">
                <img src={ProfileImage} alt="Face" id="profile_img" />
            </div>
            <h3>Annette Black</h3>

            <div className="btns">
                <div className="twitter-btn">
                    <button className="twitter" id="twitter">Twitter Link</button>
                </div>
                <div className="slack">
                    <button id="slack">Slack Link</button>
                </div>
                <div className="links">
                    <a href="https://training.zuri.team/" className="team" id="btn__zuri" target="_blank" rel="noreferrer noopener">Zuri Team</a>
                </div>
                <div className="links">
                    <a href="http://books.zuri.team/" className="books" id="books" target="_blank" rel="noreferrer noopener">Zuri Books</a> 
                </div>
                <div className="links">
                    <a href="https://books.zuri.team/" className="python" id="book_python" target="_blank" rel="noreferrer noopener">Python Books</a>
                </div>
                <div className="links">
                    <a href="https://background.zuri.team/" className="check" id="pitch" target="_blank" rel="noreferrer noopener">Background Check for coders</a>
                </div>
                <div className="links">
                    <a href="https://books.zuri.team/design-rules" className="design" id="book_design" target="_blank" rel="noreferrer noopener">Design Books</a>
                </div>
            </div>
        </div>
    )
}
