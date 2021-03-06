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
4. In src/components/inputs/login/NumberInput.js you can add logic of sms send (OnPress on Button with text "Подтвердить
   номер телефона")
5. In src/components/login/ConfirmNumber.js you can
    - change sms **RE**send logic (in sendSms function)
    - add code validation logic (in onSMSCodeSubmit function)
6. In src/components/main/profile/Header.js you can
    - add link copy logic (in copyLink function)
    - add link share logic (in shareLink function)
7. In src/components/main/profile/EmptyList you can add guide how to import film library from another service
8. I don't know how did you implement movie storage so:
    - in src/components/main/profile/screens/[WillLook/Serials/Viewed] you have to add logic of empty film library, you
      can use EmptyList to show message about the need for watch some films
    - if some films are in library, you need to import ViewedList component with array of all film ids (you can this
      change logic if you need)
9. In src/components/main/profile/ViewedList you need to add films photo uploading from server.
10. In src/components/main/screens/Profile.js you need to add user select from db logic
11. In src/components/main/profile/components/information[Persons, GraphStatistics, StatisticBlocks, Chart]
    you MUST change hardcode to data from server
12. In src/components/main/screens/Subscribes.js you can
    - add search logic
    - get users from database
    - add (un)subscribe logic into UnsubscribeModal
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
19. In src/components/buttons/RecommendedUsers.js you can change recommended users logic
20. In src/components/main/settings/Confidentiality.js you can add logic to enable / disable hidden profile
21. In src/components/main/settings/SettingsBlock.js you can add logic which will be called when country is changing
22. In src/components/main/settings/components/Notifications.js you can add notifications filters and logic for it
23. In src/components/main/settings/components/LogoutAndThemeChangeButtons.js you can add logout logic
24. In src/components/main/settings/profile/ProfileTabBar.js you can add custom filters and add logic to current filters
25. src/components/main/screens/Profile.js used for logged user and for another users, type of current screen and id of
    user you can see in type and userId that = 0 if user is logged in
26. In all places that link to the user you need to pass type = 2 and userId = id of user what you needed in
27. In src/components/films/components/[LargeFilmsPreview/MediumFilmsPreview/Collections].js you can load films from
    db (these components loading from main/screens/Popular.js) or from other component
28. In all places that use components from 26 area you can pass received from db data
29. In src/components/main/screens/Search.js you can add search logic
30. In sec/components/main/notification/screens/[Actions/Friends].js you can add loading notifications from db
31. In sec/components/main/notification/screens/Friends.js you must make the facebook and close recommendations buttons
    work
32. In sec/components/buttons/film/WatchedButton.js you can:
    - send requests to the server when cachedType or cachedWatched variables are change
    - add logic of modal buttons pressed
33. In src/components/films/components/SheetComponents/Review.js you can add movie scoring logic
34. In src/components/films/FilmReviews.js you can add 
    - logic of writing likes to the database
    - load reviews from db
35. In src/components/films/FriendsReviews.js you can add comment send logic.
36. In src/components/films/FilmsBlock.js you can add loading films from db
37. In src/components/films/FilmCrew.js you can add logic of person follow 
38. In src/components/buttons/film/CollectionLikeButton.js you can add collection likes logic
39. In src/components/films/FilmCollection.js you can add press on "add" button logic 
40. In src/components/main/screens/Profile.js you can add press on "addToFriends" button logic 

**P.S. In most places where there is interaction with the backend I left "alert" or "console.log", you can search by them**