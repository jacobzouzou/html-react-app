/* If you're feeling fancy you can add interactivity to your site with Javascript */

class BindButton extends React.Component {
  alert() {
    alert("Hello!");
  }
  render() {
    return (
      <div>
        <button onClick={this.alert}>Component</button>
      </div>
    );
  }
}

//local component: user props to bin handler
const Button = (props) => {
  return <button onClick={props.display}>Component props</button>;
};

ReactDOM.render(
  <div>
    <BindButton />
    <Button display={() => alert("Hello props!")} />
  </div>,
  document.getElementById("root")
);
