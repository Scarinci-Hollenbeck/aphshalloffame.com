import Link from 'next/link'
const MemberLink = ({ _id, slug, name, inducted, class: memberClass }) => (
  <li key={_id} className="mb-4">
    <Link href={`/inductee/${slug}`}>
      <a className="text-dark">
        <p>
          <strong>{name}</strong> -{' '}
          <small>
            Class:
            {memberClass} | Inducted:
            {inducted}
          </small>
        </p>
      </a>
    </Link>
  </li>
)

export default MemberLink
