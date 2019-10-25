

# react-native bug report (good version)

**Can use `{transform: [{translateX: xxx}]}` style to update `View` Component position.**



```
npm install
react-native run-ios
```


## bad version
```
  "react": "16.9.0",
  "react-native": "0.61.0-rc.0"
```

## good version
```
  "react": "16.8.6",
  "react-native": "0.60.6"
```

All version i have tested.

```
"0.61.2": "2019-10-02T19:07:56.322Z",        bad
"0.61.1": "2019-09-25T09:41:00.827Z",
"0.61.0": "2019-09-24T19:41:03.466Z",        bad
"0.60.6": "2019-09-24T15:21:26.986Z",        good
"0.61.0-rc.3": "2019-09-10T17:13:38.854Z",
"0.61.0-rc.2": "2019-09-04T16:09:03.174Z",   bad
"0.61.0-rc.0": "2019-08-27T14:41:13.822Z",   bad
"0.60.5": "2019-08-13T17:26:20.325Z",        good
"0.60.4": "2019-07-18T12:59:22.263Z",        good
"0.60.3": "2019-07-11T18:40:32.917Z",
"0.60.2": "2019-07-11T16:23:46.215Z",
"0.60.1": "2019-07-11T15:57:55.193Z",
"0.60.0": "2019-07-03T13:01:09.729Z",        good
```

bad version: https://github.com/xqin/react-native-view-transform-bad

# screenshot

![screenshot](./screenshot.png "screenshot")

