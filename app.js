/* If you're feeling fancy you can add interactivity to your site with Javascript */

class BindButton extends React.Component {
  onClick() {
    alert("Classic component click handler !");
  }
  render() {
  return (
      <div>
        <button onClick={this.onClick}>Bind button</button>
      </div>
    );
  }
}

const Button = (props) => {
  return <button onClick={props.onClick}>Click me!</button>;
};

ReactDOM.render(
  <div>
    <Button onClick={() => alert("Standalone handler form props")} />
    <BindButton />
  </div>,
  document.getElementById("root")
);
