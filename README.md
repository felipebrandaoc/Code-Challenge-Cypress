## Code Challenge - Testing Cypress with TypeScript

To download this project dependencies just run the command below on your terminal:
``` 
npm install 
```
To run the tests with Cypress in window mode you can run:
``` 
npx cypress open 
```
or 
``` 
npm run cy:open
```
To run the tests with Cypress in headless mode, just use the command:
``` 
npx cypress run
```
or 
``` 
npm run test
```
The project is divided in:
````
Cypress
    - Downloads: Any files downloaded while testing an application's file download feature will be stored in the downloadsFolder which is set to cypress/downloads by default.
    - Fixtures: Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.
    - Integration: In this folder is where the test scripts are. Here we have the files (spec.js) that are going to run when the test begins.
    - Plugins: The plugins file is a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution. While the Cypress tests execute in the browser, the plugins file runs in the background Node process, giving your tests the ability to access the file system and the rest of the operating system by calling the cy.task() command.
    - Support: The support file is a great place to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files. This file runs before every single spec file.
    
```
