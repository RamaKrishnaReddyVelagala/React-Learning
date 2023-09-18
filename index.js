// ReactDOM.render(<h1>React i am here</h1>, document.getElementById("root"))

// ReactDOM.render(<p>H, My name is Ram.</p>, document.getElementById("root"))

// ReactDOM.render(
//     <ul><li>Thing1</li><li>Thing2</li></ul> , document.getElementById("root")
// )

// NAVBAR

/*
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return(
        <h1>I'm Learning React!</h1>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>
    ,
    document.getElementById("root")
)
*/


/*
JSX - javascript XMLDocument, This is a flavour of javascript which looks a lot like html, made react very declarative instead of imperative.

ReactDOM.render(
<h1 className="header"> This is JSX</h1>, document.getElementById("root"))

ReactDOM.render(
    <div>
        <h1 className="header"> This is JSX</h1>
        <p className="Body"> This is body after wrapping!</p>
    </div>
    , document.getElementById("root"))
*/

// saving it as a variable

/*
const page = (
<div>
<h1 className="header"> This is JSX</h1>
<p className="Body"> This is body after wrapping!</p>
</div>
)

ReactDOM.render(
    page
    , document.getElementById("root"))
*/

/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const pageNavbar = (
    <nav>
        <h1>Ram's Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(pageNavbar, document.getElementById("root"))