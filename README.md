# [STARS.IO](https://jolly-northcutt-55a303.netlify.app/)

STARSIO is a Next.js app implementing image.nasa.gov API to support searching in the NASA Image Library.
<img src="/indexDemo.png" width="400"  />
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

<img src="/searchDemo.png" width="400"  />

Click the 'enter' icon or enter key to search NASA Image Library content

<img src="/SearchResultDemo.png" width="400"  />
### View Image Details
Click on the **Learn More** button in any of the cards. A detail page with title, image, and description is shown. 

<img src="/detailDemo.png" width="400"  />

This link is dynamicly created based on the image 'slug' (nasa_id).

### Web Share on Mobile

On mobile browsers, the image detail page will render a floating share icon.

<img src="/msDemo.png" width="400"  />

The button invokes Web Share API on mobile devices.

<img src="/msOnDemo.png" width="400"  />
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)