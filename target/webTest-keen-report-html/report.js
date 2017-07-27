$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureEg.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "This feature is intended to test login feature the Login\r\nIn order to login with facebook login feature\r\nAs a user\r\nI want to see me login",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5492915194,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "login with E-mail",
  "description": "",
  "id": "login;login-with-e-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"longhaseng@gmail.com\" and \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see button Recover Your Account",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iGoTo(String)"
});
formatter.result({
  "duration": 4460180446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longhaseng@gmail.com",
      "offset": 9
    },
    {
      "val": "123",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iEnterAnd(String,String)"
});
formatter.result({
  "duration": 3562238773,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogin()"
});
formatter.result({
  "duration": 5044822225,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeButtonRecoverYourAccount()"
});
formatter.result({
  "duration": 23103616942,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"loginform\"]/div[3]/a\"}\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-C1VLG52\u0027, ip: \u002710.10.10.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\longh\\AppData\\Local\\Temp\\scoped_dir32896_24387}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 44ce6ad758d8a100aec3cb3150a87e85\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"loginform\"]/div[3]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat POM.pomEg.RecoverBtn(pomEg.java:30)\r\n\tat Steps.MyStepdefs.iShouldSeeButtonRecoverYourAccount(MyStepdefs.java:55)\r\n\tat ✽.Then I should see button Recover Your Account(featureEg.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1341801678,
  "status": "passed"
});
});