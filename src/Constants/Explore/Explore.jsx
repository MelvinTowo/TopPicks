import React from 'react'
import NavBar from '../../components/NavBar';
import './Explore.css';


const Explore = () => {
  return (
    <div>
       <NavBar /> 
        <section className="Container">
          <div className="Ecard">
              <div className="Ecard-image Ecard-1"></div>
              <h2>Mercedes EQS</h2>
              <p> 
                EQS is comfortable, quiet and packed full of features. It also has a 
                roomy cargo area and a long range on a full charge. This car also has an incredible 
                acceleration rate going 0-60 in just 3 seconds!
              </p>
              <button>VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-2"></div>
              <h2>A bordeaux red</h2>
              <p>
              France’s most famous wine region and the reference point for Cabernet Sauvignon. But there’s actually more Merlot
              (66%) in Bordeaux’s vineyards overall than Cabernet (22.5%). 
              This wine’s blend mirrors that, and its black- and red-currant flavors and aroma are equally classic.
              </p>
              <button> VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-3"></div>
              <h2>Pierres harbour, Australia</h2>
              <p>
                This breath taking scene has to be one of the most beautiful pictures I have ever taken.
                The sky marinated in Crimson, the low yet subtle light from the sunset in the background,
                I think this could very well be heaven :D 
              </p>
              <button> VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-4"></div>
              <h2>Robusto! R Y J Reserve</h2>
              <p>
              The Romeo y Julieta Robusto is a fantastic entry point cigar with 
              a medium body and profile 
              notes ranging from toasted nuts to spiced coffee to seasoned leather. 
              They are also a great price.
              </p>
              <button>VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-5"></div>
              <h2>B 757 Spotted!</h2>
              <p>
                On my morning run today, I happened to cross paths with this beauty. 
                The 757 was always an incredible plane! A shame they continue to be retired :-(
              </p>
              <button>VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-6"></div>
              <h2>Violets!</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis 
                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                 Nulla consequat massa quis enim.</p>
              <button>VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-7"></div>
              <h2>Hutchins Ribye</h2>
              <p>
                One of the best steaks I have ever tasted! Evenly marinated down to the 
                core and very juicy. Drizzled in only what could very well be their secret sauce
                Hutchins did not dissapoint!
              </p>
              <button>VISIT TOPPICK</button>
          </div>
          <div className="Ecard">
              <div className="Ecard-image Ecard-8"></div>
              <h2>Gigabyte's RTX 3060ti</h2>
              <p>
               Easily one of the best budget end graphics Ecard in the market. 
               incredible power draw and high frame rates make me recommend this to just about everyone!
              </p>
              <button>VISIT TOPPICK</button>
          </div>
        </section>  
        
      </div>
  )
}

export default Explore