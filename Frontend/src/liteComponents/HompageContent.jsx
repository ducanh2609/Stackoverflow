import React, { useEffect, useState } from 'react';
import '../css/homepage.css';

// import function nho
import BuyForyou from './../subComponentsHp/BuyForyou';
import Typetech from './../subComponentsHp/Typetech';
import Text from './../subComponentsHp/Text';
import Rate from './../subComponentsHp/Rate';
import Apout from './../subComponentsHp/About';

// react-icon
import { BiSearchAlt } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";
import { BsPeopleFill } from 'react-icons/bs';
import { RxRocket } from "react-icons/rx";
import { TbManualGearbox } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { GiConversation } from "react-icons/gi";

// render
const listWord = ["developer", "mobile developer", "game developer", "data scientist", "system admin"];
export default function HomePageContent() {
    // change word logic
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const ticktak = () => setIndex(i => i + 1);
        const intervalID = setInterval(ticktak, 2000);
        return () => clearInterval(intervalID);
    }, []);
    // scroll top logic
    const [backTop, setBackTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setBackTop(true)
            } else {
                setBackTop(false)
            }
        })
        console.log(test);
    }, []);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    // array
    let tytech = [
        {
            element: <RxRocket size="5rem" className='hp-flex-item4-img' />,
            h3: 'DevOps engineers',
            p: 'Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.',
        },
        {
            element: <TbManualGearbox size="5rem" className='hp-flex-item4-img' />,
            h3: 'Data scientists',
            p: 'Business decisions are better when backed by data. Give visibility to the data that support your strategies.',
        }, {
            element: <BsGearFill size="5rem" className='hp-flex-item4-img' />,
            h3: 'Software engineers',
            p: 'Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.',
        }, {
            element: <BiSupport size="5rem" className='hp-flex-item4-img' />,
            h3: 'Support teams',
            p: 'Level up your support by providing information to your customers using a natural interface: questions and answers.',
        }, {
            element: <GiConversation size="5rem" className='hp-flex-item4-img' />,
            h3: 'Engineering leader',
            p: 'Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.',
        },
    ]
    let textRd = [
        {
            p1: 'A Forrester Consulting study shows',
            p2: '191% return on investment',
            p3: ' with Stack Overflow for Teams.',
        },
        {
            p1: 'The world’s largest telecom firm',
            p2: 'saved $10M',
            p3: 'in deflected support cases with our centralized knowledge base.',
        },
        {
            p1: 'Subject-matter experts at software platform Unqork had',
            p2: '27% more time',
            p3: ' to work on projects after using Teams.',
        }
    ]
    let Buy4you = [
        {
            style: {
                backgroundColor: '#f2740d',
            },
            service: 'Free',
            price: 'Free',
            intro: 'No credit card required',
            button: 'Create a free Team',
            quantity: 'Always free up to 50 teammates',
            p: [
                {
                    icon: <img src="/image/img-discount/megaphone.png" alt="" />,
                    title: 'ChatOps integrations - Slack & Microsoft Teams',
                },
                {
                    icon: <img src="/image/img-discount/lock.png" alt="" />,
                    title: 'Your own private space hosted on stackoverflowteams.com',
                },
                {
                    icon: <img src="/image/img-discount/download-button.png" alt="" />,
                    title: 'Structured and searchable knowledge base',
                },
            ],
        },
        {
            style: {
                backgroundColor: '#e3e6e8',
            },
            style1: {
                color: '#1e3c52',
            },
            service: 'Basic',
            price: '$6 USD',
            intro: 'per teammate / month',
            button: 'Get started',
            quantity: 'Up to 250 teammates',
            p: [
                {
                    icon: <img src="/image/img-discount/key.png" alt="" />,
                    title: 'Single sign-on (SSO) with SAML + Okta integration',
                },
                {
                    icon: <img src="/image/img-discount/megaphone.png" alt="" />,
                    title: 'ChatOps integrations - Slack & Microsoft Teams',
                },
                {
                    icon: <img src="/image/img-discount/lock.png" alt="" />,
                    title: 'Your own private space hosted on stackoverflowteams.com',
                },
                {
                    icon: <img src="/image/img-discount/download-button.png" alt="" />,
                    title: 'Structured and searchable knowledge base',
                },
            ],
        },
        {
            style: {
                backgroundColor: '#3b4045',
            },
            service: 'Business',
            price: '$12 USD',
            intro: 'per teammate / month',
            button: 'Get started',
            quantity: 'Unlimited teammates',
            p: [
                {
                    icon: <img src="/image/img-discount/plus.png" alt="" />,
                    title: 'All the features of Basic plus…',
                },
                {
                    icon: <img src="/image/img-discount/google-docs.png" alt="" />,
                    title: 'Long-form knowledge with Articles',
                },
                {
                    icon: <img src="/image/img-discount/link.png" alt="" />,
                    title: 'Additional integrations — ChatOps, Jira, GitHub & Okta',
                },
                {
                    icon: <img src="/image/img-discount/collection.png" alt="" />,
                    title: 'Group content together into Collections',
                },
                {
                    icon: <img src="/image/img-discount/collection.png" alt="" />,
                    title: 'Usage and adoption metrics',
                },
                {
                    icon: <img src="/image/img-discount/health-insurance.png" alt="" />,
                    title: 'Priority customer support',
                },
                {
                    icon: <img src="/image/img-discount/wrench.png" alt="" />,
                    title: 'Content Health tools',
                },
            ],
        },
        {
            style: {
                backgroundColor: '#2b2d6e',
            },
            service: 'Enterprise',
            price: 'Custom pricing',
            intro: 'Let’s talk about what you need',
            button: 'Request a demo',
            quantity: 'Unlimited teammates',
            p: [
                {
                    icon: <img src="/image/img-discount/plus.png" alt="" />,
                    title: 'Premium features of Business plus…',
                },
                {
                    icon: <img src="/image/img-discount/users.png" alt="" />,
                    title: 'Unlimited Teams within your instance',
                },
                {
                    icon: <img src="/image/img-discount/peak.png" alt="" />,
                    title: 'Flexible hosting options — cloud or on-premises',
                },
                {
                    icon: <img src="/image/img-discount/coding.png" alt="" />,
                    title: 'Robust read and write API',
                },
                {
                    icon: <img src="/image/img-discount/users.png" alt="" />,
                    title: 'Your own customer success and community building representative',
                },
                {
                    icon: <img src="/image/img-discount/health-insurance.png" alt="" />,
                    title: '99.5% uptime SLA and priority support',
                },
            ]
        },
    ]
    let rateRd = [
        {
            image: <img src='/image/img-homepage/quotes.svg' alt="" />,
            rate: 'Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals.',
            position: 'Director of Product Management',
            user: 'Microsoft',
        },
        {
            image: <img src='/image/img-homepage/quotes.svg' alt="" />,
            rate: 'Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.',
            position: 'Director of Engineering',
            user: 'Elastic Cloud',
        },
        {
            image: <img src='/image/img-homepage/quotes.svg' alt="" />,
            rate: 'As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.',
            position: 'Engineering',
            user: 'Expensify',
        },
        {
            image: <img src='/image/img-homepage/quotes.svg' alt="" />,
            rate: 'What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases.',
            position: 'Software Engineer',
            user: 'Box',
        },
    ]
    let aboutRd = [
        {
            image: <img className='logoSO' src="/image/img-homepage/so-logo2.svg" alt="" />,
            about: 'Reach the world’s largest audience of developers and technologists',
        },
        {
            image: <img className='logoSO' src="/image/img-homepage/so-logo3.svg" alt="" />,
            about: 'Connecting communities with the specific technologies they use the most',
        },
        {
            image: <img className='logoSO' src="/image/img-homepage/so-logo4.svg" alt="" />,
            about: 'Build your employer brand',
        }
    ]
    return (
        <>
            <div style={{ boxSizing: 'border-box' }}>
                <div className='p40'>
                    <div className='headerHome' >
                        <img className='img-code1' src='/image/img-homepage/illo-code.svg' alt="" />
                        <img className='img-code2' src='/image/img-homepage/illo-code.svg' alt="" />
                        <div className='flexbox'>
                            <div className='flex-item1'>
                                <div className='property-item bg-orange-100 ps-relative'>
                                    <BiSearchAlt size='48px' className='img-search' />
                                    <h6>Find the best answer to your technical question, help others answer theirs</h6>
                                    <a className='linkProperty bg-orange-500' href="/">Join the community</a>
                                    <p> or <a href="/">search content</a></p>
                                </div>
                            </div>
                            <div className='flex-item2'>
                                <div className='property-item bg-blue-100 ps-relative'>
                                    <AiFillLock size='48px' className='img-lock' />
                                    <h6>Want a secure, private space for your technical knowledge?</h6>
                                    <a className='linkProperty bg-blue-500' href="/">Discovery Teams</a>
                                </div>
                            </div>
                        </div>
                        <h1>Every <span className='word'>{listWord[index % listWord.length]}</span> has a <br /> tab open to Stack Overflow</h1>
                        <div className='stick'></div>
                        <div className='introduction-1'>
                            <div className='flex-item'>
                                <div className='tt-title'>100+ million</div>
                                <div className='tt-body'>monthly visitors to Stack Overflow & Stack Exchange</div>
                            </div>
                            <div className='flex-item'>
                                <div className='tt-title'>45.1+ billion</div>
                                <div className='tt-body'>Times a developer got help since 2008</div>
                            </div>
                            <div className='flex-item'>
                                <div className='tt-title'>191% ROI</div>
                                <div className='tt-body'>from companies using Stack Overflow for Teams</div>
                            </div>
                            <div className='flex-item'>
                                <div className='tt-title'>5,000+</div>
                                <div className='tt-body'>Stack Overflow for Teams instances active every day</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='circle'></div>
                <div className='body-1'>
                    <div className='flexbox-2'>
                        <div className='flex-item1-2'>
                            <div>
                                <div style={{ paddingBottom: '20px' }}>
                                    <a href="/">
                                        <img className='logoSO' src='/image/img-homepage/logo-stackoverflow.png' alt="" />
                                    </a>
                                    <img className='imgSO' src='/image/img-homepage/illo-public.svg' alt="" />
                                    <h2 className='text-h2'>A public platform building the definitive collection of coding questions & answers</h2>
                                    <p className='text-p'>A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</p>
                                    <div>
                                        <a className='like-button-1' href="/">Join the community</a>
                                    </div>
                                    <div>or <a href="/" style={{ color: 'hsl(210,8%,55%)' }}>search content</a></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-item2-2'>
                            <div>
                                <div style={{ paddingBottom: '20px' }}>
                                    <a href="/">
                                        <img className='logoSO' src='/image/img-homepage/teams-logo-compact.png' alt="" />
                                    </a>
                                    <img className='imgSO' src='/image/img-homepage/illo-teams.svg' alt="" />
                                    <h2 className='text-h2'>A private collaboration & knowledge sharing SaaS platform for companies</h2>
                                    <p className='text-p'>A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span className='stick-getStarted'></span>
                                        <span>Get Started</span>
                                        <span className='stick-getStarted'></span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                                        <div>
                                            <a className='like-button-2' href="/">For large organizations
                                                <span><FaIndustry style={{ marginLeft: '4px' }} /></span>
                                            </a>
                                        </div>
                                        <div>
                                            <a className='like-button-2' href="/">For small teams
                                                <span><BsPeopleFill style={{ marginLeft: '3px' }} /></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='body-3'>
                    <div>
                        <div>Thousands of organizations around the globe use Stack Overflow for Teams</div>
                    </div>
                </div>

                <div className='body-4 p40'>
                    <div className='body4-1'>
                        <div className='flex-item4-1'>
                            <img className='imgQuestion' src='/image/img-homepage/illo-question.png' alt="" />
                        </div>
                        <div className='flex-item4-2'>
                            <img className='imgForyou' src='/image/img-homepage/illo-for-you.png' alt="" />
                        </div>
                        <div className='flex-item4-1'>
                            <img className='imgHomesearch' src='/image/img-homepage/illo-home-search.png' alt="" />
                        </div>
                    </div>
                    <div className='body4-2'>
                        <div style={{ paddingTop: '11rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <img className='imgTeams' src='/image/img-homepage/teams-logo.svg' alt="" />
                                </div>
                                <div className='text-h2p'>
                                    <h3>Capture your company's knowledge and context in a discoverable format to <span>unblock your team</span></h3>
                                </div>
                                <div>
                                    <a className='like-button-2' href="/">Take a tour of Teams</a>
                                </div>
                                <div className='flexbox-3 p40'>
                                    <div className='flex-item3'>
                                        <img className="imgAccept" src='/image/img-homepage/accept.png' alt="" />
                                        <h3 className='tt-title'>Increase productivity</h3>
                                        <p>If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
                                    </div>
                                    <div className='flex-item3'>
                                        <img className="imgAccept" src='/image/img-homepage/accept.png' alt="" />
                                        <h3 className='tt-title'>Accelerate time to market</h3>
                                        <p>Shorten the time between initial idea and complete product. Take delays and misinformation out of the equation.</p>
                                    </div>
                                    <div className='flex-item3'>
                                        <img className="imgAccept" src='/image/img-homepage/accept.png' alt="" />
                                        <h3 className='tt-title'>Protect institutional knowledge</h3>
                                        <p>People come and people go, but if you capture their contributions in one central place, that expertise sticks around.</p>
                                    </div>
                                </div>
                                <div className='sticky'></div>
                                <div style={{ paddingTop: '20px', color: 'white' }}>
                                    <h2>Ensure your company stays on course</h2>
                                </div>
                                <div style={{ paddingBottom: '30px', color: 'white' }}>
                                    <h6>Here are just a few types of technologists that we help.</h6>
                                </div>
                                <div className='hp-flexbox-4'>
                                    {tytech.map((item, index) => (
                                        <Typetech key={index} element={item.element} h3={item.h3} p={item.p}></Typetech>
                                    ))}
                                </div>
                            </div>

                            <div className='hp-discount'>
                                <div className='hp-flexbox-5'>
                                    {Buy4you.map((item, index) => (
                                        <BuyForyou key={index} style={item.style} style1={item.style1} service={item.service} price={item.price} intro={item.intro} button={item.button} quantity={item.quantity} p={item.p} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='hp-text1 pd-120'>
                            <div className='hp-flexbox-6'>
                                {textRd.map((item, index) => (
                                    <Text key={index} p1={item.p1} p2={item.p2} p3={item.p3} />
                                ))
                                }
                                <div className='hp-flex-item6'>
                                    <div className='bg-wh' style={{ fontSize: '18px' }}>You can save time and money with Stack Overflow for Teams.</div>
                                    <div className='hp-flex-item-click'><a href='/'>Calculator your ROI</a></div>
                                </div>
                            </div>
                        </div>
                        <div className='hp-text2 pd-120'>
                            <div className='hp-flexbox-7'>
                                <div className='hp-flex-item7-1'>
                                    <img className='hp-flex-item7-img' src='/image/img-homepage/illo-integrations-left.png' alt="" />
                                    <div style={{ textAlign: 'center' }}>
                                        <img className='hp-flex-item7-img-sm' src='/image/img-homepage/microsoft-teams.png' alt="" />
                                        <span style={{ color: 'white' }}> &nbsp; Microsoft Teams</span>
                                    </div>
                                </div>
                                <div className='hp-flex-item7-2'>
                                    <h2>Integrates with and improves other tools</h2>
                                    <div>All plans come with integrations for ChatOps tools <a href='/'>Slack</a> & <a href='/'>Microsoft Teams</a> in order to cut down on pings, limit distractions and make the tools even more powerful. Business and Enterprise customers get access to Jira, GitHub & Okta integrations.</div>
                                    <div className='hp-flex-item7-img-allMd'>
                                        <a href='/'><img className='hp-flex-item7-img-md' src='/image/img-homepage/slack-icon.png' alt="" /></a>
                                        <a href='/'><img className='hp-flex-item7-img-md' src='/image/img-homepage/microsoft-teams.png' alt="" /></a>
                                        <a href='/'><img className='hp-flex-item7-img-md' src='/image/img-homepage/github-logo.png' alt="" /></a>
                                        <a href='/'><img className='hp-flex-item7-img-md' src='/image/img-homepage/jira-logo.png' alt="" /></a>
                                        <a href='/'><img className='hp-flex-item7-img-md' src='/image/img-homepage/okta-logo.png' alt="" /></a>
                                    </div>
                                </div>
                                <div className='hp-flex-item7-1'>
                                    <div style={{ textAlign: 'center' }}>
                                        <img className='hp-flex-item7-img-sm' src='/image/img-homepage/slack-icon.png' alt="" />
                                        <span style={{ color: 'white' }}> &nbsp; Slack</span>
                                    </div>
                                    <img className='hp-flex-item7-img' src='/image/img-homepage/illo-integrations-right.png' alt="" />
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '30px', paddingBottom: '130px', color: 'hsl(210,8%,75%)', textAlign: 'center', fontSize: '18px' }}>Some of the premium features available with paid tiers</div>
                    </div>
                </div>

                <div>
                    render dung logic
                </div>

                <div className='hp-flexbox-8 pd-120'>
                    {rateRd.map((item, index) => (
                        <Rate key={index} image={item.image} rate={item.rate} position={item.position} user={item.user} />
                    ))}
                </div>

                <div className='pd-120 hp-container-7'>
                    <div className='hp-container7-img'>
                        <img className="logoSO" src='/image/img-homepage/logo-stackoverflow.png' alt="" />
                    </div>
                    <h4 className='hp-container7-h4'>Additional products that reach and engage developers & technologists…</h4>
                    <div className='hp-flexbox-9'>
                        {aboutRd.map((item, index) => (
                            <Apout key={index} image={item.image} about={item.about} />
                        ))}
                    </div>
                    <div className='linkProperty bg-orange-500 hp-container7-a1'>
                        <a href="/">About the company</a>
                    </div>
                    <div className='hp-container7-a2'>
                        <a href="/">Want to work here? <span>Current job openings</span></a>
                    </div>
                </div>

                <div className='p40'>
                    <div className='hp-container-8-bg'>
                        <div className='hp-flexbox-10'>
                            <div className='hp-flex-item10-1'></div>
                            <div className='hp-flex-item10-2'>
                                <div className='hp-flex-item10-img'>
                                    <img src="/image/img-homepage/so-logo5.svg" alt="" />
                                </div>
                                <h4 className='hp-flex-item10-h4'>Explore technical topics and other disciplines across 170+ Q&A communities</h4>
                                <p className='hp-flex-item10-p'>
                                    From
                                    <a href="/"> Server Fault </a>
                                    to
                                    <a href="/"> Super User </a>
                                    , much of the Stack Exchange network continues our mission to empower the world to develop technology through collective knowledge. Other sites on the Stack Exchange network further encourage knowledge sharing across topics such as cooking and medicine.
                                </p>
                                <div className='linkProperty hp-container8-a'>
                                    <a href="/">Explore the network</a>
                                </div>
                            </div>
                            <div className='hp-flex-item10-1'></div>
                        </div>
                    </div>
                </div>

                <div className='hp-flexbox-11'>
                    <div className='hp-flex-item11-img'>
                        <img src="/image/img-homepage/lock.png" alt="" />
                    </div>
                    <p className='hp-flex-item11-p1'>Build a <strong> private community </strong> to share technical or non-technical knowledge.</p>
                    <p className='hp-flex-item11-p2'> <a href="/"> Create a free Team</a></p>
                </div>

                <div>
                    {backTop && (<button className="hp-btn-scroll" onClick={scrollTop}> <i class="fa-solid fa-chevron-up"></i></button>)}
                </div>

            </div>
        </>
    )
}