import img1 from './images/illustration/team-1.jpg';
import img2 from './images/illustration/team-2.jpg';
import img3 from './images/illustration/team-3.jpg';
import img4 from './images/illustration/team-4.jpg';
import img5 from './images/illustration/team-5.jpg';
import t1 from './images/illustration/testimonial-1.jpg';
import t2 from './images/illustration/testimonial-2.jpg';

function Team() {
    return (
        <>
            <div class="container-fluid py-5">
            <div class="container">
                <div class="border-start border-5 border-primary ps-5 mb-5">
                    <h6 class="text-primary text-uppercase">Team Members</h6>
                    <h1 class="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>
                <div class="owl-carousel team-carousel position-relative" >
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-25" src={img1} alt=""/>
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-25" src={img2} alt=""/>
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-25" src={img3} alt=""/>
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-25" src={img4} alt=""/>
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-25" src={img5} alt=""/>
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                        <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-testimonial py-5" >
        <div class="container py-5">
            <div class="row justify-content-end">
                <div class="col-lg-7">
                    <div class="owl-carousel testimonial-carousel bg-white p-5">
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-4">
                                <img class="img-fluid w-25" src={t1} alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" >
                                    <i class="bi bi-chat-square-quote text-primary"></i>
                                </div>
                            </div>
                            <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="w-25 mx-auto"/>
                            <h5 class="text-uppercase">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-4">
                                <img class="img-fluid w-25" src={t2} alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" >
                                    <i class="bi bi-chat-square-quote text-primary"></i>
                                </div>
                            </div>
                            <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="w-25 mx-auto"/>
                            <h5 class="text-uppercase">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Team;