# React-native application based on react-native-cli and kitten ui.
## Requirements:

- JDK 15
- NodeJS 14

## Where I can change logic?
1. In main dir you have config.json in this file you can change:
    - application title
    - application tagline
2. In App.js you can 
    - change loading screen (screen what will be shown when application is loading) (in `<If condition={tokenLoading}>`)
    - add comparing token with database and deny user login (isSignedIn variable)
3. In src/components/login/LoginPage.js you can change terms of use (Button onPress)
4. In src/components/inputs/login/NumberInput.js you can add logic of sms send (OnPress on Button with text "Подтвердить номер телефона")
5. In src/components/login/ConfirmNumber.js you can 
    - change sms **RE**send logic (in sendSms function)
    - add code validation logic (in onSMSCodeSubmit function) 
6. In src/components/main/profile/Header.js you can
    - add link copy logic (in copyLink function)
    - add link share logic (in shareLink function)
7. In src/components/main/profile/EmptyList you can add guide how to import film library from another service
8. I don't know how did you implement movie storage so:
    - in src/components/main/profile/screens/[WillLook/Serials/Viewed] you have to add logic of empty film library, you can use 
      EmptyList to show message about the need for watch some films    
    - if some films are in library, you need to import ViewedList component with array of all film ids (you can this change logic if you need)
9. In src/components/main/profile/ViewedList you need to add films photo uploading from server.
10. In src/components/main/screens/Profile.js you need to add user select from db logic
11. In src/components/main/profile/components/information[FavoriteActors, FavoriteDirectors, GraphStatistics, StatisticBlocks, Chart] you MUST change hardcode to data from server
12. In src/components/main/screens/Subscribes.js you can
    - add search logic
    - get users from database
    - change checkmark-circle-2-outline to plus-circle-outline when user don't subscribe on another user
    - add (un)subscribe logic into UnsubscribeModal
    - change "Отписаться" to "Подписаться" in UnsubscribeModal when user isn't a subscriber
13. In src/components/main/top/BestUsers.js you can:
    - add the best users loading from db
    - add current user loading from db
14. In src/components/main/top/AnotherUsers.js you can load users from db. <br/>
**13 and 14 areas are called from src/components/main/screens/UsersTop.js you can pass parameters from there** <br/>
15. In src/components/main/Settings/UserPhoto.js you can load user photo from db.
16. In src/components/main/Settings/components/PhotoModal.js you can add delete photo logic/upload photo to server logic
17. In src/components/main/settings/components/Modal.js you can:
    - delete user phone number
    - add change phone logic
18. In src/components/main/settings/FriendsAndFastEntrance.js you can add a choice of login method
19. In src/components/main/settings/Confidentiality.js you can add logic to enable / disable hidden profile 
20. In src/components/main/settings/SettingsBlock.js you can add logic which will be called when country is changing
21. In src/components/main/settings/components/Notifications.js you can add notifications filters and logic for it
21. In src/components/main/settings/components/LogoutAndThemeChangeButtons.js you can add logout logic