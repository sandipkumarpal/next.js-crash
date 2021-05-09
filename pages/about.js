import Link from "next/link";
import TagManager from 'react-gtm-module'
import { GTM_DATA_PUSH_EVENT } from "../config/gmt";

const AboutPage = () => {

  const dataLayer = { event: GTM_DATA_PUSH_EVENT }

  return (
    <div>
      <h2>About</h2>
      <p>
        <Link
          href={{
            pathname: "/"
          }}
        >
          Back
        </Link>
      </p>

      <form>
        <label htmlFor="fname">First name:</label><br/><br/>
        <input type="text" id="fname" name="fname" value="John"/> <br/><br/>
        <label htmlFor="lname">Last name:</label><br/><br/>
        <input type="text" id="lname" name="lname" value="Doe"/> <br/><br/>
        <input type="submit" value="Submit" /><br/><br/>
      </form>
        <hr/>
      <button type="button" className="button" onClick={ () => TagManager.dataLayer({dataLayer}) }>Just CLick</button>
    </div>
  );
};

export default AboutPage;
