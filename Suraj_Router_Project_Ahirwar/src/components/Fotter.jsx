import { Center, Square, Circle } from '@chakra-ui/react'
import  "./Fotter.css"
import "./Style.css"
export const Fotter = () =>{
    return (
        <div className='footer'>
            <ul>
    <li><a href="https://www.facebook.com/surajifastdigital/" target="_blank">
        <i class="fab fa-facebook" tabindex="0"></i>
      </a></li>
    <li><a href="https://codepen.io/surajifastdigital/" target="_blank">
        <i class="fab fa-codepen" tabindex="0"></i>
      </a></li>
    <li><a href="https://www.instagram.com/surajifastdigital/" target="_blank">
        <i class="fab fa-instagram" tabindex="0"></i>
      </a></li>
    <li><a href="https://github.com/MartyDevelopment/surajahirwar" target="_blank">
        <i class="fab fa-github" tabindex="0"></i>
      </a></li>
    <li><a href="#">
        <i class="fab fa-youtube" tabindex="0" target="_blank"></i>
      </a></li>
    <li><a href="#">
        <i class="fab fa-pinterest" tabindex="0" target="_blank"></i>
      </a></li>
  </ul>

        </div>
    )
}