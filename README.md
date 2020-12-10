![Trailblaze](https://user-images.githubusercontent.com/65590878/100168511-44c96500-2e76-11eb-87e2-ed212c70afe2.png)


# Trailblaze

Trailblaze your way to new outdoor friends. Trailblaze is a geosocial single page application built with React/Redux/Rails. Find new friends in your area, communicate, explore trails and go on outdoor adventures.

Utilizes JSON Web Tokens, WebSockets, Google APIs, ActionCable, global state, Thunk middlware, and modern React hooks.

[Live Demo](https://trailblaze-app.netlify.app/)\
Note: To experience all features of the application, please sign-up for an account. There is currently seed data for Portland OR, Seattle WA, and Bellingham, WA.

[Demo Video](https://youtu.be/Pzksvd9wRZM)


## Installation

To run this application in your local environment, please follow these steps:

```
1. Clone this repository
2. Change directory to backend
3. Run 'bundle install'
4. If backend database does not exist:
  -Run 'rails db:create'
  -Run 'rails db:migrate'
  -Run 'rails db:seed'
5. Start the backend server, run 'rails s'
6. Open a new terminal tab
7. Change directory to frontend
8. In the root of the frontend directory, create a ".env" file. 
9. Inside the ".env" file, copy/paste the following two lines and insert your
   own API keys for Google Maps/Places/Autocomplete and for Hiking Project:

   REACT_APP_GOOGLE_API_KEY = insert_api_key_here
   REACT_APP_HIKING_PROJECT_API_KEY = insert_api_key_here

10. In the frontend/src/constants directory, change the constants to the 
    following:

   export const API_ROOT = 'http://localhost:3001/api/v1';
   export const API_WS_ROOT = 'ws://localhost:3001/api/v1/cable';

11. Run 'npm install'
12. Run 'npm start'
```
Note: To experience all features of the application, please sign-up for an account. There is currently seed data for Portland OR, Seattle WA, and Bellingham, WA.

## Contributing

Bug reports and pull requests are welcome on Github at:
https://github.com/dougschallmoser/trailblaze-react-app

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.
 

## Authors

* **Doug Schallmoser** - *All work* - [DougSchallmoser](https://github.com/dougschallmoser)


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)


## Acknowledgments

I would like to acknowledge The Hiking Project for providing great information via their API. And of course, all things Google including their wonderful APIs.

Special thanks to [Jack Howa](https://github.com/JackHowa/react-actioncable-provider) for implementing React 17 support for react-actioncable-provider.

Special thanks to [Dakota Lillie](https://github.com/dakotalillie) for his great Medium article "Using Action Cable With React".
