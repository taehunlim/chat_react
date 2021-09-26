(self["webpackChunkadmin_template"] = self["webpackChunkadmin_template"] || []).push([["ChatRoom"],{

/***/ "./src/components/hooks/useChat.ts":
/*!*****************************************!*\
  !*** ./src/components/hooks/useChat.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};




var useChat = function useChat(roomId) {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      messages = _a[0],
      setMessages = _a[1];

  var socketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    socketRef.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.default)('http://localhost:5000', {
      query: {
        roomId: roomId
      }
    });
    socketRef.current.on('newChatMessage', function (message) {
      var incomingMessage = __assign(__assign({}, message), {
        ownedByCurrentUser: message.senderId === socketRef.current.id
      });

      setMessages(function (messages) {
        return __spreadArray(__spreadArray([], messages), [incomingMessage]);
      });
    });
    return function () {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  var sendMessage = function sendMessage(messageBody) {
    console.log(socketRef);
    socketRef.current.emit('newChatMessage', {
      body: messageBody,
      senderId: socketRef.current.id
    });
  };

  return {
    messages: messages,
    sendMessage: sendMessage
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChat);

/***/ }),

/***/ "./src/pages/ChatRoom.tsx":
/*!********************************!*\
  !*** ./src/pages/ChatRoom.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_hooks_useChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hooks/useChat */ "./src/components/hooks/useChat.ts");



var ChatRoom = function ChatRoom(props) {
  var roomId = props.match.params.roomId;

  var _a = (0,_components_hooks_useChat__WEBPACK_IMPORTED_MODULE_1__.default)(roomId),
      messages = _a.messages,
      sendMessage = _a.sendMessage;

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      newMessage = _b[0],
      setNewMessage = _b[1];

  var handleNewMessageChange = function handleNewMessageChange(e) {
    setNewMessage(e.target.value);
  };

  var handleSendMessage = function handleSendMessage() {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "room-name"
  }, "Room: ", roomId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "messages-list"
  }, messages.map(function (message, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i,
      className: "message-item " + (message.ownedByCurrentUser ? "my-message" : "received-message")
    }, message.body);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    value: newMessage,
    onChange: handleNewMessageChange,
    placeholder: "Write message...",
    className: "new-message-input-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleSendMessage,
    className: "send-message-button"
  }, "Send"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatRoom);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZUNoYXQudHMiLCJ3ZWJwYWNrOi8vYWRtaW5fdGVtcGxhdGUvLi9zcmMvcGFnZXMvQ2hhdFJvb20udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQUMsTUFBRCxFQUFPO0FBQ2IsV0FBMEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBQyxRQUFRLFFBQVQ7QUFBQSxNQUFXLFdBQVcsUUFBdEI7O0FBQ04sTUFBTSxTQUFTLEdBQUcsNkNBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUEsa0RBQVMsQ0FBQztBQUNOLGFBQVMsQ0FBQyxPQUFWLEdBQW9CLHlEQUFjLENBQUMsdUJBQUQsRUFBMEI7QUFDeEQsV0FBSyxFQUFFO0FBQUUsY0FBTTtBQUFSO0FBRGlELEtBQTFCLENBQWxDO0FBSUEsYUFBUyxDQUFDLE9BQVYsQ0FBa0IsRUFBbEIsQ0FBcUIsZ0JBQXJCLEVBQXVDLFVBQUMsT0FBRCxFQUFRO0FBQzNDLFVBQU0sZUFBZSx5QkFDZCxPQURjLEdBQ1A7QUFDViwwQkFBa0IsRUFBRSxPQUFPLENBQUMsUUFBUixLQUFxQixTQUFTLENBQUMsT0FBVixDQUFrQjtBQURqRCxPQURPLENBQXJCOztBQUlBLGlCQUFXLENBQUMsVUFBQyxRQUFELEVBQVM7QUFBSywrQ0FBSSxRQUFKLEdBQVksQ0FBWixlQUFZLENBQVo7QUFBOEIsT0FBN0MsQ0FBWDtBQUNILEtBTkQ7QUFRQSxXQUFPO0FBQ0gsZUFBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBbEI7QUFDSCxLQUZEO0FBR0gsR0FoQlEsRUFnQk4sQ0FBQyxNQUFELENBaEJNLENBQVQ7O0FBa0JBLE1BQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLFdBQUQsRUFBWTtBQUM1QixXQUFPLENBQUMsR0FBUixDQUFZLFNBQVo7QUFDQSxhQUFTLENBQUMsT0FBVixDQUFrQixJQUFsQixDQUF1QixnQkFBdkIsRUFBeUM7QUFDdEMsVUFBSSxFQUFFLFdBRGdDO0FBRXRDLGNBQVEsRUFBRSxTQUFTLENBQUMsT0FBVixDQUFrQjtBQUZVLEtBQXpDO0FBSUgsR0FORDs7QUFRQSxTQUFPO0FBQUUsWUFBUSxVQUFWO0FBQVksZUFBVztBQUF2QixHQUFQO0FBQ0gsQ0EvQkQ7O0FBaUNBLGlFQUFlLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7QUFFQSxJQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVcsQ0FBQyxLQUFELEVBQU07QUFFWCxZQUFNLEdBQUssS0FBSyxDQUFDLEtBQU4sQ0FBWSxNQUFaLENBQUwsTUFBTjs7QUFDRixXQUE0QixrRUFBTyxDQUFDLE1BQUQsQ0FBbkM7QUFBQSxNQUFFLFFBQVEsY0FBVjtBQUFBLE1BQVksV0FBVyxpQkFBdkI7O0FBQ0EsV0FBOEIsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBQyxVQUFVLFFBQVg7QUFBQSxNQUFhLGFBQWEsUUFBMUI7O0FBRU4sTUFBTSxzQkFBc0IsR0FBRyxTQUF6QixzQkFBeUIsQ0FBQyxDQUFELEVBQTBDO0FBQ3JFLGlCQUFhLENBQUMsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFWLENBQWI7QUFDSCxHQUZEOztBQUlBLE1BQU0saUJBQWlCLEdBQUcsU0FBcEIsaUJBQW9CO0FBQ3hCLGVBQVcsQ0FBQyxVQUFELENBQVg7QUFDQSxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0ksMkVBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLLFFBQUEsRUFDVyxNQURYLENBREosZUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDSyxRQUFRLENBQUMsR0FBVCxDQUFhLFVBQUMsT0FBRCxFQUFVLENBQVYsRUFBVztBQUFLLHdCQUMxQjtBQUNJLFNBQUcsRUFBRSxDQURUO0FBRUksZUFBUyxFQUFFLG1CQUNQLE9BQU8sQ0FBQyxrQkFBUixHQUE2QixZQUE3QixHQUE0QyxrQkFEckM7QUFGZixPQU1LLE9BQU8sQ0FQYyxJQUMxQixDQUQwQjtBQVM3QixHQVRBLENBREwsQ0FESixDQUxKLGVBbUJJO0FBQ0ksU0FBSyxFQUFFLFVBRFg7QUFFSSxZQUFRLEVBQUUsc0JBRmQ7QUFHSSxlQUFXLEVBQUMsa0JBSGhCO0FBSUksYUFBUyxFQUFDO0FBSmQsSUFuQkosZUF5Qkk7QUFBUSxXQUFPLEVBQUUsaUJBQWpCO0FBQW9DLGFBQVMsRUFBQztBQUE5QyxLQUFtRSxNQUFuRSxDQXpCSixDQURKO0FBK0JILENBOUNEOztBQWdEQSxpRUFBZSxRQUFmLEUiLCJmaWxlIjoianMvQ2hhdFJvb20uY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc29ja2V0SW9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3QgdXNlQ2hhdCA9IChyb29tSWQpID0+IHtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBzb2NrZXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXRSZWYuY3VycmVudCA9IHNvY2tldElvQ2xpZW50KCdodHRwOi8vbG9jYWxob3N0OjUwMDAnLCB7XG4gICAgICAgICAgICBxdWVyeTogeyByb29tSWQgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQub24oJ25ld0NoYXRNZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluY29taW5nTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIG93bmVkQnlDdXJyZW50VXNlcjogbWVzc2FnZS5zZW5kZXJJZCA9PT0gc29ja2V0UmVmLmN1cnJlbnQuaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbLi4ubWVzc2FnZXMsIGluY29taW5nTWVzc2FnZV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgIH0sIFtyb29tSWRdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2VCb2R5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvY2tldFJlZilcbiAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQuZW1pdCgnbmV3Q2hhdE1lc3NhZ2UnLCB7XG4gICAgICAgICAgIGJvZHk6IG1lc3NhZ2VCb2R5LFxuICAgICAgICAgICBzZW5kZXJJZDogc29ja2V0UmVmLmN1cnJlbnQuaWQsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBtZXNzYWdlcywgc2VuZE1lc3NhZ2UgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2hhdDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob29rcy91c2VDaGF0XCI7XG5cbmNvbnN0IENoYXRSb29tID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IHJvb21JZCB9ID0gcHJvcHMubWF0Y2gucGFyYW1zO1xuICAgIGNvbnN0IHsgbWVzc2FnZXMsIHNlbmRNZXNzYWdlIH0gPSB1c2VDaGF0KHJvb21JZCk7XG4gICAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVOZXdNZXNzYWdlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpO1xuICAgICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyb29tLW5hbWVcIj5cbiAgICAgICAgICAgICAgICBSb29tOiB7cm9vbUlkfVxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZS1pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3duZWRCeUN1cnJlbnRVc2VyID8gXCJteS1tZXNzYWdlXCIgOiBcInJlY2VpdmVkLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmV3TWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlLWlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJzZW5kLW1lc3NhZ2UtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=