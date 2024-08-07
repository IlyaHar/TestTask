import './comments.css';
import './media.css'
import arrow from "../../../../storage/app/public/images/icons/arrow.svg";
import avatar from "../../../../storage/app/public/images/avatar.jpg";
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import Comment from "./Comment.jsx";
import axios from "axios";
import {useEffect, useState} from "react";


function Comments() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                setUsers(res.data.data);
            })
    }, []);

    $(document).ready(function () {
        if (users.length > 0) {
            $(".slider").not('.slick-initialized').slick({
                speed: 700,
                prevArrow: $('.comments__arrow:first-child'),
                nextArrow: $('.comments__arrow:last-child')
            })
        }
    });



    return (
        <section className="comments">
            <div className="container">
                <div className="comments__content">
                    <div className="comments__text">
                        <div className="comments__title">
                            Erfolgsgeschichten
                        </div>
                        <button className="comments__btn">
                            Ihre Feedback
                        </button>
                    </div>
                    <div className="comments__slider">
                        <button className="comments__arrow">
                            <img src={arrow} alt="arrow"/>
                        </button>
                        <div className="slider__wrapper">
                            <div className="slider">
                                <Comment user={{ first_name: 'Markus', last_name:  'Becker', avatar: avatar}} />
                                {
                                    users.map(user => (
                                      <Comment user={user} key={user.id} />
                                    ))
                                }

                            </div>
                        </div>
                        <button className="comments__arrow">
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments
