"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight, Atom, CalendarDays, ChevronRight, Code2, Dna,
  FlaskConical, MapPin, Menu, Microscope, Trophy, Users, X,
  Sparkles, ExternalLink, BookOpen, Clock3, School, Medal
} from "lucide-react";

const olympiads = [
  { icon: Dna, tag:"BIO + CHEM", title:"Bio-Chemistry Olympiad", text:"Explore life sciences, chemistry and scientific reasoning.", grades:"Grades 6–12" },
  { icon: Atom, tag:"MATHEMATICS", title:"Math Olympiad", text:"Challenge logic, problem solving and mathematical creativity.", grades:"Grades 3–12" },
  { icon: FlaskConical, tag:"PHYSICS", title:"Physics Olympiad", text:"Test your understanding of the laws that shape our universe.", grades:"Grades 6–12" },
  { icon: Code2, tag:"PROGRAMMING", title:"Programming Olympiad", text:"Solve real problems through algorithms, logic and code.", grades:"Grades 6–12" },
  { icon: Microscope, tag:"SCIENCE + COMPUTING", title:"Science & Computing", text:"A multidisciplinary challenge for young scientific minds.", grades:"Grades 3–5" }
];

const notices = [
  ["REGISTRATION", "STEM FEST 2026 participant registration is closed", "22 NOV 2025"],
  ["SYLLABUS", "Olympiad syllabuses and study materials are available", "RESOURCE"],
  ["EVENT", "Competition Day and Awards & Gala programme", "23–24 JAN"]
];

function Countdown(){
  const target = new Date("2027-01-22T08:00:00+06:00").getTime();
  const [d,setD] = useState({days:"—",hours:"—",mins:"—"});
  useEffect(()=>{
    const tick=()=>{
      const n=Math.max(0,target-Date.now());
      setD({
        days:String(Math.floor(n/86400000)).padStart(2,"0"),
        hours:String(Math.floor(n/3600000)%24).padStart(2,"0"),
        mins:String(Math.floor(n/60000)%60).padStart(2,"0")
      });
    }; tick(); const id=setInterval(tick,60000); return()=>clearInterval(id);
  },[]);
  return <div className="countdown">
    <div><b>{d.days}</b><span>DAYS</span></div><i>:</i>
    <div><b>{d.hours}</b><span>HOURS</span></div><i>:</i>
    <div><b>{d.mins}</b><span>MINS</span></div>
  </div>
}

export default function Home(){
  const [open,setOpen]=useState(false);
  return <main>
    <div className="demoBar">CONCEPT DEMO <span>•</span> IHSB STEM FEST WEBSITE REDESIGN <span>•</span> NOT THE LIVE WEBSITE</div>
    <nav className="nav shell">
      <a className="brand" href="#top">
        <div className="mark">S<span>+</span></div>
        <div><strong>IHSB</strong><b>STEM FEST</b><small>INNOVATE • DISCOVER • INSPIRE</small></div>
      </a>
      <div className="links">
        <a href="#about">About</a><a href="#olympiads">Olympiads</a><a href="#schedule">Schedule</a>
        <a href="#resources">Resources</a><a href="#gallery">Gallery</a>
      </div>
      <div className="navActions"><button className="login">Login</button><a className="register" href="#register">Register <ArrowRight size={16}/></a></div>
      <button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    {open && <div className="mobileMenu"><a href="#about">About</a><a href="#olympiads">Olympiads</a><a href="#schedule">Schedule</a><a href="#resources">Resources</a><a href="#register">Register</a></div>}

    <section id="top" className="hero">
      <div className="orb o1"></div><div className="orb o2"></div><div className="grid"></div>
      <div className="shell heroGrid">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15}/> BANGLADESH'S NEXT GENERATION OF INNOVATORS</div>
          <h1>Where young minds<br/><em>shape tomorrow.</em></h1>
          <p>IHSB STEM FEST brings together students, thinkers and creators for two days of Olympiads, discovery and ambitious ideas.</p>
          <div className="heroBtns"><a className="primary" href="#olympiads">Explore the Fest <ArrowRight size={18}/></a><a className="ghost" href="#about">Our Story</a></div>
          <div className="meta">
            <span><CalendarDays/> 23–24 January</span><span><MapPin/> IHSB, Uttara, Dhaka</span>
          </div>
        </div>
        <div className="heroVisual">
          <div className="scienceCard">
            <div className="ring r1"></div><div className="ring r2"></div><div className="nucleus">STEM</div>
            <span className="particle p1">π</span><span className="particle p2">{"</>"}</span><span className="particle p3">DNA</span>
          </div>
          <div className="floatCard fc1"><Trophy/><div><small>COMPETE</small><b>5 Olympiads</b></div></div>
          <div className="floatCard fc2"><Users/><div><small>COMMUNITY</small><b>1,600+ students</b></div></div>
        </div>
      </div>
      <div className="shell countWrap"><span>NEXT STEM FEST</span><Countdown/><a href="#schedule">View schedule <ChevronRight size={16}/></a></div>
    </section>

    <section className="stats shell">
      <div><b>1,600+</b><span>PARTICIPANTS</span></div><div><b>50+</b><span>SCHOOLS</span></div>
      <div><b>5</b><span>OLYMPIADS</span></div><div><b>140+</b><span>PROJECTS</span></div>
    </section>

    <section id="about" className="about section shell">
      <div className="sectionLabel">01 / THE FESTIVAL</div>
      <div className="aboutGrid">
        <div><h2>More than a competition.<br/><em>A platform for possibility.</em></h2></div>
        <div><p>What began in 2019 as an intra-school project exhibition has grown into one of IHSB's flagship STEM celebrations — connecting curious students through science, technology, engineering and mathematics.</p><a className="textLink" href="https://www.ihsbstemfest.com/page/Our-Story" target="_blank">Discover our journey <ArrowRight size={17}/></a></div>
      </div>
      <div className="featureGrid">
        <article><div className="num">01</div><Atom/><h3>Compete</h3><p>Rigorous Olympiads designed to reward knowledge, reasoning and creative problem solving.</p></article>
        <article><div className="num">02</div><Microscope/><h3>Discover</h3><p>Explore STEM beyond textbooks through projects, challenges and inspiring experiences.</p></article>
        <article><div className="num">03</div><Trophy/><h3>Achieve</h3><p>Celebrate outstanding young talent with recognition, awards and a grand gala.</p></article>
      </div>
    </section>

    <section id="olympiads" className="dark section">
      <div className="shell">
        <div className="sectionHead"><div><div className="sectionLabel light">02 / OLYMPIADS</div><h2>Choose your <em>challenge.</em></h2></div><p>Five disciplines. One stage for Bangladesh's ambitious young learners.</p></div>
        <div className="olympiads">
          {olympiads.map((o,i)=>{const Icon=o.icon; return <article key={o.title}>
            <div className="oTop"><span>{String(i+1).padStart(2,"0")}</span><Icon/></div><small>{o.tag}</small><h3>{o.title}</h3><p>{o.text}</p>
            <div className="oBottom"><span>{o.grades}</span><button aria-label="open"><ArrowRight/></button></div>
          </article>})}
        </div>
      </div>
    </section>

    <section id="schedule" className="section shell schedule">
      <div className="sectionHead"><div><div className="sectionLabel">03 / EVENT EXPERIENCE</div><h2>Two days.<br/><em>One unforgettable fest.</em></h2></div></div>
      <div className="days">
        <article><div className="dayNo">DAY <b>01</b></div><div><small>FRIDAY</small><h3>Competition Day</h3><p className="date">23 January</p></div><ul><li>Opening Ceremony</li><li>Five Inter-School Olympiads</li><li>STEM activities & experiences</li></ul><Clock3/></article>
        <article><div className="dayNo">DAY <b>02</b></div><div><small>SATURDAY</small><h3>Celebration Day</h3><p className="date">24 January</p></div><ul><li>STEM Project Display</li><li>Awards & Gala Ceremony</li><li>Grand Feast for winners</li></ul><Medal/></article>
      </div>
      <p className="demoNote">Dates shown here mirror the current event structure for demonstration. Final 2027 dates/content can be updated after approval.</p>
    </section>

    <section id="resources" className="notice section">
      <div className="shell">
        <div className="sectionHead"><div><div className="sectionLabel">04 / STAY UPDATED</div><h2>Notice <em>board.</em></h2></div><a className="textLink" href="https://www.ihsbstemfest.com/" target="_blank">View all notices <ExternalLink size={16}/></a></div>
        <div className="noticeList">{notices.map((n,i)=><div className="noticeRow" key={n[1]}><span>{n[0]}</span><b>{n[1]}</b><small>{n[2]}</small><button><ArrowRight/></button></div>)}</div>
      </div>
    </section>

    <section id="gallery" className="gallery section shell">
      <div className="sectionLabel">05 / MOMENTS</div><div className="galleryHead"><h2>The energy of <em>STEM FEST.</em></h2><p>A living showcase of ideas, teamwork, experiments and young innovators.</p></div>
      <div className="photoGrid">
        <div className="photo ph1"><span>INNOVATE</span></div><div className="photo ph2"><span>CREATE</span></div><div className="photo ph3"><span>EXPLORE</span></div>
      </div>
      <p className="photoNote">Demo image placeholders — official IHSB STEM FEST photography can be added before launch.</p>
    </section>

    <section id="register" className="cta">
      <div className="shell ctaGrid"><div><small>READY FOR THE NEXT CHALLENGE?</small><h2>Your STEM journey<br/>starts <em>here.</em></h2></div><div><p>Compete. Discover. Build. Join students from across Bangladesh at the next IHSB STEM FEST.</p><button className="primary">Registration Preview <ArrowRight/></button><span>Demo only — no payment will be processed.</span></div></div>
    </section>

    <footer>
      <div className="shell foot">
        <div className="brand footBrand"><div className="mark">S<span>+</span></div><div><strong>IHSB</strong><b>STEM FEST</b><small>INNOVATE • DISCOVER • INSPIRE</small></div></div>
        <div><b>EXPLORE</b><a href="#about">About</a><a href="#olympiads">Olympiads</a><a href="#schedule">Schedule</a><a href="#gallery">Gallery</a></div>
        <div><b>RESOURCES</b><a href="https://www.ihsbstemfest.com/study-materials" target="_blank">Study Materials</a><a href="https://www.ihsbstemfest.com/olympiad-result" target="_blank">Results</a><a href="https://www.ihsbstemfest.com/page/Registration-Process" target="_blank">Registration Guide</a></div>
        <div><b>CONTACT</b><p>International Hope School Bangladesh<br/>Uttara, Dhaka-1230</p><a href="mailto:stem@ihsb.edu.bd">stem@ihsb.edu.bd</a></div>
      </div>
      <div className="shell copyright"><span>© IHSB STEM FEST — CONCEPT REDESIGN</span><span>Prepared for internal review</span></div>
    </footer>
  </main>
}