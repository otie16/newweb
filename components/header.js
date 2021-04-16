const HeaderTemplate=document.createElement('template');
 HeaderTemplate.innerHTML=`

   
    <style>
    
    header{
   
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items:center;
      }
      
      ul{
          display: flex;
          list-style-type: none;
          align-items: center;
      
      
      }
      
      ul li a{
          padding:  0px 20px;
          font-family: 'Open Sans', sans-serif;
          font-weight: bold;
          text-decoration: none;
          color: #3a3a3a;
          display: inline-block;
      }
          ul li a:hover{
              transition: ease-in .1s;
      
      border-bottom:2px solid  #133b4f;
      
        }
      
     
      
     
       .signup-btn{
          
          padding: 15px 30px;
          background-color: #c4c4f7;
          color: white;
          outline: none;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 50px;
       }
      
      
       .signup-btn:hover{
           box-shadow: 1px 3px 6px #133b4f;
           transition: ease-in .2s;
       }
    
    </style>
    <header>
        <div class="logo">
            <img src="img/company.png" alt="logo" width="100px">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="signup.html" class="signup-btn">Signup</a></li>
            </ul>
        </nav>
    </header>
    `;      

    class Header extends HTMLElement{

    
    constructor(){


super();
}


connectedCallback(){
const shadowRoot = this.attachShadow({mode:'closed'});
shadowRoot.appendChild(HeaderTemplate.content);



}
}
customElements.define('header-component', Header);




