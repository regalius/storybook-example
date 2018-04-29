// @flow
import * as React from "react";

import { Promo } from "../../flowtypes/promos";

import "./promo-bar.css";
import logo from "../../assets/logo.svg";

type PropsType = {
    /** List of promos to be displayed */
    promos: Array<Promo>
};

class PromoBar extends React.PureComponent<PropsType> {
    state = {
        currItem: 0,
        slideLength: 0
    };
    componentDidMount() {
        const { promos } = this.props;
        this.createNewInterval(this.props);
        this.setState({
            ...this.state,
            currItem: 0,
            slideLength: promos.length - 2
        });
    }

    componentWillReceiveProps(nextProps) {
        const { promos: currPromos } = this.props,
            { promos: nextPromos } = nextProps,
            { currItem } = this.state;
        if (currPromos.length !== nextPromos.length) {
            this.createNewInterval(nextProps);
            this.setState({
                ...this.state,
                slideLength: nextPromos.length - 2,
                currItem:
                    this.state.currItem > nextPromos.length - 1
                        ? nextPromos.length - 1
                        : this.state.currItem
            });
        }
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    createNewInterval = props => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }

        if (props.promos && props.promos.length > 1) {
            this.interval = setInterval(() => {
                this.setState({
                    ...this.state,
                    currItem:
                        this.state.currItem > this.state.slideLength
                            ? 0
                            : this.state.currItem + 1
                });
            }, 2000);
        }
    };

    render() {
        const { promos } = this.props,
            { currItem } = this.state;
        return (
            <div className="promo_bar__container">
                <div
                    className="promo_bar"
                    style={{ left: `${-100 * currItem}%` }}
                >
                    {promos.map(({ name }) => (
                        <span key={name} className="promo_bar__item">
                            <img
                                src={logo}
                                className="newsfeed__logo"
                                alt="logo"
                            />
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

PromoBar.defaultProps = {
    promos: []
};

export default PromoBar;
