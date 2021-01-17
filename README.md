# Password Generator

## Table of Contents
* [Description](#description)
* [Webpage-Images](#webpage-images)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies-Used](#technologies-used)
* [Deployed-Link](#deployed-link)
* [License](#license)
* [Contact Information](#contact)


## Description

The Password Generator generates a random password based upon user-selected criteria.  The application runs in the browser and features dynamically updated HTML.  The interface is user-friendly and is responsive, adapting to multiple screen sizes.

Alert(), prompt(), and confirm() provide instructions to and get information from the user to ensure successful use of the application.  Upon initializing the applicatoin by clicking the Generate Password button, an alert message instructs the user regarding the OK and Cancel buttons on the popup pages.  The the user is asked a series of questions regarding the type of characters to be included in their password and the length.  The options are lowercase letters, uppercase letters, numbers, special characters and a length between 8 - 128 characters.  The user must include at least one type of character for the application to run.  Because multi-character passwords are more secure, and because it is possible for a password to be generated without special characters although the user selected the criteria, the code includes "required characters", which are special characters included in all randomized passwords. Once all criteria is gathered, a randomized password that meets the user-selected parameters is generated and prints to the webpage. 


The application could be improved by adding features to allow users to create and manage a list of websites and corresponding usernames and passwords, maintaining a history of used passwords and change dates.  This would be especially helpful to users as it is recommended to update passwords periodically. 


## Application-Image

![Screenshot of webpage](https://github.com/tiffcrockett/03-Password-Generator/blob/main/assets/images/PswdGenScrn.png)

## Installation

No prior installation is required to properly use the Weather Dashobard application. Simply head to the Deployed Link included towards the bottom of this README.

## Usage

1. Click the red [Generate] button.
2. An alert message indicates that clicking OK=Yes and clicking "Cancel"=No.
3. Answer each of the four following questions by entering the required information or clicking OK or Cancel.
4. The password will automatically generate at the completion of the questions. 
5. The password does not persist when the application is reloaded.

## Technologies-Used

* [Bootstrap Framework](https://getbootstrap.com/)

## Deployed-Link

https://tiffcrockett.github.io/03-Password-Generator/

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/) license.  

## Contact

crockett.tiff@gmail.com

