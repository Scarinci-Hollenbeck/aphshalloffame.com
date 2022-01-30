import { createMarkup } from "utils/helpers"

const About = ({ content }) => (
  <div className="mx-4 mt-3 text-center"  dangerouslySetInnerHTML={createMarkup(content)} />
)

export default About
