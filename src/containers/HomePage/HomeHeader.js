import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i class="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    {" "}
                                    <b>
                                        {" "}
                                        <FormattedMessage id="homeheader.speciality" />{" "}
                                    </b>
                                </div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.searchdoctor" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    {" "}
                                    <FormattedMessage id="homeheader.health-facility" />
                                </div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.select-room" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    <FormattedMessage id="homeheader.doctor" />
                                </div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.select-doctor" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    <FormattedMessage id="homeheader.fee" />
                                </div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.check-health" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className="title2">
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className="search">
                            <i class="fas fa-search "></i>
                            <input
                                type="text"
                                placeholder="Tìm bác sĩ chuyên khoa"
                            />
                        </div>
                    </div>
                    <div className="content-down">
                        {" "}
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-hospital"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child1" />
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-stethoscope"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child2" />
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child3" />
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-vial"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child4" />
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-hospital"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child5" />
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fas fa-hospital"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
