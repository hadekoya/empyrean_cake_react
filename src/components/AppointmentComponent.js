import React, { Component } from "react";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    return (
    <React.Fragment>
        <div class="row row-content">
            <div class="col">
                <div id="schedule_form">
                <div 
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/empyreancakes/store-visit"
                    style={{ maxWidth: '100%', height: '650px' }} />
                </div>
            </div>
        </div>
    </React.Fragment>
    );
  }
}
export default Appointment;
