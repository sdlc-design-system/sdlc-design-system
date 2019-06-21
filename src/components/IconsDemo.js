import React from 'react';
import Prism from 'prismjs';
import './componentStyles/IconsDemo.scss';

import Alert from '../svgs/Alert'
import StopSign from '../svgs/StopSign'
import Analysis from '../svgs/Analysis'
import ApproveInvoice from '../svgs/ApproveInvoice'
import RoundCheck from '../svgs/RoundCheck'
import Close from '../svgs/Close'
import Contract from '../svgs/Contract' 
import Controls from '../svgs/Controls' 
import Delete from '../svgs/Delete' 
import Down from '../svgs/Down' 
import Folder from '../svgs/Folder' 
import GraphicTool from '../svgs/GraphicTool' 
import Group from '../svgs/Group' 
import Information from '../svgs/Information' 
import Left from '../svgs/Left' 
import Right from '../svgs/Right' 
import LeftArrow from '../svgs/LeftArrow' 
import RightArrow from '../svgs/RightArrow' 
import Lock from '../svgs/Lock' 
import SearchIcon from '../svgs/SearchIcon' 
import Quality from '../svgs/Quality' 
import Question from '../svgs/Question' 
import Running from '../svgs/Running' 
import Sketch from '../svgs/Sketch' 
import SmallUp from '../svgs/SmallUp' 
import SmallDown from '../svgs/SmallDown' 
import SmallLeft from '../svgs/SmallLeft' 
import SmallRight from '../svgs/SmallRight' 
import Solution from '../svgs/Solution' 
import Spinner from '../svgs/Spinner' 
import Standing from '../svgs/Standing' 
import Tools from '../svgs/Tools' 
import Up from '../svgs/Up' 
import Web from '../svgs/Web' 
import Team from '../svgs/Team' 
import Blueprint from '../svgs/Blueprint' 
import Check from '../svgs/Check' 
import Tick from '../svgs/Tick' 
import SdlcLogo from '../svgs/SdlcLogo' 
import Hamburger from '../svgs/Hamburger' 
import Copy from '../svgs/Copy' 

class DividersDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="iconsSpacing">
        <h2>Icons</h2>
        <h4>Messaging</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><Check width="35px" fill="black" /></div>
            <div>&lt;Check&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><StopSign width="35px" fill="black" /></div>
            <div>&lt;StopSign&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Question width="35px" fill="black" /></div>
            <div>&lt;Question&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Information width="35px" fill="black" /></div>
            <div>&lt;Information&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><RoundCheck width="35px" fill="black" /></div>
            <div>&lt;RoundCheck&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Alert width="35px" fill="black" /></div>
            <div>&lt;Alert&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Question width="35px" fill="black" /></div>
            <div>&lt;Question&gt;</div>
          </div>
        </div>
        <h4>Arrows</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><Left width="35px" fill="black" /></div>
            <div>&lt;Left&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Right width="35px" fill="black" /></div>
            <div>&lt;Right&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Up width="35px" fill="black" /></div>
            <div>&lt;Up&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Down width="35px" fill="black" /></div>
            <div>&lt;Down&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><LeftArrow width="35px" fill="Black" /></div>
            <div>&lt;LeftArrow&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><RightArrow width="35px" fill="black" /></div>
            <div>&lt;RightArrow&gt;</div>
          </div>
          <div className="iconBlock"><br /></div>

          <div className="iconBlock">
            <div className="iconIcon"><SmallLeft width="20px" fill="black" /></div>
            <div>&lt;SmallLeft&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><SmallRight width="20px" fill="black" /></div>
            <div>&lt;SmallRight&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><SmallUp width="20px" fill="black" /></div>
            <div>&lt;SmallUp&gt;</div>
          </div>          
          <div className="iconBlock">
            <div className="iconIcon"><SmallDown width="20px" fill="black" /></div>
            <div>&lt;SmallDown&gt;</div>
          </div>
        </div>
        <h4>Actions</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><Tick width="35px" fill="black" /></div>
            <div>&lt;Tick&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Close width="35px" fill="black" /></div>
            <div>&lt;Close&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Delete width="35px" fill="black" /></div>
            <div>&lt;Delete&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><SearchIcon width="35px" fill="black" /></div>
            <div>&lt;SearchIcon&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Spinner width="35px" fill="black" /></div>
            <div>&lt;Spinner&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Copy width="35px" fill="black" /></div>
            <div>&lt;Copy&gt;</div>
          </div>
        </div>
          
        <h4>Human</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><Standing width="35px" fill="black" /></div>
            <div>&lt;Standing&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Running width="35px" fill="black" /></div>
            <div>&lt;Running&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Team width="35px" fill="black" /></div>
            <div>&lt;Team&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Group width="35px" fill="black" /></div>
            <div>&lt;Group&gt;</div>
          </div>
        </div>
        <h4>Work</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><ApproveInvoice width="35px" fill="black" /></div>
            <div>&lt;ApproveInvoice&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Blueprint width="35px" fill="black" /></div>
            <div>&lt;Blueprint&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Contract width="35px" fill="black" /></div>
            <div>&lt;Contract&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Analysis width="35px" fill="black" /></div>
            <div>&lt;Analysis&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Quality width="35px" fill="black" /></div>
            <div>&lt;Quality&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Folder width="35px" fill="black" /></div>
            <div>&lt;Folder&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><GraphicTool width="35px" fill="black" /></div>
            <div>&lt;GraphicTool&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Sketch width="35px" fill="black" /></div>
            <div>&lt;Sketch&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Solution width="35px" fill="black" /></div>
            <div>&lt;Solution&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Tools width="35px" fill="black" /></div>
            <div>&lt;Tools&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Web width="35px" fill="black" /></div>
            <div>&lt;Web&gt;</div>
          </div>
        </div>
        <h4>Other</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><Lock width="35px" fill="black" /></div>
            <div>&lt;Lock&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon"><Hamburger width="35px" fill="black" /></div>
            <div>&lt;Hamburger&gt;</div>
          </div>
        </div>
        <h4>Logo</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon"><SdlcLogo width="75px" /></div>
            <div>&lt;SdlcLogo&gt;</div>
          </div>
        </div>

        <br />
        <div>General Icon Usage</div>
        <pre><code className="language-jsx">
          {`
            import Hamburger from '../svgs/Hamburger' 

            ...

            <Hamburger width="25px" fill="black" />
          `} 
        </code></pre>
        <br />
        <div>SDLC Logo</div>
        <pre><code className="language-jsx">
          {`
            import SdlcLogo from '../svgs/Hamburger' 

            ...

            <SdlcLogo width="100px" /> //colors are set automatically
          `} 
        </code></pre>
      </div>
    );
  }
}
export default DividersDemo