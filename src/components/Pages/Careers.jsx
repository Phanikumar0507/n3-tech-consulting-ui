import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Careers = () => {
    return (
        <div class="row col-md-12">
            <div class="col-md-6">
                <h1 className='page-header'> CAREERS </h1>
                <div className='page-content'>
                    There are many factors that will define satisfaction and success in your career.
                    The most significant skill-related factors include knowledge, ability, dedication, and perseverance.
                    In addition, your employer plays an important role in your job satisfaction. Idol Soft provides you with exciting growth prospects and dynamic work environment.
                    At Idol Soft, we are committed to helping you grow and succeed.
                    We continuously devote enormous energy and resources towards helping you develop in your day-to-day life.
                </div>
                <h4 className='pb-2'>Location: Plano, TX</h4>
                <h1 className='pb-2'> Technical Recruiter </h1>
                <h2 className='pb-2'> Job Description: </h2>
                <div className='page-content'>
                    <ul>
                    <li>Source and Assessment of the prospective candidates. Interview the candidate for Technical positions (e.g. Programmers, Analysts, Software Engineers, Database Administrators, etc.) to meet the employer and employer’s client’s requirements.</li>
                    <li>Recruit passive candidates and possess the mentality to “profile people and gauge chemistry of candidates for fit and understand their motivation” rather than sell a role.</li>
                    <li>Interview candidates within the framework of the position specification. Possess strong ability to screen, interview and prepare a candidate slate within an appropriate and consistent timeline.</li>
                    <li>Responsibilities include interviewing software professionals/job applicants to test their qualitative and quantitative knowledge as well as their ability to perform in areas such as programming, analysis, project/program management, customization of enterprise applications, support and maintenance of databases, operating systems and computer networks etc. and the ability to solve problems.</li>
                    <li>The purpose of a technical interview: to gauge and understand a candidate’s level of technical expertise. Technical interviewers must ask questions of varying difficulty to measure the job applicant’s technical knowledge and experience.</li>
                    <li>Reviews employment applications and evaluates work history, education and training, job skills, compensation needs, and other qualifications of applicants.</li>
                    <li>Records additional knowledge, skills, abilities, interests, test results, and other data pertinent to selection and referral of applicants.</li>
                    <li>Reviews job orders and does the initial matching of applicants with job requirements, utilizing manual or computerized searches.</li>
                    <li>Build and maintain network of potential candidates through pro-active market research and on-going relationship management; conducts in-depth interviews of potential candidates, demonstrating ability to anticipate hiring manager preferences through high offer-to-interview ratios.</li>
                    <li>Recommend ideas and strategies related to recruitment that will contribute to the long-range growth of the company, implementing any new processes and fine tuning standard processes for recruiting that fits within our mission to deliver the highest quality results to the customer.</li>
                    <li>Articulate in writing a plan with deliverables, timelines and a formal tracking process.</li>
                    <li>Participate in special projects/recruiting initiatives, including assessment of best practices in interviewing techniques, leveraging of internal sources of talent and identification of top performers for senior-level openings.</li>
                    <li>Refers selected applicants to the hiring team, according to policy of organization. Keeps records of all applicants that have been contacted and interviewed.</li>
                    <li>May perform reference and background checks on applicants. May refer applicants to vocational counseling services. May conduct or arrange for skills, intelligence, or psychological testing of applicants.</li>
                    <li>May evaluate selection and placement techniques by conducting research or follow-up activities and conferring with management and supervisory personnel. May specialize in interviewing and referring certain types of personnel, such as professional, technical, managerial, clerical, and other types of skilled or unskilled workers.</li>
                    </ul>
                
                </div>
            
            </div>
            <div class="col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <span><img src="https://d33wubrfki0l68.cloudfront.net/20c8532a910434ad4ffd284588c4e738d2894c10/e65a7/img/icons/maker.svg" alt="ico" /></span>
                            <Form.Label>Uploade</Form.Label>
                            <Form.Control type="text" placeholder="Click or drag afile to this area to upload your resume" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        </div>
    )
}

export default Careers;
