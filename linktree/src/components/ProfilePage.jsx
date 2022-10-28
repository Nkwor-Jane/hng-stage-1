import React from "react";
import "../styles/ProfilePage.css"

export default function ProfilePage() {
    return (
        <div>
            <div>
                an icon
            </div>
            <div className="image">
                <img src="" alt="Face" id="profile_img" />
            </div>
            <h3>Nkwor Jane</h3>

            <div className="btns">
                <div>
                
                </div>
                <button className="twitter" id="twitter">Twitter Link</button>
                <button className="slack" id="slack">Slack Link</button>
                <a href="https://training.zuri.team/" className="team" id="btn__zuri">Zuri Team</a>
                <a href="http://books.zuri.team/" className="books" id="books">Zuri Books</a>
                <a href="https://books.zuri.team/" className="python" id="book_python">Python Books</a>
                <a href="https://background.zuri.team/" className="check" id="pitch">Background Check for coders</a>
                <a href="https://books.zuri.team/design-rules" className="design" id="book_design">Design Books</a>
            </div>
        </div>
    )
}
