import './App.css'

import logo from './assets/bytespace-logo.svg'
import heroStudent from './assets/hero-student.png'

import heroShapeLeft1 from './assets/hero-shape-left-1.svg'
import heroShapeLeft2 from './assets/hero-shape-left-2.svg'
import heroShapeLeft3 from './assets/hero-shape-left-3.svg'
import heroShapeRight1 from './assets/hero-shape-right-1.svg'
import heroShapeRight2 from './assets/hero-shape-right-2.svg'
import heroShapeRight3 from './assets/hero-shape-right-3.svg'
import heroStudentAvatars from './assets/hero-student-avatars.png'

import course1 from './assets/course-1.png'
import course2 from './assets/course-2.png'
import course3 from './assets/course-3.png'
import course4 from './assets/course-4.png'
import course5 from './assets/course-5.png'
import course6 from './assets/course-6.png'

import iconDesign from './assets/icon-design.svg'
import iconDevelopment from './assets/icon-development.svg'
import iconItSoftware from './assets/icon-it-software.svg'
import iconBusiness from './assets/icon-business.svg'
import iconMarketing from './assets/icon-marketing.svg'
import iconPhotography from './assets/icon-photography.svg'

import growthStudent from './assets/growth-student.png'
import growthCreator from './assets/growth-creator.png'

import testimonialSarah from './assets/testimonial-sarah.png'
import testimonialJames from './assets/testimonial-james.png'
import testimonialAlex from './assets/testimonial-alex.png'

const courses = [
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
]

const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

const learningPaths = [
  { icon: iconDesign, name: 'Design' },
  { icon: iconDevelopment, name: 'Development' },
  { icon: iconItSoftware, name: 'IT & Software' },
  { icon: iconBusiness, name: 'Business' },
  { icon: iconMarketing, name: 'Marketing' },
  { icon: iconPhotography, name: 'Photography' },
]

const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

const testimonials = [
  {
    image: testimonialSarah,
    name: 'Sarah Mitchell',
    role: 'UI/UX Designer',
    text: 'ByteSpace has completely changed the way I learn. The courses are practical, easy to follow, and taught by creators who truly understand their field.',
  },
  {
    image: testimonialJames,
    name: 'James Wilson',
    role: 'Web Developer',
    text: 'The learning experience feels personal and flexible. I was able to build new skills at my own pace and apply them directly to my work.',
  },
  {
    image: testimonialAlex,
    name: 'Alex Morgan',
    role: 'Digital Creator',
    text: 'I love how ByteSpace connects learners with experienced creators. It is a great place to learn, grow, and discover new opportunities.',
  },
]

function App() {
  return (
    <main>
      {/* HERO */}

      <section className="hero">
        <div className="heroDecorations" aria-hidden="true">
          <img src={heroShapeLeft1} className="heroShape heroShapeLeft1" alt="" />
          <img src={heroShapeLeft2} className="heroShape heroShapeLeft2" alt="" />
          <img src={heroShapeLeft3} className="heroShape heroShapeLeft3" alt="" />

          <img src={heroShapeRight1} className="heroShape heroShapeRight1" alt="" />
          <img src={heroShapeRight2} className="heroShape heroShapeRight2" alt="" />
          <img src={heroShapeRight3} className="heroShape heroShapeRight3" alt="" />
        </div>

        <header className="navbar">
          <img src={logo} alt="ByteSpace" className="logo" />

          <nav className="navLinks">
            <a href="#">Home</a>
            <a href="#courses">Courses</a>
            <a href="#creators">Creators</a>
          </nav>

          <div className="navActions">
            <a href="#">Sign In</a>
            <a href="#">Join Us</a>
            <span className="bag">♧</span>
          </div>
        </header>

        <div className="heroContent">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="searchBar">
            <input
              type="text"
              placeholder="⌕  Course, topic, creator"
            />
            <button>Search</button>
          </div>
        </div>

        <div className="heroVisual">
          <div className="limeCircle" />

          <img
            src={heroStudent}
            alt="Student learning with ByteSpace"
            className="heroStudent"
          />

          <div className="courseBubble">
            <strong>UI/UX Design</strong>
            <span>200 Courses · 1000+ Students</span>
          </div>

          <div className="progressBubble">
            <span>Learning Progress</span>
            <strong>55%</strong>

            <div className="progressTrack">
              <div className="progressFill" />
            </div>
          </div>

          <div className="studentsBubble">
            <strong>Happy Students</strong>
            <span>4.5 (240) ⭐</span>

            <img
              src={heroStudentAvatars}
              alt="ByteSpace students"
              className="studentAvatars"
            />
          </div>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="brandStrip">
        <span>◉ Logoipsum</span>
        <span>✺ Logoipsum</span>
        <span>◈ Logoipsum</span>
        <span>✥ Logoipsum</span>
        <span>◉ Logoipsum</span>
      </section>

      {/* COURSES */}

      <section className="coursesSection" id="courses">
        <div className="sectionHeading">
          <h2>
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p>
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="categoryPills">
          {categories.map((category, index) => (
            <button
              key={category}
              className={index === 0 ? 'active' : ''}
            >
              {category}
            </button>
          ))}

          <button className="more">+ More</button>
        </div>

        <div className="courseGrid">
          {courses.map((course, index) => (
            <img
              key={course}
              src={course}
              alt={`ByteSpace course ${index + 1}`}
              className="courseCard"
            />
          ))}
        </div>
      </section>

      {/* LEARNING PATHS */}

      <section className="learningSection">
        <div className="learningHeading">
          <h2>Explore Diverse Learning Paths at Bytespace</h2>

          <p>
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="learningGrid">
          {learningPaths.map((path) => (
            <div className="learningCard" key={path.name}>
              <div className="learningIcon">
                <img src={path.icon} alt="" />
              </div>

              <span>{path.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH */}

      <section className="growthSection" id="creators">
        <div className="growthTopRow">
          <div className="growthIntro">
            <h2>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="growthStats">
              <div>
                <strong>12K</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>70+</strong>
                <span>Courses</span>
              </div>

              <div>
                <strong>16</strong>
                <span>Creators</span>
              </div>
            </div>
          </div>

          <div className="studentShowcase">
            <div className="growthImageArea">
              <img
                src={growthStudent}
                alt="ByteSpace student"
                className="growthStudent"
              />

              <div className="growthCourseCard">
                <div className="growthCourseThumb" />

                <div>
                  <small>UI/UX Design</small>
                  <strong>Introduction to UI Design</strong>
                  <span>12 Lessons</span>
                </div>
              </div>

              <div className="growthProgressCard">
                <div className="progressTop">
                  <span>Learning Progress</span>
                  <strong>55%</strong>
                </div>

                <div className="growthProgressTrack">
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="creatorShowcase">
          <div className="creatorVisual">
            <img
              src={growthCreator}
              alt="ByteSpace creator"
              className="growthCreator"
            />

            <div className="totalRevenueCard">
              <span>Total Revenue</span>
              <small>July 1-28</small>
              <strong>$120.29</strong>

              <div className="revenueLine">
                <div />
              </div>
            </div>

            <div className="yearRevenueCard">
              <span>Year to Date</span>
              <small>2023</small>
              <strong>$1,200.38</strong>
              <em>+12%</em>
            </div>

            <div className="creatorHappyCard">
              <span>Happy Students</span>
              <small>4.5 (240) ⭐</small>

              <img
                src={heroStudentAvatars}
                alt="Happy students"
              />
            </div>
          </div>

          <div className="creatorContent">
            <h2>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className="creatorDescription">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <div className="benefitList">
              {creatorBenefits.map((benefit) => (
                <div className="benefit" key={benefit}>
                  <div className="benefitCheck">✓</div>
                  <strong>{benefit}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR CTA */}

      <section className="creatorCta">
        <div className="ctaDecorations" aria-hidden="true">
          <img
            src={heroShapeLeft1}
            className="ctaShape ctaShape1"
            alt=""
          />

          <img
            src={heroShapeLeft2}
            className="ctaShape ctaShape2"
            alt=""
          />

          <img
            src={heroShapeLeft3}
            className="ctaShape ctaShape3"
            alt=""
          />

          <img
            src={heroShapeRight1}
            className="ctaShape ctaShape4"
            alt=""
          />

          <img
            src={heroShapeRight2}
            className="ctaShape ctaShape5"
            alt=""
          />

          <img
            src={heroShapeRight3}
            className="ctaShape ctaShape6"
            alt=""
          />
        </div>

        <div className="creatorCtaContent">
          <h2>
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p>
            Share your expertise, inspire learners, and turn your knowledge into
            meaningful courses with a platform built for creators.
          </p>

          <a href="#creators" className="creatorCtaButton">
            Join as Creator
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="testimonialSection">
        <div className="testimonialGlow testimonialGlowLeft" />
        <div className="testimonialGlow testimonialGlowRight" />

        <div className="testimonialHeading">
          <h2>
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p>
            Hear directly from learners and creators who are building skills,
            sharing knowledge, and growing with ByteSpace.
          </p>
        </div>

        <div className="testimonialGrid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonialCard"
              key={testimonial.name}
            >
              <div className="quoteMark">“</div>

              <p className="testimonialText">
                {testimonial.text}
              </p>

              <div className="testimonialStars">
                ★★★★★
              </div>

              <div className="testimonialPerson">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <img
              src={logo}
              alt="ByteSpace"
              className="footerLogo"
            />

            <p>
              Learn from inspiring creators, develop valuable skills, and take
              the next step in your professional journey.
            </p>

            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>Subscribe</button>
            </div>
          </div>

          <div className="footerLinks">
            <div>
              <strong>ByteSpace</strong>
              <a href="#">About Us</a>
              <a href="#courses">Courses</a>
              <a href="#creators">Creators</a>
              <a href="#">Contact</a>
            </div>

            <div>
              <strong>Explore</strong>
              <a href="#">Design</a>
              <a href="#">Development</a>
              <a href="#">Business</a>
              <a href="#">Marketing</a>
            </div>

            <div>
              <strong>Support</strong>
              <a href="#">Help Center</a>
              <a href="#">FAQs</a>
              <a href="#">Community</a>
              <a href="#">Contact Us</a>
            </div>

            <div>
              <strong>Follow Us</strong>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 ByteSpace. All rights reserved.</span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App