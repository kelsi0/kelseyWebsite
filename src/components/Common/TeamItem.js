import React from 'react';

const TeamItem = ({ img, title, role, github, facebook, linkedin }) => {
    return(
        <div class="col-lg-4">
        <div class="team-member">
            <img class="mx-auto rounded-circle" src={img} alt="" />
            <h4>{title}</h4>
            <p class="text-muted">{role}</p>
            <a class="btn btn-dark btn-social mx-2" href={github}><i class="fab fa-github"></i></a>
            <a class="btn btn-dark btn-social mx-2" href={facebook}><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href={linkedin}><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
    );
}
export default TeamItem;