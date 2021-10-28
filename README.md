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
    - in src/components/main/profile[WillLook/Serials/Viewed] you have to add logic of empty film library, you can use 
      EmptyList to show message about the need for watch some films    
    - if some films are in library, you need to import ViewedList component with array of all film ids (you can this change logic if you need)
9. In src/components/main/profile/ViewedList you need to add films photo uploading from server.
10. In src/components/main/screens/Profile.js you need to add user select from db logic