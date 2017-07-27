package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by chhormchhatra from KEEN Virtual Company of KIT on 7/22/17.
 */

public class pomEg {
    public pomEg(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\"email\"]")
    WebElement emailField;
    public void sendEmail(String email) {
        emailField.sendKeys(email);
    }
    @FindBy(xpath = "//*[@id=\"pass\"]")
    WebElement passwordField;
    public void sendPassword(String pass){
        passwordField.sendKeys(pass);
    }
    @FindBy(xpath = "//*[@id=\"loginform\"]/div[3]/a")
    WebElement recoverButton;
    public void RecoverBtn(){
        recoverButton.click();
    }
    @FindBy(xpath = "//*[@id=\"loginbutton\"]")
    WebElement loginButton;
    public void clickLoginButton(){
        loginButton.click();
    }

}
