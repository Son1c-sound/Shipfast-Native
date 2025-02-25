<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/user-attachments/assets/e6100891-b08b-4bcc-919b-da920e5902d7" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">SHIPFAST NATIVE ⚡</h3>

  <p align="center">
    AWESOME EXPO template to kickstart app developement
    <br />
</div>

<h1>What Boilerplate Includes</h1>
✅Onboarding 
<br />
✅Authentication (clerk oauth)
<br />
✅Analytics (posthog)
<br />
✅Subscription management & Paywalls (Revenuecat)

## Getting Started

To use project you should run production build: npm run ios or npm run android.
<br/>
Boilerplate is tested on both Apple and Android enviroments. for support contact me.

### Installation

1. Clone the repo
   ```sh
   git clone [https://github.com/github_username/repo_name.git](https://github.com/Son1c-sound/Shipfast-Native)
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API s, fill out enviromental variables.

   Before starting make sure!
   
   You have acquired clerk api key with google and apple oauth enabled, and bot protection DISABLED, for expo apps bot protection does not work. you can find this in clerk documentation aswell.
   <br/>
   You have completed setting up revenuecat and having configured paywall with entiltments set up. you will need entiltment ID for paywalls and subscription management.
   
   ```js
   Auth:
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

   Analytics:
   EXPO_PUBLIC_POSTHOG_API_KEY=''
   EXPO_PUBLIC_POSTHOG_HOST=

   Paywalls and Subscription management:
   EXPO_PUBLIC_REVENUECAT_ENTITLEMENT_ID='free-trial-expo'
   EXPO_PUBLIC_REVENUECAT_GOOGLE_API_KEY=''
   EXPO_PUBLIC_REVENUECAT_APPLE_API_KEY=''
   
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

