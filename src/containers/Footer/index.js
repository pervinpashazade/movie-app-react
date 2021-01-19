import React from 'react'
import './style.css'

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">

                    <div class="col-12 col-md-3">
                        <h6 class="footer__title">Download Our App</h6>
                        <ul class="footer__app">
                            <li><a href="#"><img src="img/Download_on_the_App_Store_Badge.svg" alt="" /></a></li>
                            <li><a href="#"><img src="img/google-play-badge.png" alt="" /></a></li>
                        </ul>
                    </div>



                    <div class="col-6 col-sm-4 col-md-3">
                        <h6 class="footer__title">Resources</h6>
                        <ul class="footer__list">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="pricing.html">Pricing Plan</a></li>
                            <li><a href="faq.html">Help</a></li>
                        </ul>
                    </div>



                    <div class="col-6 col-sm-4 col-md-3">
                        <h6 class="footer__title">Legal</h6>
                        <ul class="footer__list">
                            <li><a href="privacy.html">Terms of Use</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="privacy.html">Security</a></li>
                        </ul>
                    </div>



                    <div class="col-12 col-sm-4 col-md-3">
                        <h6 class="footer__title">Contact</h6>
                        <ul class="footer__list">
                            <li><a href="tel:+18002345678">+1 800 234-5678</a></li>
                            <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                        </ul>
                        <ul class="footer__social">
                            <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                            <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
                            <li class="twitter"><a href="#"><i class="icon ion-logo-twitter"></i></a></li>
                            <li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
                        </ul>
                    </div>



                    <div class="col-12">
                        <div class="footer__copyright">
                            <small>© 2021 FilmGo.az Created by <span>
                                    <a href="https://www.facebook.com/pervin.pashazade"
                                        target="_blank">Pervin Pashazade
                                    </a>
                                </span>
                                <span> & </span>
                                <span>
                                    <a href="https://www.facebook.com/resad.nagiyev"
                                        target="_blank">Reshad Naghiyev
                                    </a>
                                </span>
                            </small>

                            <ul>
                                <li><a href="privacy.html">Terms of Use</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
