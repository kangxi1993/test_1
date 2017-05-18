

module.exports = {
    /////////////////////////////////////////Android////////////////////////////////////////////////////////
    // 对应的java层代码
    // public static void loginSdk(String parm) {
    //     UGSdk.getInstance().login(new UGLoginListener() {
    //     @Override
    //         public void onSuccess(String token, String userId) {
    //             // Toast.makeText(app,
    //             // "token & userId = " + token + "\r\n" + userId,
    //             // Toast.LENGTH_SHORT).show();
    //             // 通知js层
    //             String jsPara = "\"" + token + "\"" + "," + "\"" + userId
    //                 + "\"";
    //             String jsCallStr = "require(\"NativeSdk\").onSdkLoginSuccess("
    //                 + jsPara + ")";
    //             // 输出调用的js字符串
    //             Log.e("CallJs: ", jsCallStr);
    //             Cocos2dxJavascriptJavaBridge.evalString(jsCallStr);
    //         }
    //     });
    // }
    // android 登录
    onLoginWithAndroid: function () {
            var className = "org/cocos2dx/javascript/AppActivity";
            var methodName = "loginSdk";
            var sign = "(Ljava/lang/String;)V";
            var para = "test";
            jsb.reflection.callStaticMethod(className, methodName, sign, para);
    },

}
