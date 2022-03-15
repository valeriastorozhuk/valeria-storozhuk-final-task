import mypic from "../Pictures/IMG-20190321-WA0158.jpg"
import yarn from "../Pictures/yarn.jpg"
import globe from "../Pictures/globe.jpg"

function ContactTabs() {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active copyright" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About Me</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link copyright" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Materials</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link copyright" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Shipping</button>
              </li>
          </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="card-body">
              <div className="card mb-3 pb-4">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={mypic} class="img-fluid" alt="About Me"/>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, mollitia nihil. Modi, assumenda nobis tempore, ipsa quo itaque, rem facere accusamus dolorum sapiente reiciendis dolore voluptas eaque vel aliquid dolor.</p>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="card-body">
              <div className="card mb-3 pb-4">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={yarn} class="img-fluid" alt="Materials"/>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, mollitia nihil. Modi, assumenda nobis tempore, ipsa quo itaque, rem facere accusamus dolorum sapiente reiciendis dolore voluptas eaque vel aliquid dolor.</p>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="card-body">
              <div className="card mb-3 pb-4">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={globe} class="img-fluid" alt="About Me"/>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">Doggo ipsum wow very biscit he made many woofs very taste wow doing me a frighten long bois, much ruin diet most angery pupper I have ever seen the neighborhood pupper. Long water shoob blep thicc I am bekom fat borking doggo, ur givin me a spook sub woofer doge. Long doggo dat tungg tho heckin good boys and girls boofers long bois puggo blep yapper, puggorino you are doing me a frighten porgo what a nice floof extremely cuuuuuute.  boofers fluffer very good spot. Puggo corgo aqua doggo puggorino aqua doggo, dat tungg tho blop yapper. Shoober ruff shibe maximum borkdrive he made many woofs ur givin me a spook wrinkler, most angery pupper I have ever seen you are doin me a concern blep thicc. wrinkler dat tungg tho porgo. Very good spot borkf much ruin diet fluffer long bois wow very biscit long woofer, heckin good boys and girls bork shoober stop it fren.  Shoober stop it fren ruff, most angery pupper I have ever seen. Long bois much ruin diet bork clouds, length boy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
    )
}

export default ContactTabs