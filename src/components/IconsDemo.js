import React from 'react';
import './componentStyles/IconsDemo.scss';

import Alert from '../svgs/Alert';
import StopSign from '../svgs/StopSign';
import RoundCheck from '../svgs/RoundCheck';
import Close from '../svgs/Close';
import Delete from '../svgs/Delete';
import Down from '../svgs/Down';
import Information from '../svgs/Information';
import Left from '../svgs/Left';
import Right from '../svgs/Right';
import LeftArrow from '../svgs/LeftArrow';
import RightArrow from '../svgs/RightArrow';
import Lock from '../svgs/Lock';
import SearchIcon from '../svgs/SearchIcon';
import Question from '../svgs/Question';
import SmallUp from '../svgs/SmallUp';
import SmallDown from '../svgs/SmallDown';
import SmallLeft from '../svgs/SmallLeft';
import SmallRight from '../svgs/SmallRight';
import Spinner from '../svgs/Spinner';
import Up from '../svgs/Up';
import Check from '../svgs/Check';
import Tick from '../svgs/Tick';
import SdlcLogo from '../svgs/SdlcLogo';
import Hamburger from '../svgs/Hamburger';
import Copy from '../svgs/Copy';

class DividersDemo extends React.Component {
  render() {
    return (
      <div className="iconsSpacing">
        <h3 className="header-padding">Icons</h3>
        <h4>Messaging</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <Check width="25px" fill="black" />
            </div>
            <div>&lt;Check&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <StopSign width="25px" fill="black" />
            </div>
            <div>&lt;StopSign&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Question width="25px" fill="black" />
            </div>
            <div>&lt;Question&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Information width="25px" fill="black" />
            </div>
            <div>&lt;Information&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <RoundCheck width="25px" fill="black" />
            </div>
            <div>&lt;RoundCheck&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Alert width="25px" fill="black" />
            </div>
            <div>&lt;Alert&gt;</div>
          </div>
        </div>
        <h4>Arrows</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <Left width="25px" fill="black" />
            </div>
            <div>&lt;Left&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Right width="25px" fill="black" />
            </div>
            <div>&lt;Right&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Up width="25px" fill="black" />
            </div>
            <div>&lt;Up&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Down width="25px" fill="black" />
            </div>
            <div>&lt;Down&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <LeftArrow width="25px" fill="Black" />
            </div>
            <div>&lt;LeftArrow&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <RightArrow width="25px" fill="black" />
            </div>
            <div>&lt;RightArrow&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <SmallLeft width="20px" fill="black" />
            </div>
            <div>&lt;SmallLeft&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <SmallRight width="20px" fill="black" />
            </div>
            <div>&lt;SmallRight&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <SmallUp width="20px" fill="black" />
            </div>
            <div>&lt;SmallUp&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <SmallDown width="20px" fill="black" />
            </div>
            <div>&lt;SmallDown&gt;</div>
          </div>
        </div>
        <h4>Actions</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <Tick width="25px" fill="black" />
            </div>
            <div>&lt;Tick&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Close width="25px" fill="black" />
            </div>
            <div>&lt;Close&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Delete width="25px" fill="black" />
            </div>
            <div>&lt;Delete&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <SearchIcon width="25px" fill="black" />
            </div>
            <div>&lt;SearchIcon&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Spinner width="25px" fill="black" />
            </div>
            <div>&lt;Spinner&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Copy width="25px" fill="black" />
            </div>
            <div>&lt;Copy&gt;</div>
          </div>
        </div>

        {/* Hiding for now because these icons still needs to be worked on */}
        {/* <h4>Human</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <Standing width="25px" fill="black" />
            </div>
            <div>&lt;Standing&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Running width="25px" fill="black" />
            </div>
            <div>&lt;Running&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Team width="25px" fill="black" />
            </div>
            <div>&lt;Team&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Group width="25px" fill="black" />
            </div>
            <div>&lt;Group&gt;</div>
          </div>
        </div>
        <h4>Work</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <ApproveInvoice width="25px" fill="black" />
            </div>
            <div>&lt;ApproveInvoice&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Blueprint width="25px" fill="black" />
            </div>
            <div>&lt;Blueprint&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Contract width="25px" fill="black" />
            </div>
            <div>&lt;Contract&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Analysis width="25px" fill="black" />
            </div>
            <div>&lt;Analysis&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Quality width="25px" fill="black" />
            </div>
            <div>&lt;Quality&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Folder width="25px" fill="black" />
            </div>
            <div>&lt;Folder&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <GraphicTool width="25px" fill="black" />
            </div>
            <div>&lt;GraphicTool&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Sketch width="25px" fill="black" />
            </div>
            <div>&lt;Sketch&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Solution width="25px" fill="black" />
            </div>
            <div>&lt;Solution&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Tools width="25px" fill="black" />
            </div>
            <div>&lt;Tools&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Web width="25px" fill="black" />
            </div>
            <div>&lt;Web&gt;</div>
          </div>
        </div> */}
        <h4>Other</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <Lock width="25px" fill="black" />
            </div>
            <div>&lt;Lock&gt;</div>
          </div>
          <div className="iconBlock">
            <div className="iconIcon">
              <Hamburger width="25px" fill="black" />
            </div>
            <div>&lt;Hamburger&gt;</div>
          </div>
        </div>
        <h4>Logo</h4>
        <div className=" iconGrouping labels14">
          <div className="iconBlock">
            <div className="iconIcon">
              <SdlcLogo width="75px" />
            </div>
            <div>&lt;SdlcLogo&gt;</div>
          </div>
        </div>

        <br />
        <div>General Icon Usage</div>
        <pre>
          <code className="language-jsx">
            {`
            import Hamburger from '../svgs/Hamburger' 

            ...

            <Hamburger width="25px" fill="black" />
          `}
          </code>
        </pre>
        <br />
        <div>SDLC Logo</div>
        <pre>
          <code className="language-jsx">
            {`
            import SdlcLogo from '../svgs/Hamburger' 

            ...

            <SdlcLogo width="100px" /> //colors are set automatically
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default DividersDemo;
