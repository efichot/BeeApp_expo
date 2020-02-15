## BeeApp

Implementation of an ultimate boilerplate with TS and expo for implementing design from supernova studio.

![Screenshot 2020-02-13 at 15 57 38](https://user-images.githubusercontent.com/16935590/74417952-2dd2fc80-4e7a-11ea-9c74-d10a1093af90.png)

- Download
  [project.sketch](https://drive.google.com/file/d/18XzTUq8MnbdSvq0alVoHcUcTes3IQ2WQ/view)

# Imformations

- Inside the `./app/navigation` folder you can find the ts files specific to the platform web or mobile. (the web.ts are handle by webpack for `yarn run web` command).
- Inside the `./assets` folder the images are in 3 resolutions for targeting the different resolutions of the screens (@1x, @2x, @3x), only the images without a @ in the name are imported for the web.
- `./web/global.css` all the global style you want to apply for the web environment
