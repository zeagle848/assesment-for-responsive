import '../App.css';

function Intro() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Candidate</h1>
        <p>This assesment is broken into two parts.
          <ul style={{textAlign: 'left'}}>
            <li>The first part will assess your ability to debug and write end-to-end tests</li>
            <li>The second will assess your Javascript ability in order to get the tests to pass</li>
          </ul>
        </p>
        <div style={{maxWidth: '50%'}}>
          <h3><u>How it works</u></h3>
          <p>
            There are 2 end-to-end scenarios that you will run.
          </p>
          <p>
            The first scenario has a poorly written test that is failing and needs to be fixed.
            The app in this instance is correct the only changes to be made are within the test folders under <span className='file'>/wdio</span>.
            You will need to check that the page objects, step definitions and feature file in <span className='file'>/wdio/features</span> is correct
          </p>
          <p>
            The second scenario has a test that is correctly failing as there is an issue in the apps js file.
            For this scenario you will need to get the app working as per the test.
            The only changes needed will be in the <span className='file'>/src/pages/test2.js</span> file.
          </p>
        </div>
        <div style={{maxWidth: '50%'}}>
          <h3><u>Getting started</u></h3>
          <ol style={{textAlign: 'left'}}>
            <li>node modules to be installed for both the root app and the <span className='file'>/wdio</span> folder by running <span className='command'>npm i</span></li>
            <li>To run the react app you need to be in the root folder and run command <span className='command'>npm run start</span></li>
            <li>To run the end to end test you need to be in the <span className='file'>/wdio</span> folder and run the command <span className='command'>npm run wdio</span></li>
          </ol>
        </div>
        <div style={{maxWidth: '50%'}}>
          <h3><u>Additional Info</u></h3>
          <ul style={{textAlign: 'left'}}>
            <li>The app is bootstrapped using create react app.</li>
            <li>The End-To-End test runner is WebDriverIO</li>
            <li>The tests use the Page Objects pattern <a href='https://webdriver.io/docs/pageobjects/' target="_blank" rel="noreferrer">WebdriverIO Page Object Pattern</a></li>
            <li>More info about the runner can be found at <a href='https://webdriver.io/docs/gettingstarted' target="_blank" rel="noreferrer">WebdriverIO Documentation</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Intro;
