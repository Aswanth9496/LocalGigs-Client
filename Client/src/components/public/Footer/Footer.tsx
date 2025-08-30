
import FooterList from "./FooterList";
import FooterIcons from "./FooterIcons";

import {FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn } from 'react-icons/fa'

function Footer(){

    return(
        <footer className="bg-gray-900 text-gray-300 w-full mt-auto p-8 pt-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
                    {/* Brand and Social Media */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-white text-xl font-bold bg-gradient-to-r from-[#48A3D9] px-1 to-[#48D9A5] rounded-lg">LG</span>
                            <span className="text-white text-2xl font-semibold">LocalGigs Connect</span>
                        </div>
                        <p className="text-sm mb-4">
                            Your trusted marketplace for local services. Connecting communities, one gig at a time.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <FooterIcons link="facebook" icon={<FaFacebookF className="w-5 h-5"/>} label="" />
                            <FooterIcons link="instagram" icon={<FaInstagram className="w-5 h-5" />} label="" />
                            <FooterIcons link="twitter" icon={<FaTwitter className="w-5 h-5"/>}  label=""  />
                            <FooterIcons link="linkdin" icon={<FaLinkedinIn className="w-5 h-5" />} label="" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
                         <ul className="space-y-2 text-sm">
                            <FooterList link="" text="How It Works" />
                            <FooterList link="" text="Features" />
                            <FooterList link="" text="For Seekers" />
                            <FooterList link="" text="For Providers" />
                         </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-lg text-white mb-4">Support</h4>
                         <ul className="space-y-2 text-sm">
                            <FooterList link="" text="Help Center"/>
                            <FooterList link="" text="Safety Guidelines"/>
                            <FooterList link="" text="Terms of Service"/>
                            <FooterList link="" text="Privacy Policy"/>
                         </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-lg text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                <span>info@localgigsconnect.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.45 2.76 3.82 5.13 6.58 6.58l2.25-2.25c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.25 2.25z"></path></svg>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-700 mb-4" />
                <div className="text-center text-sm">
                    © 2024 LocalGigs Connect. All rights reserved. | Powered by MERN Stack
                </div>
            </div>
        </footer>
    )
};


export default Footer;