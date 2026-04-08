import './Careers.css';

const jobs = [
  { title: 'Android Developer',           skills: 'Java, Kotlin',                                          icon: '📱' },
  { title: 'CAD/CAM Designer',            skills: 'Solidworks',                                            icon: '🖥️' },
  { title: 'DFT Engineer',                skills: 'DFT Methodologies, ATPG, JTAG',                        icon: '🔬' },
  { title: 'FARM-stack Developer',        skills: 'FastAPI, ReactJs, MongoDB',                             icon: '⚡' },
  { title: 'FPGA Engineer',               skills: 'VHDL, Modelsim, Xilinx Vivado',                        icon: '🔧' },
  { title: 'Hardware Design & Testing',   skills: 'C, Embedded C, RTOS, Kicad',                           icon: '🛠️' },
  { title: 'iOS Developer',               skills: 'Swift',                                                 icon: '🍎' },
  { title: 'Machine Learning Engineer',   skills: 'Python, Keras, OpenCV, Scikit, TensorFlow',            icon: '🤖' },
  { title: 'MEAN-stack Developer',        skills: 'AngularJs, NodeJs, MongoDB, ExpressJs',                icon: '🌐' },
  { title: 'MERN-stack Developer',        skills: 'ReactJs, NodeJs, MongoDB, ExpressJs',                  icon: '⚛️' },
  { title: 'Physical Design Engineer',    skills: 'RTL-to-GDSII Flow, Place & Route, Timing Closure',     icon: '🏗️' },
  { title: 'Robotics Engineer',           skills: 'C++, Python, ROS',                                     icon: '🦾' },
  { title: 'Software Tester',             skills: 'Automation and Manual Testing',                         icon: '✅' },
  { title: 'UX/UI Designer',             skills: 'Framer, Figma, Adobe XD, Sketch',                       icon: '🎨' },
  { title: 'Verification Engineer',       skills: 'SystemVerilog, UVM, Functional Coverage',               icon: '🔍' },
  { title: 'VLSI Design Engineer',        skills: 'RTL Design, Verilog, Synthesis',                        icon: '💡' },
];

export default function Careers() {
  return (
    <section id="careers" className="careers">
      <div className="container">
        {/* Header */}
        <div className="careers-header fade-in">
          <span className="section-badge">💼 Join Us</span>
          <h2 className="section-title">Career <span>Opportunities</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Join Techbrain Networks and be part of a team revolutionizing technology across
            24 industries worldwide. We're hiring passionate innovators.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="careers-grid">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="career-card fade-in"
              style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            >
              <div className="career-card-top">
                <span className="career-icon">{job.icon}</span>
                <span className="career-badge">Open</span>
              </div>
              <h3 className="career-title">{job.title}</h3>
              <div className="career-skills">
                <span className="skill-label">Skills:</span>
                <span className="skill-value">{job.skills}</span>
              </div>
              <button className="career-apply-btn">
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="careers-cta fade-in">
          <div className="careers-cta-content">
            <h3>Don't see your role?</h3>
            <p>Send us your resume and we'll reach out when a matching position opens up.</p>
          </div>
          <a href="mailto:contact@techbrainnetworks.com" className="btn btn-primary">
            Send Your Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
