import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'
export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Definition of hello : an expression or gesture of greeting —used interjectionally in greeting, in answering the telephone, or to express surprise hello there waved hello Synonyms & Antonyms Example Sentences Learn More about hello Synonyms & Antonyms for hello
                        </p>
                    </div>
                    <div className="col-4">
                    <div class="card bg-dark">
  <img src="https://media-exp1.licdn.com/dms/image/C5603AQFAVGycNwnOjg/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=46gYh20xxu033QQg2SUpndVC_DzCSQhC_UVKoU784KQ" class="card-img-top" alt="image goes here"/>
  <div className="card-body">
    <h5 className="card-title text-white">Just Click</h5>
    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.linkedin.com/in/yashashvi65/" class="btn btn-warning btn-block ">Know More</a>
  </div>
</div>
                    </div>

                </div>
            </div>
            
        </section>
    )
}
