import React from 'react';
import Prism from 'prismjs';

import IconAlert from '../svgs/IconAlert'
import IconAlertStopSign from '../svgs/IconAlertStopSign'
import IconAnalysis from '../svgs/IconAnalysis'
import IconApproveInvoice from '../svgs/IconApproveInvoice'
import IconCheck from '../svgs/IconCheck'
import IconClose from '../svgs/IconClose'
import IconContract from '../svgs/IconContract' 
import IconControls from '../svgs/IconControls' 
import IconDeleteButton from '../svgs/IconDeleteButton' 
import IconDown from '../svgs/IconDown' 
import IconFolder from '../svgs/IconFolder' 
import IconGraphicTool from '../svgs/IconGraphicTool' 
import IconGroup from '../svgs/IconGroup' 
import IconInformation from '../svgs/IconInformation' 
import IconLeft from '../svgs/IconLeft' 
import IconRight from '../svgs/IconRight' 
import IconLeftArrow from '../svgs/IconLeftArrow' 
import IconRightArrow from '../svgs/IconRightArrow' 
import IconLock from '../svgs/IconLock' 
import IconMagnifyingGlass from '../svgs/IconMagnifyingGlass' 
import IconQuality from '../svgs/IconQuality' 
import IconQuestion from '../svgs/IconQuestion' 
import IconRunning from '../svgs/IconRunning' 
import IconSketch from '../svgs/IconSketch' 
import IconSmallUp from '../svgs/IconSmallUp' 
import IconSmallDown from '../svgs/IconSmallDown' 
import IconSmallLeft from '../svgs/IconSmallLeft' 
import IconSmallRight from '../svgs/IconSmallRight' 
import IconSolution from '../svgs/IconSolution' 
import IconSpinnerOfDots from '../svgs/IconSpinnerOfDots' 
import IconStandingUpMan from '../svgs/IconStandingUpMan' 
import IconTools from '../svgs/IconTools' 
import IconUp from '../svgs/IconUp' 
import IconWeb from '../svgs/IconWeb' 
import IconTeam from '../svgs/IconTeam' 
import IconBlueprint from '../svgs/IconBlueprint' 
import IconPhatCheck from '../svgs/IconPhatCheck' 
import IconTick from '../svgs/IconTick' 
import SdlcLogo from '../svgs/SdlcLogo' 
import IconHamburger from '../svgs/IconHamburger' 
import IconCopy from '../svgs/IconCopy' 

class DividersDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Dividers</h4>
        <br />
        
        <div>Heavy divider</div>
        <hr className="heavyDivider"></hr>
        <div>Light divider</div>
        <hr className="lightDivider"></hr>
              
        <br />
        <pre><code className="language-jsx">
          {`
            <hr className="heavyDivider"></hr>
            <hr className="lightDivider"></hr>
          `} 
        </code></pre>
      </div>
    );
  }
}
export default DividersDemo