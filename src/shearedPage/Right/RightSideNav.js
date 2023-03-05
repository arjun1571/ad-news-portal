import React from 'react';
import AddSlider from './AddSlider';
import List from './List';
import LoginBtn from './LoginBtn';

const RightSideNav = () => {
    return (
        <div>
            <LoginBtn></LoginBtn>
            <List></List>
            <AddSlider></AddSlider>
        </div>
    );
};

export default RightSideNav;