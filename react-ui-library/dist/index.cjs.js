'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const Button = ({ label, onClick }) => {
    return (jsxRuntime.jsx("button", { onClick: onClick, style: {
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            margin: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }, children: label }));
};

const typographyStyles = {
    fontFamily: "'Poppins', sans-serif",
};
const loadGoogleFont = () => {
    if (!document.getElementById("google-font-poppins")) {
        const fontLink = document.createElement("link");
        fontLink.id = "google-font-poppins";
        fontLink.href =
            "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);
    }
};
const fontSizeMap = {
    small: "14px",
    medium: "16px",
    large: "20px",
    xlarge: "24px",
    xxlarge: "32px",
};
const fontWeightMap = {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
};
const Typography = ({ size = "medium", weight = "regular", color = "#333", children, }) => {
    loadGoogleFont();
    return (jsxRuntime.jsx("span", { style: Object.assign(Object.assign({}, typographyStyles), { fontSize: fontSizeMap[size], fontWeight: fontWeightMap[weight], color: color }), children: children }));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaCalendar (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},"child":[]}]})(props);
}function FaComment (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},"child":[]}]})(props);
}function FaEnvelope (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},"child":[]}]})(props);
}function FaHashtag (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"},"child":[]}]})(props);
}function FaLock (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},"child":[]}]})(props);
}function FaSortDown (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"},"child":[]}]})(props);
}function FaSortUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"},"child":[]}]})(props);
}function FaSort (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},"child":[]}]})(props);
}function FaUser (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},"child":[]}]})(props);
}

const sizeStyles = {
    small: { width: "150px", height: "30px", padding: "5px 30px" },
    medium: { width: "250px", height: "40px", padding: "8px 35px" },
    large: { width: "350px", height: "50px", padding: "10px 40px" },
};
const getIcon = (type) => {
    const iconStyle = {
        position: "absolute",
        left: "12px",
        color: "#ccc",
        fontSize: "18px",
    };
    switch (type) {
        case "text":
            return jsxRuntime.jsx(FaUser, { style: iconStyle });
        case "password":
            return jsxRuntime.jsx(FaLock, { style: iconStyle });
        case "email":
            return jsxRuntime.jsx(FaEnvelope, { style: iconStyle });
        case "number":
            return jsxRuntime.jsx(FaHashtag, { style: iconStyle });
        case "date":
            return jsxRuntime.jsx(FaCalendar, { style: iconStyle });
        case "textarea":
            return jsxRuntime.jsx(FaComment, { style: iconStyle });
        default:
            return null;
    }
};
const Input = ({ type, label, placeholder, value, options, checked, size = "medium", width, height, onChange }) => {
    const defaultSize = sizeStyles[size];
    const inputStyles = {
        fontSize: "16px",
        border: "1.5px solid #ccc",
        borderRadius: "8px",
        outline: "none",
        background: "white",
        width: width || defaultSize.width,
        height: height || defaultSize.height,
        padding: defaultSize.padding,
    };
    return (jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", marginBottom: "15px", position: "relative", maxWidth: "100%" }, children: [label && jsxRuntime.jsx("label", { style: { fontSize: "14px", fontWeight: 600, marginBottom: "5px", color: "#333" }, children: label }), jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative", width: "100%" }, children: [getIcon(type), type === "textarea" ? (jsxRuntime.jsx("textarea", { style: inputStyles, placeholder: placeholder, value: value, onChange: onChange })) : type === "select" && options ? (jsxRuntime.jsx("select", { style: inputStyles, value: value, onChange: onChange, children: options.map((option, index) => (jsxRuntime.jsx("option", { value: option, children: option }, index))) })) : (jsxRuntime.jsx("input", { style: inputStyles, type: type, placeholder: placeholder, value: value, checked: checked, onChange: onChange }))] })] }));
};

const Table = ({ data, columns, sortColumn, sortDirection, onSort, width }) => {
    return (jsxRuntime.jsx("div", { style: { maxWidth: width || "800px", fontFamily: "'Poppins', sans-serif", overflowX: "auto" }, children: jsxRuntime.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: "20px" }, children: [jsxRuntime.jsx("thead", { children: jsxRuntime.jsx("tr", { style: { background: "#f4f4f4", textAlign: "left" }, children: columns.map((col) => (jsxRuntime.jsxs("th", { style: { padding: "12px", borderBottom: "2px solid #ddd", cursor: col.sortable ? "pointer" : "default" }, onClick: () => col.sortable && onSort(col.accessor), children: [col.header, " ", col.sortable &&
                                    (sortColumn === col.accessor ? (sortDirection === "asc" ? jsxRuntime.jsx(FaSortUp, {}) : jsxRuntime.jsx(FaSortDown, {})) : jsxRuntime.jsx(FaSort, {}))] }, col.accessor))) }) }), jsxRuntime.jsx("tbody", { children: data.map((row, index) => (jsxRuntime.jsx("tr", { style: { background: index % 2 === 0 ? "#fff" : "#f9f9f9" }, children: columns.map((col) => (jsxRuntime.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #ddd" }, children: row[col.accessor] }, col.accessor))) }, index))) })] }) }));
};

class ListBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = (option) => {
            this.setState({ selected: option });
            if (this.props.onSelect) {
                this.props.onSelect(option);
            }
            else {
                console.warn("⚠️ Warning: onSelect function not provided to ListBox");
            }
        };
        this.state = {
            selected: props.defaultSelected || null,
        };
    }
    render() {
        const { options, layout = "vertical" } = this.props;
        const { selected } = this.state;
        return (jsxRuntime.jsx("div", { style: {
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: layout === "horizontal" ? "row" : "column",
                alignItems: "start",
                gap: "10px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                background: "#f9f9f9",
                maxWidth: "fit-content",
            }, children: options.map((option) => (jsxRuntime.jsxs("label", { style: {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "5px",
                }, children: [jsxRuntime.jsx("input", { type: "radio", name: "listbox", value: option, checked: selected === option, onChange: () => this.handleSelect(option) }), option] }, option))) }));
    }
}

// Header Component
const Header = ({ children, height = "60px" }) => (jsxRuntime.jsx("div", { style: { height, background: "#333", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold" }, children: children }));
// Footer Component
const Footer = ({ children, height = "50px" }) => (jsxRuntime.jsx("div", { style: { height, background: "#222", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }, children: children }));
const Sidebar = ({ children, width = "250px" }) => (jsxRuntime.jsx("div", { style: { width, background: "#f8f9fa", height: "100vh", padding: "20px", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }, children: children }));
const MainContent = ({ children, headerHeight = 60, footerHeight = 50 }) => {
    const contentHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
    return (jsxRuntime.jsx("div", { style: { flex: 1, padding: "20px", overflowY: "auto", height: contentHeight }, children: children }));
};

exports.Button = Button;
exports.Footer = Footer;
exports.Header = Header;
exports.Input = Input;
exports.ListBox = ListBox;
exports.MainContent = MainContent;
exports.Sidebar = Sidebar;
exports.Table = Table;
exports.Typography = Typography;
//# sourceMappingURL=index.cjs.js.map
