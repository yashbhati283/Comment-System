# Comment-System
It is a web application which is build over Meteor platform and data is stored using MongoDB

# How to Run this web-application ?
# steps:
1.) your need to install node in your system. go to nodejs.com and download it.
2.) to install meteor:
      if you are a MAC user then use : curl https://install.meteor.com/ | sh
      if you are using Windows then you need to first install Chocolatey: use Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) in powershell
      then Use : choco install meteor
3.) In meteor if you want to create a new meteor app then use meteor create app_name
4.) copy my files present in client, server and test folder paste it in to your newly created client, server and test folder.
5.) in the command shell: go to that folder af newly created file then run:
        meteor add twbs:bootstrap
        and
        meteor add accounts-ui accounts-password
6.) then run your meteor add using commant line: meteor

# This web application is based on Meteor.js which runs over the Node.js
# In this user can login in to system and add a comment and his/her name wull be printed (according to the email given by removing all the characters after @) and below their name their comment will be shown.

Hope you like it!
cheers!
        
