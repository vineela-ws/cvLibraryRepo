package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JobSearch {
	
WebDriver driver ;
	
   @Given("^User is on cv library page$")
    public void user_is_on_cv_library_page() throws Throwable  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\vineelaa\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.cv-library.co.uk/");
		driver.manage().window().maximize();	
	}
	
	@Then ("^Check the logo$") public void Check_the_logo() {
		Boolean b = driver.findElement(By.xpath("//img[@itemprop='logo']")).isDisplayed();
		Assert.assertEquals(true, b);	
	}
	
	@When("^User Enter the (\"(.*)\") and (\"(.*)\")$")
	public void user_Enter_the_jobTitle_and_Location(String jobTitle,String Location) throws Throwable {
	    
		WebElement e = driver.findElement(By.xpath("//input[@id = 'keywords']"));
		Actions a = new Actions(driver);
		a.click(e).build().perform();
		a.sendKeys(jobTitle).build().perform();
		a.sendKeys(Keys.DOWN).build().perform();
		a.sendKeys(Keys.ENTER).build().perform();
		
		WebElement e1 = driver.findElement(By.xpath("//input[@id = 'location']"));
		Actions b = new Actions(driver);
		b.click(e1).build().perform();
		b.sendKeys(Location).build().perform();
		b.sendKeys(Keys.DOWN).build().perform();
		b.sendKeys(Keys.ENTER).build().perform();	
	}
	
	@Then("^Click on the FindJobs button$")
	public void click_on_the_FindJobs_button() {
		driver.findElement(By.xpath("hp-search-btn")).click();  
	}
	
	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
	    driver.quit();
	}
	
	
}