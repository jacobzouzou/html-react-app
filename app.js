/* If you're feeling fancy you can add interactivity to your site with Javascript */

class BindButton extends React.Component {
  onClick() {
    alert("button clicked !");
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>Bind button</button>
      </div>
    );
  }
}

// const Button = props => {
//   return <button onClick={props.onClick}>Click me!</button>;
// }

ReactDOM.render(
  // <Button onClick={() => alert("use handler form props")} />,  // use props
  <BindButton />,
  document.getElementById('root')
)
