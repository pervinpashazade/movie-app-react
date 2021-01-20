import React, { useState } from 'react'
import './style.css'
import useWindowsSize from '../../hooks/useWindowsSize'

//app store/play market svg icons
import appStoreSvg from '../../assets/images/static/Download_on_the_App_Store_Badge.svg';
import googlePlaySvg from '../../assets/images/static/google-play-badge.png'

function Footer() {

    const [width,] = useWindowsSize()
    const [isMobile,] = useState(width > 768 ? false : true)

    return (
        <footer class="footer">
            <div class="container">
                <div class="row">

                    <div class="col-12 col-md-3">
                        <h6 class="footer__title">Download Our App, soon!</h6>
                        <ul class="footer__app">
                            <li><a href="#"><img src={appStoreSvg} alt="download from app store" /></a></li>
                            <li><a href="#"><img src={googlePlaySvg} alt="download from google play" /></a></li>
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
                            <li><a href="tel:+18002345678">+994 55 279 06 34</a></li>
                            <li><a href="mailto:support@moviego.com">contact@filmgo.az</a></li>
                        </ul>
                        <ul class="footer__social">
                            <li class="yt"><a href="#"><i class="icon ion-logo-youtube"></i></a></li>
                            <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
                            <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                        </ul>
                    </div>

                    <div class="col-12">
                        <div class="footer__copyright">
                            <small>© 2021 FilmGo.az {isMobile && <br />}Created by <span>
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
