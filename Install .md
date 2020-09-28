React  is js library
  Easy to integrate in existing project
  Core concepts: components, JSX - JavaScript and XML -, state, props
  React is independant from browser
  React Native for mobile browser

Install:
add react components (React and React DOM) from cdn:

Example:

<script "https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0-alpha.2/umd/react.development.js" crossorigin></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0-alpha.2/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


Example:
  //local component
  const button= ()=>{
    return <button>Save</button>;
  }

Display component in index.html file that must contain root elt with an id="app" 

example:
  ReactDOM.render(
    <button/>,document.getElementById("app")
  );

After these tags, is js script file or local script:

  <script src="app.js"></script>
  or 
  <script>
    //My app
  </script> 

To install babel from CLI:
1 install babel: npm install @babel/preset-env --save-dev 
2 add babel config ".babelrc"
3 add the following content to config file:

  {
      "presets": [
          "@babel/preset-env"
      ]
  }

*************************************************************
* Use a React project 
*************************************************************
 1 npm install create-react-app 
 2 "npx create-react-app project_name" or "npm create-react-app project_name" 
 
or use sandox
 - https://codesandbox.io/s/:
    - "pend" for one js script file, and "project" for multiple files
    - not use "import {module} from "file", but use "const {module}= file;"

 - https://codepen.io/flaviocopes/pen/VqeaxB 







