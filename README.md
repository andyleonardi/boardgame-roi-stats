# boardgame-roi-stats
What?
Web app to help boardgamers understand if our hobby is more expensive than going to the movies

How? 
1. Users can log in to pull their collection data from the app's database
2. There will be a page where users can view their collection top-level data, i.e. their collection size history, their average cost per play, etc
3. There will also be a page where users can view a list of their collections
4. The "collections" page will have a form where they can input their BGG user name, which will then sync
5. It will take users to a page where there are discrepancies, i.e. if a game is no longer in their "Own" list or if a game is previously not in the app's database
6. There will be forms where users can input missing data, i.e. purchase / sell date, price
7. On submit, the new data will be added to the collection data, and new data will be updated in the "analytics" page

Project sequencing
1. MVP will be #3 to #7 above, and a very limited analytics on #2. Will implement charts and graphs last.
2. Hard-code my current collection in a js file to start with. Only implement log ins and databases last.
3. Create skeletons of the 4 pages: 1) Homepage, 2) Collection, 3) Analytics and 4) Forms
4. Work on "Collection"
5. Create test page on pulling BGG API, once it works, work on logic of comparing hard-coded games list and list from BGG API
6. Create new array / list that contains only discrepancies
7. Work on "Forms", which takes the new list and create inputs for users to input purchase / sell data
8. Update the state of purchase / sell data on the hard-coded collection
9. Work on "Analytics", start simple by just having several cards that has "Cost per play", "Cost per game", "Total damage", "Current collection size"
10. Work on having charts, like chart on # buys & sells each month, damage trend, etc
11. Work on integrating collection data to Firebase, and lastly implement log in
