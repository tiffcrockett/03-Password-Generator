# Overview 

The Password Generator is my first JavaScript application.  It generates a random password based upon user-selected criteria.  The application runs in the browser and features dynamically updated HTML.  The interface is user-friendly and is responsive, adapting to multiple screen sizes.

I utilized alert(), prompt(), and confirm() to provide instructions to and get information from the user to ensure successful use of the application.  Upon initializing the applicatoin by clicking the Generate Password button, an alert message instructs the user regarding the OK and Cancel buttons on the popup pages.  The the user is asked a series of questions regarding the type of characters to be included in their password and the length.  The options are lowercase letters, uppercase letters, numbers, special characters and a length between 8 - 128 characters.  The user must include at least one type of character for the application to run.  Because multi-character passwords are more secure, and because it is possible for a password to be generated without special characters although the user selected the criteria, the code includes "required characters", which are special characters included in all randomized passwords. Once all criteria is gathered, a randomized password that meets the user-selected parameters is generated and prints to the webpage. 

I have been coding for 4 weeks at this point. Surfing for some help with my JavaScript, I came across several comments on Stack Overflow that using charCodes is a streamlined, more efficient way to code this type of project. I played around with that approach then opted for the more familiar. I used character strings and an array for my password generator. My code is 65 lines, maybe not as efficient as it could be, but it works!!  And I think it is logical and well structured - for a newbie.

The Password Generator application could be improved by adding features to allow users to create and manage a list of websites and corresponding usernames and passwords, maintaining a history of used passwords and change dates.  This would be especially helpful to users as it is recommended to update passwords periodically. 

#Screenshot 

![images](https://github.com/tiffcrockett/03-Password-Generator/blob/main/assets/images/PswdGenScrn.png)




#Link 

https://tiffcrockett.github.io/03-Password-Generator/
