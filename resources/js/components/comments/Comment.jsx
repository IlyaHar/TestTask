import './comments.css';
import './media.css'
import star from "../../../../storage/app/public/images/icons/star.svg";
import avatar from "../../../../storage/app/public/images/avatar.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';


function Comment(props) {

    return (
        <div className="comment">
            <div className="comment__info">
                <div className="comment__image">
                    <img src={props.user.avatar} alt="avatar"/>
                </div>
                <div className="comment__text">
                    <div className="stars">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                    <h3 className="comment__title">
                        Effiziente Vermittlung von Talenten
                    </h3>
                    <div className="comment__desc">
                        Unsere Zusammenarbeit mit Erotikstadt war außergewöhnlich effizient und
                        erfolgreich.
                        Die Plattform hat es uns ermöglicht, schnell und unkompliziert genau die
                        Talente zu finden,
                        die wir für unser Unternehmen gesucht haben. Besonders
                        beeindruckt hat uns die intuitive Bedienung und die Qualität der
                        Kandidatenprofile.
                        Wir freuen uns auf eine fortgesetzte erfolgreiche Partnerschaft.
                    </div>
                    <div className="comment__author">
                        <span>{ props.user.first_name } { props.user.last_name }</span><span>Geschäftsführer, Nightlife Entertainment GmbH</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment
