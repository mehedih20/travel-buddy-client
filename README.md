## Travel Buddy Client-side

- A project that is made with such a vision that people can post unique travel plans and get enthusiastic buddies who would like to be part of it. One can request to several travel plans and with proper validation from the administration side, the request is verified.

### Client side

- [Live link](https://my-travel-buddy-ten.vercel.app)

### Server side

- [Github link](https://github.com/mehedih20/travel-buddy-server)
- [Live link](https://travel-buddies-seven.vercel.app)

### Features

- User registration and login
- Trip creation, modification and deletion
- Travel request to multiple trips but not more than once for the same trip.
- Trips request history
- Trip request approval by admins
- Destination management by admin
- Self profile management by all kinds of users
- Password change functionality for all
- Role specific data access and specialized dashboard for each role.
- User management by admin
- Super Admin functionality for ultimate role management
- Jwt based authentication and authorization on api calls
- Dynamic and protected routes
- Responsive design for accessibility from all kinds of devices

### Technologies used

- NextJs
- TypeScript
- Tailwind CSS and DaisyUi components
- Redux toolkit with RTQ query
- Others

### How to run the app locally

- Download or clone the project
- Install NodeJs if not installed
- Open the project and install node dependencies: npm install
- Create a .env.local in the root of the project and include the following credentials,
  - BACKEND_URL : server side link (for server actions)
  - NEXT_PUBLIC_BACKEND_URL: server side link (for redux rtk query)
- Run the project : npm run dev
- For building the project : npm run build
