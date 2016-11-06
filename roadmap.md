## Overview

This site will be focused on building a portfolio for your Halo design "career". Content you build should be valued rather than shrugged off as something that doesn't matter for some reason. Many individuals feel their work in Halo does not compare to content created for CS:GO, Unreal, etc. Any time you put into a passion or hobby should be recognized and you should always have the opportunity to showcase it and be recognized for the amount of work you put into it.

I want the site to be run by **CAPI**, but I want it to be the data backend that is accessible from anywhere so it will be indirectly tied to this protfolio site. CAPI will give you access to the same data available on the portfolio site, just anywhere a Restful API can be used. Eventually CAPI will be a natural language chatbot that supports allowing you to accomplish tasks while away from the portfolio site.


## Feature Roadmap

 1. Waypoint File Browser Clone
 1. Condense Files for the same map into "Maps/Modes with Versions" Browsing
 1. Collect analytics of usage system
 1. Add authentication with Live account and Gamertag verification codes to know which files belong to who
 1. Add authentication with Live account and Gamertag verification codes to know which files belong to who
 1. Prepare home page to be Showcased with results of the review system
 1. Build review system
 1. Build content posts for publishing
 1. Expose Review, Content, and Showcase system
 1. Introduce Real Time notification system using Web Sockets and SNS subscribing


#### Unscheduled Features

 - Introduce customizable content posts
 - Enable external account Linking


## Ideas

#### Focus on review system
 - Home page has maps by most appreciated Reviewers
 - Maps show up there if a Reviewer does not have as many reviews as appreciated reviews that they have given
     - Example: Bob reviewed 5 maps, 3 were appreciated, and he only has one review on his maps; His maps will show up on that list until they receive a review
 - If a review is received it must be Appreciated or Disregarded before having access to any actions on the site
 - Reviews must be relatively difficult to complete
     - 4 sections of a minimum of 140 characters a piece (more than a tweet)
 - Reviews should be wordy rather than tied to an arbitrary number so value can be drawn as needed
 - Sections should focus on weeding out initial thoughts and encouraging digging deeper into analysis
     1. **Visuals** - The first thing a person interacts with and that sits with them easiest
     2. **Gameplay** - The second thing that can be pulled out after thoughts on visuals are poured out
     3. **Improvements** - After initial compilation of parts of the map, now's the time to pull out any criticisms to help improve the map
     4. **Uniqueness** - As a reviewer puts this map aside and completes the review, what will they remember most about the map that may make them return to it
 - Sections can be saved one at a time rather than all at once
 - If improvements are made to the system, require that people adjust their reviews to the new system
 - By showing maps by appreciated Reviewers on the front page, we encourage:
     - Lots of reviewing
     - Reviewing that can be appreciated
     - More quality relationships with members who go out of their way to review maps
 - Terminology is focused around **Appreciated** to encourage pulling away from whether or not you liked the review
 - Opposite of appreciated is  **Disregarded** to encourage creators to actually take in feedback by admitting that they are actively disregarding feedback, which must be an active decision, rather than one that happens because you don't like the criticisms
 - Reviews are qualified by the number of times the map was played prior to the review
 - Statistics around how many times the map has been played after a review is also available to give more feedback on whether that reviewer continued to play on the map (for whatever reason)


#### Focus on Presentation
 - No two map posts should be forced to look the same
 - Maps with unique posts stand out, so make this easier for people to do
 - Using a Bootstrap column system, allow creators to size sections to the 12 columns
 - Create any number of sections to better organize their posts allowing them to be moved around later
 - Allow providing metadata to help encourage how the map should be displayed and where:
     - Keywords
     - Tags
     - Compatible Modes
     - Environment
     - Style
     - Architecture
 - Presentation should be something that creators go out of their way for
     - This will not only encourage quality posts
     - Will also slow down published maps giving time for the community to review maps


#### Focus on Content Analytics

 - Creators can make better, more informed decisions about their content with statistics
 - How many times has my content been played
 - How many reviews does it have
 - How many playtests are done before a review is given
 - How many playtests are done after a review is given
 - How many versions were created
 - What are the average play times
 - What is weapon usage like
 - Average kill times
 - Heatmaps


#### Focus on Website Analytics

 - With Redux, it will be easy to track actions throughout the system
 - Things like:
     - Scrolled to bottom of list
     - Created a content post
     - Submitted a review
     - Opened a content post
     - Closed a content post
 - Use usage statitics to decide on new features


#### Focus on Marketing

 - Enable sharing the post to various social networks like:
     - Twitter
     - Facebook
     - Reddit
     - Waypoint
     - Forgehub
 - Get your content in front of reviewers
 - Get your content in front of 343
 - Get awesome summarized statistics to draw in players
 - Discover film clippable events in playtests to assist in marketing material creation
 - Make collection of screenshots or clips from other players easier


#### Focus on Development

 - Assist in tracking playtests
 - Assist in getting discovering playtest lobbies (ATN)
 - Assist in collecting screenshots
 - Assist in "journal entires" or "development posts" to help essentially build a WIP post
