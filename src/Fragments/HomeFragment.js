import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../components/media/pandas.png';


import React, { Component } from 'react'
import { Avatar, Container } from '@material-ui/core';

export class HomeFragment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    })
  };

  render() {
    return (
      <Container maxWidth="md" fixed>
        <AppBar position="static" maxWidth="md" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab icon={<CategoryTab/>} />
          </Tabs>

        </AppBar>
      </Container>
    );
  }
}

export const CategoryTab =()=>{
  return(
    <Box>
    <Avatar
     alt="Remy Sharp"
    src={logo} />
    </Box>
  );
}

export default HomeFragment



