export class Constants {

  //public static URL_PATH = 'http://218.61.0.14:8080';   //地址
  public static URL_PATH = 'http://dlqzysg.com:10091';
  //public static URL_PATH = 'http://dlqzysg.com';

  public static LIST_URL = Constants.URL_PATH + '/web/commonContent/list';   //获取列表的信息

  public static DETAIL_URL = Constants.URL_PATH + '/web/commonContent/detail';   //获取详细信息

  public static PUSH_URL = Constants.URL_PATH + '/web/users/feedBack';   //获取推送的消息

  public static PULL_URL = Constants.URL_PATH + '/web/users/myFeedBack';   //获取收到的消息

  public static RECOMMAND_URL = Constants.URL_PATH + '/web/commonContent/favoriteList';   //获取推荐列表

  public static LOGIN_URL = Constants.URL_PATH + '/web/users/userLogin'; //登陆

  public static REGISTER_URL  = Constants.URL_PATH +  '/web/users/register'; //注册

  public static VERSION_URL  =  Constants.URL_PATH +  '/web/users/checkVersion';  //检查版本

  public static TRAINGING_URL  =  Constants.URL_PATH +  '/web/commonContent/list';    //培训通知, ID 27

  public static IMG_URL  =  Constants.URL_PATH +  '/Public/upload/article/';    //图片链接

}
