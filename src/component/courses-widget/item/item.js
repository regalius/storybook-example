// @flow
import * as React from "react";

import { Course } from "../../../flowtypes/course";

import "./item.css";

type PropsType = {
    ...Course,
    onEnrollBtnClick: Function
};

const CoursesWidgetItem = ({
    title,
    image,
    author,
    duration,
    onEnrollBtnClick
}: PropsType): React.Node => (
    <div className="courses_widget__item">
        <img className="courses_widget__item_image" src={image} alt={title} />
        <div className="courses_widget__item_content">
            <div className="courses_widget__item_content_wrapper">
                <span className="courses_widget__item_title">{title}</span>
                <div className="courses_widget__item_info">
                    <span className="courses_widget__item_author">
                        {author}
                    </span>
                    <span className="courses_widget__item_duration">
                        {duration}
                    </span>
                </div>
                <button
                    className="courses_widget__item_enroll_btn"
                    onClick={onEnrollBtnClick}
                >
                    Enroll now!
                </button>
            </div>
        </div>
    </div>
);

export default CoursesWidgetItem;
