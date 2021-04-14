
    const FooterTemplate=document.createElement('template');
    FooterTemplate.innerHTML= `
<style>


    footer {

        background-color: #133b4f;
        color:white;
        position:fixed;
        font-weight:bold;
        display:flex;
        justify-content:center;
        height:10%;
        left:0;
        bottom:0;
        width:100%;


    }
    
    
        
       
    </style>
    <footer>

    © Copyright 2021, All Rights Reserved
        

</footer>
`;
class Footer extends HTMLElement{
    constructor(){
super();

    }
connectedCallback()
{
    const shadowRoot = this.attachShadow({mode:'closed'});
    shadowRoot.appendChild(FooterTemplate.content);
    

}
}
customElements.define('footer-component',Footer)

