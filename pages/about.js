import Link from "next/link";

const AboutPage = () => {
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
    <button type="button" className="button">Just CLick</button>
    </div>
  );
};

export default AboutPage;
