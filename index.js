// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<h1>Hello, This is a React course</h1>, document.getElementById("root"));
// ReactDOM.render(<ul><b>Names</b>
//     <li>Wangari</li>
//     <li>Ayden</li>
//     <li>Zahara</li>
//     </ul>, document.getElementById('root'));

// function MainContent (){
//     return (
//         <h1>Hello there</h1>
//     )
// }

// ReactDOM.render(<MainContent />, document.getElementById('root'));
    
// const header = document.createElement("h1");
// header.textContent = "Learn react course";
// header.className = "header";
//  document.getElementById('root').appendChild(header);

//jsx
// const navbar = (
//         <nav>
//             <h1>Bogger</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>

// )
// ReactDOM.render(navbar , document.getElementById('root'));

//simple page
const webPage = (
    <main>
        <h1>My CrotchetSpace</h1>
        <p>We design your outfits to your preferred design and liking</p>
        <h2>our designs</h2>
            <p>1.bikinis</p>
            <p>2.shorts</p>
            <p>3.sweaters</p>
            <p>4.cover-ups</p>
            <footer>
                <h2>Contact Us</h2>
                  <ul>
                      <li>email:mycrotchetspace.com</li><br/>
                      <li>Mobile: +254712345678</li>
                  </ul>
                </footer>
    </main>
)

ReactDOM.render(webPage, document.getElementById('root'));