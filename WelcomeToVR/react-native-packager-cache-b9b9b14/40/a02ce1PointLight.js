
'use strict';

var _jsxFileName = '/home/alexia11/Projectos/ReactVR/WelcomeToVR/node_modules/react-vr/Libraries/Lights/PointLight.js';
var NativeMethodsMixin = require('NativeMethodsMixin');
var PropTypes = require('react/lib/ReactPropTypes');
var React = require('React');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var View = require('View');
var StyleSheetPropType = require('StyleSheetPropType');
var LayoutAndTransformColorPropTypes = require('LayoutAndTransformColorPropTypes');

var requireNativeComponent = require('requireNativeComponent');

var PointLight = React.createClass({
  displayName: 'PointLight',

  mixins: [NativeMethodsMixin],

  propTypes: babelHelpers.extends({}, View.propTypes, {
    style: StyleSheetPropType(LayoutAndTransformColorPropTypes),

    intensity: PropTypes.number,

    distance: PropTypes.number,

    decay: PropTypes.number
  }),

  viewConfig: {
    uiViewClassName: 'PointLight',
    validAttributes: babelHelpers.extends({}, ReactNativeViewAttributes.RCTView, {
      intensity: true,
      distance: true,
      decay: true
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {};
  },

  render: function render() {
    var props = babelHelpers.extends({}, this.props) || {};
    props.style = props.style || {};
    if (!props.style.position) {
      props.style.position = 'absolute';
    }
    return React.createElement(
      RKPointLight,
      babelHelpers.extends({}, props, {
        testID: this.props.testID,
        onStartShouldSetResponder: function onStartShouldSetResponder() {
          return true;
        },
        onResponderTerminationRequest: function onResponderTerminationRequest() {
          return false;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }),
      this.props.children
    );
  }
});

var RKPointLight = requireNativeComponent('PointLight', PointLight, {
  nativeOnly: {}
});

module.exports = PointLight;