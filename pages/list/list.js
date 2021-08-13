// list/list.js
var data=require("data.js");
var shops=data.main.shops;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nTitle:"美食--黄新龙",
    isSort:false,
    sortType:"综合排序",
    sortArr:["综合排序","距离最近","销量最高","评分从低到高","起送价从低到高","配送费从低到高","配送时间最短"],
    shopList:shops
  },
  setSort:function(){
    this.data.isSort=!this.data.isSort;
    this.setData({
      isSort:this.data.isSort
    })
  },

  chooseSort:function(e){
    console.log(e);
    this.setData({
      sortType:e.target.dataset.name,
      isSort:false
    })
  },

  setSort:function(){
    this.setData({
      isSort:!this.data.isSort
    })
  }
})