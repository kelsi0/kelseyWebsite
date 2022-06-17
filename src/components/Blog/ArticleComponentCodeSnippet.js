import React from 'react';

const ArticleComponentCodeSnippet = ({ codeTitle, trinket_url }) => {
    return(
        <section class="row">
            <div class="col-lg-12 mx-auto text-center paddingTop">
                <p class="large text-muted">{codeTitle}</p>
                    <iframe src={trinket_url} width="90%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> 
            </div>
        </section>
    );
}

export default ArticleComponentCodeSnippet;