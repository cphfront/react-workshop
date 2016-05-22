import React from 'react';

import Form from './form.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    cyan500, cyan700,
    grey100, grey300, grey400, grey500,
    pinkA200,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

const fields = [
  {
    id: 'name',
    inputComponentName: 'TextInput',
    placeholder: 'Enter your name'
  },
  {
    id: 'age',
    inputComponentName: 'TextInput',
    placeholder: 'Enter your age'
  },
  {
    id: 'gender',
    inputComponentName: 'Radio',
    options: ['male', 'female', 'other']
  }
];

export default function App() {
    // This replaces the textColor value on the palette
    // and then update the keys for each component that depends on it.
    // More on Colors: http://www.material-ui.com/#/customization/colors
    const lightBaseTheme = {
        spacing: {
            iconSize: 24,
            desktopGutter: 24,
            desktopGutterMore: 32,
            desktopGutterLess: 16,
            desktopGutterMini: 8,
            desktopKeylineIncrement: 64,
            desktopDropDownMenuItemHeight: 32,
            desktopDropDownMenuFontSize: 15,
            desktopDrawerMenuItemHeight: 48,
            desktopSubheaderHeight: 48,
            desktopToolbarHeight: 56,
        },
        fontFamily: 'Roboto, sans-serif',
        palette: {
            primary1Color: cyan500,
            primary2Color: cyan700,
            primary3Color: grey400,
            accent1Color: '#bada55',
            accent2Color: '#bada55',
            accent3Color: '#bada55',
            textColor: darkBlack,
            alternateTextColor: white,
            canvasColor: white,
            borderColor: grey300,
            disabledColor: fade(darkBlack, 0.3),
            pickerHeaderColor: cyan500,
            clockCircleColor: fade(darkBlack, 0.07),
            shadowColor: fullBlack,
        },
    };

    const muiTheme = getMuiTheme({
        palette: {
            primary1Color: '#bada55',
            primary2Color: '#bada55',
            primary3Color: '#bada55',
            accent1Color: '#bada55',
            accent2Color: '#bada55',
            accent3Color: '#bada55',
            textColor: '#bada55',
            alternateTextColor: white,
            canvasColor: white,
            borderColor: grey300,
            disabledColor: fade(darkBlack, 0.3),
            pickerHeaderColor: '#bada55',
            clockCircleColor: fade(darkBlack, 0.07),
            shadowColor: fullBlack,
        },
        appBar: {
            height: 50,
        },
    });
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <MyAwesomeReactComponent />
        </MuiThemeProvider>
    );
};

class MyAwesomeReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        age: ''
      }
    };
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  render() {
    console.log(this.state);
    return (
        <Grid>
            <Row style={{'padding': '32px'}}>
                <Col xs={12}>
                    <Card>
                        <Row>
                            <Col>
                                <CardHeader
                                    title="Marathon Estimates"
                                    titleStyle={{'fontSize': '32px'}}
                                />
                            </Col>
                            <Col>
                                <p>Second column</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form
                                    fields={fields}
                                    formData={this.state.formData}
                                    onChange={this.handleFormFieldChange}
                                />
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>
            <Row style={{'padding': '32px'}}>
                <Col xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title="second row first column"
                            titleStyle={{'fontSize': '32px'}}
                        />
                    </Card>
                </Col>
                <Col xs={8} md={4} mdOffset={1}>
                    <Card>
                        <CardHeader
                            title="second row second column"
                            titleStyle={{'fontSize': '32px'}}
                        />
                    </Card>
                </Col>
            </Row>
        </Grid>
    );
  }


  handleFormFieldChange(value, id) {
    this.setState({
      formData: Object.assign({}, this.state.formData, {
        [id]: value
      })
    });
  }

  // TODO: implement
  sendFormData() {
    fetch('marathon.com/api', {
      method: 'POST',
      body: JSON.stringify(this.state.formData)
    });
  }
}
