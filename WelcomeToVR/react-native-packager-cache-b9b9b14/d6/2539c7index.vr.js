Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/alexia11/Projectos/ReactVR/WelcomeToVR/index.vr.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactVr = require('react-vr');

var WelcomeToVR = function (_React$Component) {
    babelHelpers.inherits(WelcomeToVR, _React$Component);

    function WelcomeToVR() {
        babelHelpers.classCallCheck(this, WelcomeToVR);
        return babelHelpers.possibleConstructorReturn(this, (WelcomeToVR.__proto__ || Object.getPrototypeOf(WelcomeToVR)).apply(this, arguments));
    }

    babelHelpers.createClass(WelcomeToVR, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactVr.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                _react2.default.createElement(_reactVr.Pano, { source: (0, _reactVr.asset)('candies.jpg'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }),
                _react2.default.createElement(
                    _reactVr.Text,
                    {
                        style: {
                            backgroundImage: '#777879',
                            fontSize: 0.5,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{ translate: [0, 0, -3] }]
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    'Hello Fox!'
                )
            );
        }
    }]);
    return WelcomeToVR;
}(_react2.default.Component);

exports.default = WelcomeToVR;
;

_reactVr.AppRegistry.registerComponent('WelcomeToVR', function () {
    return WelcomeToVR;
});