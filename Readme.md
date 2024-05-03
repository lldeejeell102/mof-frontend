# MOF (My Only Friend)

- **Name:** Daniel Ji
- **App Name:** MOF
- **Description:** This app allows you to login and chat with an AI bot
- **Github URL:** 
https://github.com/lldeejeell102/mof-frontend
- **Deployed Website:** 
https://myonlyfriend.netlify.app/


## Route Map
| Route Name | Endpoint | Method | Description |
| -----------| ---------| -------| ------------|
| Login | /login | GET | Shows a login form for the user access their friend |
| Signup | /signup | POST | Creates a user |
| Logout | /logout | DELETE | Logs the user out |
| My Friend | /chat | GET | Shows a chatbox and inputbox |
| Messages | /history | GET | All submitted messages by user |
| Messages | /history | PUT | edits a message submitted by user |



## Vue Component Hierarchy
![Vue Component Hierarchy](https://i.imgur.com/uHlbll0.png)


## Design Mockup (Desktop & Mobile)

#### Mobile Design
![Mobile Design Mokcup](https://i.imgur.com/E2L9TWH.png)

#### Desktop Design
![Desktop Design Mokcup](https://i.imgur.com/FR4hThu.png)


## Technologies Used
- Dotenv
- Vue
- Vue-router
- webpack
- webpack-cli