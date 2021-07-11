# Grade Transfer | React Client
The React frontend client for the Grade Transfer project.

## Components
### App
App component, does not use any props.

### Nav
Nav component, does not use any props.

### Button
Custom Button component.
**Example:**
```js
<Button isFilled="true" action={() => alert('Click!')}>
  Click Me
</Button>
```

#### Variations
1. **"Filled:"** has a solid background, achieved via prop isFilled="true" or with no isFilled attribute
2. **"Void:"** has a transparent background, achieved via prop isFilled="false"

#### Events
1. **"Action:"** essentially onClick but to be passed to the component for handling.