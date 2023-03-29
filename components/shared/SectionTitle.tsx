import { merriWeather } from 'app/font'

const SectionTitle = ({ title }: { title: string }) => (
  <p
    className={`text-center mt-6 text-site-darkBlue font-bold text-4xl ${merriWeather.className}`}
  >
    {title}
  </p>
)

export default SectionTitle
