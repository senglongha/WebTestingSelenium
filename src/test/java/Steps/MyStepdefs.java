package Steps;

import Base.BaseUtil;
import POM.pomEg;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    private BaseUtil base;
    public MyStepdefs(BaseUtil base){
        this.base = base;
    }

    @Given("^I go to \"([^\"]*)\"$")
    public void iGoTo(String arg0) throws Throwable {
        base.driver.get(arg0);
    }

    @And("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterAnd(String arg0, String arg1) throws Throwable {
        pomEg obj = new pomEg(base.driver);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        obj.sendEmail(arg0);
        obj.sendPassword(arg1);
    }

    @When("^I click on login$")
    public void iClickOnLogin() throws Throwable {
        pomEg obj = new pomEg(base.driver);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        obj.clickLoginButton();
    }

    @Then("^I should see button Recover Your Account$")
    public void iShouldSeeButtonRecoverYourAccount() throws Throwable {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        pomEg obj = new pomEg(base.driver);
        obj.RecoverBtn();
    }
}
