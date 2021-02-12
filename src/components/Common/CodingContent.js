import React, {Component} from 'react';



class CodingContent extends Component {
    render(){
        return(
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">My Coding Journey</h2>
                    <h3 class="section-subheading text-muted">My current knowledge, projects and plans!</h3>
                </div>
                
                <div class="row">
                    <div class="col-lg-12 mx-auto text-center"><p class="large text-muted">I began learning the basics of computer science alongside my university studies by becoming a member of the University's Computing Society in which I started to learn the basic syntax of code before moving on to build some simple C# projects. As I became familiar with the syntax of code I started to widen my knowledge and familiarise myself with Python, Java, and Web Development as well as the basics of programming and data analysis. I applied my new skills by building and maintaining a website to promote my private music lessons. I am currently using various online resources to solve programming puzzles and further my experience.</p></div>
                    <div class="col-lg-12 mx-auto text-center"><p class="large text-muted">Having recently completed a three week Develop Coding course with CodeNation, I have begun a job search for a role in the industry, I have continued to learn more and begin new projects.</p></div>
                    <div class="col-lg-12 mx-auto text-center paddingTop">
                    <p class="large text-muted">Here is a small program that will provide you with my github or linkedin page, please hit the run button to play!</p>
                        <iframe src="https://trinket.io/embed/python/2444963a5d" width="90%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> 
                    </div>
                    <div class="col-lg-12 mx-auto text-center paddingTop">
                    <p class="large text-muted">During my course we had to create a small python game, we went with a different idea but this was my sample game!</p>
                        <iframe src="https://trinket.io/embed/python/2c408193a3?outputOnly=true&runOption=run" width="90%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                    </div>    
                </div>
            </div>
            </section>
        )
    }
}
export default CodingContent;