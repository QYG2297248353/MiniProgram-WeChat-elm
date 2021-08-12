// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myAddress:"重庆信息技术职业学院金龙校区",
    shopList:[{
      "imgPath":"/image/img1.png",
      "title":"华莱士·全鸡汉堡（沙龙路二段奥提斯）",
      "score":"4.6",
      "sale":"8769",
      "time":"48分钟",
      "distance":"1.8km",
    },
    {
      "imgPath":"/image/img2.png",
      "title":"书亦烧仙草（重庆万州万达广场店）",
      "score":"2.3",
      "sale":"1231",
      "time":"12分钟",
      "distance":"9.9km",
    }],
    unlike:-1
  },
  showUnlike:function(e){
    console.log(e);
    let index=e.currentTarget.dataset.index;
    this.setData({
      unlike:index
    })
  },
  cancelUnlike:function(){
    this.setData({
      unlike:-1
    })
  },
  sureUnlike:function(e){
    let index=e.currentTarget.dataset.index;
    index=Number(index);
    let shops=this.data.shopList;
    shops.splice(index,1);
    this.setData({
      shopList:shops,
      unlike:-1
    })
  },

  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(res);
        wx.request({
          url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + res.latitude + "," + res.longitude + "&key=BRRBZ-EENKU-ALRVT-4JFQG-TYYA3-ZZBSU&get_poi=1",
          success: function (response) {
            console.log(response);
            that.setData({
              myAddress: response.data.result.address
            })
            console.log(that.data.myAddress);
          }
        })
      }
    });
    wx.cloud.init();
    const db = wx.cloud.database({
      env: 'elm-7g84c7ot790169ef'
    });
    db.collection('list').get({
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})