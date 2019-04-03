import React from 'react';

// TODO - add proptypes

const NoMatch = props => {
    return (
      // outer most div
      <div>
        <div className="Home">
          <h1> Cool Hands Couriers</h1>
        </div>

        <section className="grid">
          <h1>Are you lost?: No Page Found</h1>
          <div className="text-center">
            <img src="https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif" alt="Loading Computer Gif"/>
          </div>
        </section>

        <footer className="staticFooter font-small blue">
          <div className="footer-copyright py-3 text-center">
            © 2019 Copyright:
       				 <a> Cool Hands Couriers </a>
          </div>
        </footer>



      </div>
    )
  }

export default NoMatch
