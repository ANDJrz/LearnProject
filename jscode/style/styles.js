/**
 * Created by guoshuyu on 2017/2/10.
 */

import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";

const {width, height, scale} = Dimensions.get("window");


// navBar 高度
export const iosNav = 64;
export const androidNav = 50;

// tabBar 高度
export const tabBarHeight = 44;
export const tabIconSize = 20;

export const listItemHeight = 50;

export const slideItemHeight = 240;


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  listRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: listItemHeight,
    paddingLeft: 60,
  },

  slideContainer: {
    width: width,
    height: slideItemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slideImage: {
    width: width,
    height: slideItemHeight,
  },

  slideLoadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  slideLoadingImage: {
    width: 60,
    height: 60
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },

  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75
  },

  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  centered: {
    justifyContent: "center",
    alignItems: "center"
  },

  minGrayBackgroundColor: {
    backgroundColor: "#fafafa"
  },


  //字体相关
  primaryFontColor: {
    color: "#885ff3"
  },

  grayFontColor: {
    color: "#999"
  },

  tinyFontSize: {
    fontSize: 10
  },

  //间距
  smallBothSidesPadding: {
    paddingHorizontal: 9
  },

  commonMargin: {
    paddingHorizontal: 20
  },

});