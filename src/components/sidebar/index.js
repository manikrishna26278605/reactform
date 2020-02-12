import React from 'react';

const navLinks = [
    { url: '/about-us', name: 'About Us' },
    { url: '/projects', name: 'Projects' },
    { url: '/services', name: 'Services' },
    { url: '/contact-us', name: 'Contact Us' },
  ];
  
  class Sidebar extends React.Component {  
    constructor(){
      super();
      this.state = {
        style:"menu",
        menuStatus:"open"
      };
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleClick() {
      switch(this.state.menuStatus)
      
      {
        case "open":
          this.setState({
            menuStatus:"close",
            style:"menu active"
          });
          break;
        case "close":
          this.setState({
            menuStatus:"open",
            style:"menu"
          });
          break;
      }        
    }
  
    render() {
      return (      
        <div>
          <button onClick={this.handleClick}>menu</button>
          <div className={this.state.style}>               
            <ul>
              {navLinks.map(({ url, name }) => (
                <li>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Sidebar;






































// import React from "react";
// import Sidebar from "react-sidebar";
 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }
 
//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }
 
//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//       >
//         <button onClick={() => this.onSetSidebarOpen(true)}>
//           Open sidebar
//         </button>
//       </Sidebar>
//     );
//   }
// }
 
// export default App;