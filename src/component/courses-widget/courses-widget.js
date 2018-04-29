// @flow
import { Course } from "../../flowtypes/course";
import * as React from "react";

import CoursesItem from "./item";

import "./courses-widget.css";

type PropsType = {
    /** List of courses */
    courses: Array<Course>,
    /** Action to be triggered when enroll button clicked */
    onEnrollBtnClick?: Function
};

/**
 * A Widget to display courses for our future React generations
 */
const CoursesWidget = ({
    courses,
    onEnrollBtnClick
}: PropsType): React.Node => (
    <div className="courses_widget">
        {courses.map(
            ({
                id,
                title,
                author,
                duration,
                image
            }: Course): React.Element<typeof CoursesItem> => (
                <CoursesItem
                    key={id}
                    title={title}
                    author={author}
                    duration={duration}
                    image={image}
                    onEnrollBtnClick={onEnrollBtnClick}
                />
            )
        )}
    </div>
);

CoursesWidget.defaultProps = {
    courses: []
};

export default CoursesWidget;
