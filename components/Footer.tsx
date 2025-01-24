import { MenuLinks, TrustBadgesInfo } from '@/data'
import { CaladeaF } from '@/fonts'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer ">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4 className={` ${CaladeaF}`}>Qualifications</h4>
  	 			<ul  className={` text-white ${CaladeaF}`}>
  	 				<li>MBBS(King Edward Medical University)</li>
  	 				<li>Gold Medalist</li>
  	 				<li>Distinction Holder</li>
  	 				<li>Registered Medical Practitioner(PMDC)</li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className={` ${CaladeaF}`}>Quick Links</h4>
  	 			<ul className={` ${CaladeaF}`}>
            {MenuLinks.map((link, key) => (
  	 				<li key={key}><a className={`tex-white ${CaladeaF}`}  href={link.link}>{link.label}</a></li>

            ))}
  	 		
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className={` ${CaladeaF}`}>Services</h4>
  	 			<ul className={` ${CaladeaF}`}>

   {TrustBadgesInfo.map((service, key) => (
    <li className={`tex-white ${CaladeaF}`} key={key}> <Link target='_blank' href="https://wa.me/923371112221" > {service.title} </Link></li>
   ))}
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className={` ${CaladeaF}`}>follow us</h4>
           <p
            style={{
              lineHeight:'180%'
            }}
           className='text-white text-md pb-4'>
          Zia Hospital and Maternity Complex Main Ferozpur Road, Lahore
            <br ></br>
            drhamzaashrafzia@gmail.com
  <br></br>
 03371112221
          </p>
  	 			<div className="social-links">
  	 				<a target='_blank' href="https://www.tiktok.com/@doctorhamzaashraf?_t=8mkBEaepvRo&_r=1 "> <svg
        fill="#000000"
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
      </svg></a>
  	 				<a target='_blank' href="https://www.instagram.com/healthtipsbydrhamza/?igsh=eGV1dnd0NzR1bXdp">  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#000000"/>
      </svg></a>
  	 				<a target='_blank' href="https://www.facebook.com/drhamzaashrafzia?mibextid=ZbWKwL">  <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    <title>messanger</title>
    <desc>Created with sketchtool.</desc>
    <g id="brand"  fill="none" >
        <g id="messanger" fill="#000000">
            <path d="M12.9419305,14.4132711 L10.3816186,11.7534625 L5.45094503,14.4802487 L10.8567589,8.74367787 L13.4170708,11.4034864 L18.3477192,8.67670029 L12.9419305,14.4132711 Z M11.8993321,2 C6.43210743,2 2,6.14444891 2,11.2568612 C2,14.1651845 3.43438829,16.7602069 5.67764614,18.457241 L5.67764614,22 L9.05594606,20.1261138 C9.95655399,20.3782306 10.911016,20.5137223 11.8993321,20.5137223 C17.366582,20.5137223 21.7986642,16.3692734 21.7986642,11.2568612 C21.7986642,6.14444891 17.366582,2 11.8993321,2 L11.8993321,2 Z" id="Shape">

</path>
        </g>
    </g>
</svg></a>
  	 				<a target='_blank' href="https://wa.me/923371112221"> <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    <title>whatsapp [#128]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1"  fill="none">
        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">

</path>
            </g>
        </g>
    </g>
</svg></a>
  	 			</div>
       
  	 		</div>
  	 	</div>
  	 </div>
    <div style={{
      lineHeight: '100%'
    }} className="footer_bottom px-4 py-2 md:py-8 text-center text-white ">
      <p className='text-sm'>Copyright © 2025 Node Agency. All rights reserved.</p>
    </div>
  </footer>

  )
}

export default Footer