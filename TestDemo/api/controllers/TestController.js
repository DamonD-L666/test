/**
 * Created by winhong on 2017/7/22.
 */

module.exports = {

  TestWholeMethod:function(req,res){
    var val1 = sails.config.myRask.testData;
    var val2 = sails.config.myRask.testFunction();
    res.json({msg:'项目启动就加载了~',value1:val1,value2:val2});
  },

  TestCookie: function (req,res) {
    console.log(req.session.id);
    return res.json({msg:'cookie is'+req.cookie});
  }

}
