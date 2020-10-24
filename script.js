const initialState= `
This is a paragraph

**This is bolded text**
> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my github page](https://github.com/Mystfreak)

This is inline \`<div></div>\`

This is a block of code:
\`\`\`
let x = 1
let y = 1
let z = x + y;
\`\`\`

![React](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)
`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
    
  }

  render() {
    
    const {text} = this.state;
    const markdown = marked(text, {breaks: true});
    
    return(
   <div>
    <h2 className="text-center mt-4">Convert your Markdown</h2>
     <div className="row">
      <div className="col-6">
        <h6 className="text-center">Enter your markdown here:</h6>
        <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
      </div>
      <div className="col-6">
        <h6 className="text-center">See the result:</h6>
        <div className="preview rounded p-2" 
          dangerouslySetInnerHTML={{__html: markdown}} id="preview">   
        </div>
      </div>
     </div>
   </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));