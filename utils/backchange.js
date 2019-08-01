var getImageColor = function (imgurl) {
  return new Promise(function (resolve, reject) {
    var ctx = wx.createCanvasContext('customCanvas')
    ctx.drawImage(imgurl, 0, 0, 100, 150)
    ctx.draw(false, function (e) {
      wx.canvasGetImageData({
        canvasId: 'customCanvas',
        x: 0,
        y: 0,
        width: 100,
        height: 150,
        success: function (res) {
          var r = 1, g = 1, b = 1;
          var data = res.data
          for (var row = 0; row < 150; row++) {
            for (var col = 0; col < 100; col++) {
              if (row == 0) {
                r += data[((100 * row) + col)];
                g += data[((100 * row) + col) + 1];
                b += data[((100 * row) + col) + 2];
              } else {
                r += data[((100 * row) + col) * 4];
                g += data[((100 * row) + col) * 4 + 1];
                b += data[((100 * row) + col) * 4 + 2];

              }
            }
          }
          r /= (100 * 150);
          g /= (100 * 150);
          b /= (100 * 150);
          r = Math.round(r);
          g = Math.round(g);
          b = Math.round(b);
          console.log(r, g, b)
          if (r < 100 && b < 100 && g < 100) {
            resolve('white')
          } else {
            resolve('black')
          }
        }
      })
  })
  
    
})
}
function test(){
  //console.log('success')
  return 'success';
}
module.exports = {
  getImageColor: getImageColor,
  test:test,
}