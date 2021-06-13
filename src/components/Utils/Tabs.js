import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { setTab } from '../../redux/user/user.actions';
import { selectTab } from '../../redux/user/user.selector';

const Tabs = ({ tab, setTab, children }) => {
    const select = index => () => {
        setTab(index);
    };

    const renderTabs = () => {
        const style = { cursor: 'pointer' };
        return React.Children.map(children, (item, index) => {
            if (index % 2 === 0) {
                return (
                    <Nav.Link className="px-4 text-center">
                        <span onClick={select(index)} className={`tab`} style={style}>
                            <strong>{item}</strong>
                        </span>
                    </Nav.Link>
                );
            }
        });
    };

    const renderContent = () => {
        return React.Children.map(children, (item, index) => {
            if (tab === index - 1) {
                return <div className="content m-4">{item}</div>;
            }
        });
    };

    // console.log({ tab, index });
    return (
        <Container>
            <div className="tabs">
                <Navbar bg="light">
                    <Nav>{renderTabs()}</Nav>
                </Navbar>
                {renderContent()}
            </div>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    tab: selectTab,
});
const mapDispatchToProps = dispatch => bindActionCreators({ setTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
