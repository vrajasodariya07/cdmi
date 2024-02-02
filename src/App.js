import './App.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaWhatsapp, FaChevronDown, FaLongArrowAltRight, FaLinkedinIn, FaHandPointRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { IoIosStar, IoIosStarHalf, IoIosArrowRoundForward } from "react-icons/io";
import myimg from './images/1.svg';
import mylogo from './images/28.svg';
import { FaBuildingColumns } from "react-icons/fa6";



function App() {
    return (
        <div className="mainbody">
            <div className="header">
                <div className="container">
                    <div className="top-header">
                        <div className="left">
                            <a><font className="mail"><MdMailOutline></MdMailOutline></font> Info@cdmi.in</a>
                            <a><font className="mail"><MdVerified ></MdVerified></font>Verify certificate</a>
                        </div>
                        <div className="center">
                            <a>HAVE ANY QUESTION? +91 90333 16003</a>
                        </div>
                        <div className="right">
                            <a><FaFacebookF></FaFacebookF></a>
                            <a><FaTwitter></FaTwitter></a>
                            <a><FaGooglePlusG></FaGooglePlusG></a>
                            <a><FaInstagram></FaInstagram></a>
                            <a><CiYoutube></CiYoutube></a>
                            <a><FaWhatsapp></FaWhatsapp></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="manu">
                <div className='container'>
                    <div className="box-manu">
                        <div className="left">
                            <img src={myimg} className='imag'></img>
                        </div>
                        <div className='right'>
                            <div className='options'>
                                <ul className='main-manu'>
                                    <li>HOME</li>
                                    <li>COURSES <FaChevronDown></FaChevronDown></li>
                                    <li>ACTIVITIES <FaChevronDown></FaChevronDown></li>
                                    <li>BLOG</li>
                                    <li>KNOW US <FaChevronDown></FaChevronDown></li>
                                    <li>GET IN TOUCH</li>
                                    <li>STUDENT ZONE <FaChevronDown></FaChevronDown></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-box">
                <div className='img-box'>
                    <div className='img'>
                        <img src={require(`./images/2.jpeg`)}></img>
                    </div>
                </div>
            </div>
            <div className='section1 section'>
                <div className='container'>
                    <div className='section-box'>
                        <div className='heading'>
                            <h4>CREATIVE COURSE</h4>
                            <h1 className='sh-1'>OFFERED COURSES</h1>
                        </div>
                        <div className='main-box'>
                            <div className='g-box'>
                                <div className='d-1 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/3.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Development Courses</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-2 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/4.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Design Courses</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-3 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/5.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Programming IT</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='g-box'>
                                <div className='d-4 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/6.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Trendy Courses</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-5 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/7.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Civil-Mech.Engineering</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-6 d'>
                                    <div className='dimg-box'>
                                        <img src={require(`./images/8.webp`)}></img>
                                    </div>
                                    <div className='info-box'>
                                        <h2>Business Development</h2>
                                    </div>
                                    <div className='down-info'>
                                        <div className='d-icon'>
                                            <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Know more..!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-end'>
                                <div className='d-end-btn'>
                                    <button>View All Courses  <FaLongArrowAltRight></FaLongArrowAltRight></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2 section'>
                <div className='s2-info-box'>
                    <div className='sleft-info'>
                        <div className='s-head'>
                            <h4>ABOUT US</h4>
                            <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
                        </div>
                        <div className='s-info'>
                            <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        </div>
                        <div className='s-butn'>
                            <button>Enroll Now..! <FaLongArrowAltRight></FaLongArrowAltRight></button>
                        </div>
                    </div>
                    <div className='sright-info'>
                        <div className='simg-box'>
                            <img src={require(`./images/10.webp`)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section3 section'>
                <div className='status-box'>
                    <div className='s-img'>
                        <img src={require(`./images/9.jpg`)}></img>
                        <div className='p-box'>
                            <div className='inf-box'>
                                <div className='in1'>
                                    <div className='i1'>
                                        <img src={require(`./images/11.png`)}></img>
                                    </div>
                                    <div className='i-info'>
                                        <h3>18000+</h3>
                                        <p>HAPPY STUDENT</p>
                                    </div>
                                </div>
                                <div className='in1'>
                                    <div className='i1 i2'>
                                        <img src={require(`./images/11.png`)}></img>
                                    </div>
                                    <div className='i-info'>
                                        <h3>10+</h3>
                                        <p>CERTIFICATION APPROVAL</p>
                                    </div>
                                </div>
                                <div className='in1'>
                                    <div className='i1'>
                                        <img src={require(`./images/11.png`)}></img>
                                    </div>
                                    <div className='i-info'>
                                        <h3>100+</h3>
                                        <p>CERTIFIED TEACHERS</p>
                                    </div>
                                </div>
                                <div className='in1'>
                                    <div className='i1'>
                                        <img src={require(`./images/11.png`)}></img>
                                    </div>
                                    <div className='i-info'>
                                        <h3>12000+</h3>
                                        <p>STUDENTS PLACED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section4 section'>
                <div className='container'>
                    <div className='h-std'>
                        <div className='h-info'>
                            <div className='h-head'>
                                <h4>HAPPY STUDENTS</h4>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className='ih-img'>
                                <img src={require(`./images/21.png`)}></img>
                            </div>
                            <div className='h-data'>
                                <p>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.</p>
                            </div>
                            <div className='h-profile'>
                                <div className='pro-img'>
                                    <img src={require(`./images/12.jpg`)}></img>
                                </div>
                                <div className='pro-info'>
                                    <h3>KOLADIYA MANSI</h3>
                                    <span className='color'>UI/UX Designer </span><span> @ Patoliya infotech</span>
                                </div>
                            </div>
                        </div>
                        <div className='h-img'>
                            <div className='himg-box'>
                                <img src={require(`./images/13.webp`)}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section5 section'>
                <div className='container'>
                    <div className='why'>
                        <div className='w-info'>
                            <div className='w-head'>
                                <h4>READ OUR DIFFERENCE</h4>
                                <h2>WHY CHOOSE CREATIVE</h2>
                            </div>
                        </div>
                        <div className='block-box'>
                            <div className='main-block'>
                                <div className='b1'>
                                    <div className='b-img b1-img'>
                                        <img src={require(`./images/22.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Industry Experts As Trainers</h5>
                                        <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                                    </div>
                                </div>
                                <div className='b1'>
                                    <div className='b-img b2-img'>
                                        <img src={require(`./images/23.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Latest Curriculum</h5>
                                        <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                                    </div>
                                </div>
                                <div className='b1'>
                                    <div className='b-img b3-img'>
                                        <img src={require(`./images/24.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Latest Technology</h5>
                                        <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='main-block'>
                                <div className='b1'>
                                    <div className='b-img b4-img'>
                                        <img src={require(`./images/27.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Interview Assistance</h5>
                                        <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                                    </div>
                                </div>
                                <div className='b1'>
                                    <div className='b-img b5-img'>
                                        <img src={require(`./images/25.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Free Upgradation</h5>
                                        <p>We will be provided free upgradation for any newer version of the course you have.</p>
                                    </div>
                                </div>
                                <div className='b1'>
                                    <div className='b-img b6-img'>
                                        <img src={require(`./images/26.png`)}></img>
                                    </div>
                                    <div className='b-info'>
                                        <h5>Lifetime Support</h5>
                                        <p>We will provide you lifetime support on all the courses you learned from us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section6'>
                <div className='container'>
                    <div className='place-box'>
                        <div className='p-head'>
                            <h4>STUDENT PLACEMENT</h4>
                            <h2>OUR RECRUITMENT PARTNERS</h2>
                        </div>
                        <div className='p-img'>
                            <div className='pimg-line'>
                                <img src={require(`./images/15.png`)}></img>
                                <img src={require(`./images/16.png`)}></img>
                                <img src={require(`./images/17.png`)}></img>
                                <img src={require(`./images/18.png`)}></img>
                                <img src={require(`./images/19.png`)}></img>
                                <img src={require(`./images/20.png`)}></img>
                            </div>
                        </div>
                        <div className='p-course'>
                            <div className='pc-head'>
                                <h2>Our Demanded Course -</h2>
                                <div className='pc-info'>
                                    <span>Php institute in Katargam</span>
                                    <span>Wordpress training course</span>
                                    <span>Blender 3D Design Course</span>
                                    <span>Laravel Training institute In Katargam </span>
                                    <span>solidworks Training In mota varachha</span>
                                    <span>Best Wordpress Training Institute</span>
                                    <span>Andriod Training In surat</span>
                                    <span>Laravel Training institute in Mota Varachha</span>
                                    <span>Google Sketchup Civil Training Course</span>
                                    <span>Maya Animation Courser</span>
                                    <span>Ios App Training Institute In surat</span>
                                    <span>Wordpress Training Institute in Mota Varachha</span>
                                    <span>Advance Wordpress Training Institute In Surat</span>
                                    <span>Web Development Training In varachha</span>
                                    <span>Codeigniter Training Course</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='f-section'>
                <div className='container'>
                    <div className='footer'>
                        <div className='f-main'>
                            <div className='f-box'>
                                <div className='f1'>
                                    <div className='f-logo'>
                                        <img src={mylogo}></img>
                                    </div>
                                    <div className='txt'>
                                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                    </div>
                                    <div className='f-txt'>
                                        <p>FOLLOW US ON</p>
                                    </div>
                                    <div className='f-icon'>
                                        <a><FaFacebookF></FaFacebookF></a>
                                        <a><FaTwitter></FaTwitter></a>
                                        <a><FaGooglePlusG></FaGooglePlusG></a>
                                        <a><FaLinkedinIn></FaLinkedinIn></a>
                                        <a><FaInstagram></FaInstagram></a>
                                        <a><CiYoutube></CiYoutube></a>
                                        <a><FaWhatsapp></FaWhatsapp></a>
                                    </div>
                                </div>
                                <div className='f2'>
                                    <div className='fe-info'>
                                        <h5>FEATURE LINKS</h5>
                                        <div className='fe-list'>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>About us</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Blogs</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Join Us</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Company Login</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Certificate Verification</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='f3'>
                                    <div className='fc-txt'>
                                        <h4>CONTACT US</h4>
                                        <div className='fc-info'>
                                            <h4>HEAD OFFICE - YOGICHOWK</h4>
                                            <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                                            <p>Mo:<span>+91 90333 16003</span></p>
                                        </div>
                                        <div className='ot-info'>
                                            <h3>OTHER BRANCHES</h3>
                                            <div className='ot-list'>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Katargam</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Mota Varachha</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Adajan</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Navsari</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='endsection'>
                <div className='container'>
                    <div className='end-txt'>
                        <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;