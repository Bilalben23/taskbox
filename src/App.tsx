import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';
import store from './lib/store';

const App = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;

// connected component
// Mercurochrome
// Mocking API Services: Mock Service Worker (MSW)
// Mock Service Worker is an API mocking library, it relies on service workers to capture network requests and provides mocked data in responses. 
// MSW intercepted our remote API call and provided the appropriate response.

// Storybook test runner: 

// npm i @storybook/test-runner

// Chromatic: a free publishing service made by the Storybook maintainers. It allows us te deploy and host our Storybook safely and securely in the cloud.
// continuous deployment (CD) & continuous integration (CI)

/*
  - visual tests or visual regression test: are designed to catch changes in appearance, they work by capturing screenshots of every story and comparing them commit-to-commit to surface changes. It's perfect for verifying graphical elements like layout, color, size, and contrast.

  - visual regression testing relies on comparing images of the newly rendered UI code to the baseline images. if a UI change is caught, we'll notified.
*/
/*
  * we have encountered three types of tests:
    - Manual tests
    - accessibility tests
    - component tests
*/

// aforementioned: مذكور سابقًا
