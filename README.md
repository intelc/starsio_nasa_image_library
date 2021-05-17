# [STARS.IO](https://jolly-northcutt-55a303.netlify.app/)

STARSIO is an Next.js app implementing image.nasa.gov API to support searching in the NASA Image Library.
The goal of this project is to create a user-oriented, aesthetic, and mobile-first website for users to 
explore and share the NASA library.


<img src="/assets/indexDemo.png" width="400"  />

## Installation

Build and serve local production content using Node.js

```bash
npm run build
npm run start
```
Alternatively, [live demo](https://jolly-northcutt-55a303.netlify.app/) is avaliable.

## Features

### Search
Click the search bar at anywhere on the website

<img src="/assets/searchDemo.png" width="400"  />

Click the 'enter' icon or enter key to search NASA Image Library content

<img src="/assets/SearchResultDemo.png" width="400"  />

### View Image Details
Click on the **Learn More** button in any of the cards. A detail page with title, image, and description is shown. 

<img src="/assets/detailDemo.png" width="400"  />

This link is dynamicly created based on the image 'slug' (nasa_id).

### Web Share on Mobile

On mobile browsers, the image detail page will render a floating share icon.

<img src="/assets/msDemo.png" width="400"  />

The button invokes Web Share API on mobile devices.

<img src="/assets/msOnDemo.png" width="400"  />

### Dynamic Routing
Both search and image detail page uses dynamic routing and fetches data at run time. While this may result in more calls
than a cached/redux state solution, we guarantee that users can share search result and individual images which is the desired behavior.
Next.js's SSR capability ensures the dynamicly generated content are recognizable by search engines.

## Video
[Link](https://youtu.be/6j9EdQaig0w)

## License
[MIT](https://choosealicense.com/licenses/mit/)