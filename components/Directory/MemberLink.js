import Link from 'next/link'
const MemberLink = ({ _id, slug, name, inducted, class: memberClass }) => (
  <li key={_id} className="d-flex flex-column flex-md-row mb-3">
    <Link href={`/inductee/${slug}`}>
      <span className="text-dark">
        <strong>{name}</strong>
      </span>
    </Link>
    <small className="mt-0 mt-md-1 ms-0 ms-md-2">
      Class:
      {memberClass} | Inducted:
      {inducted}
    </small>
  </li>
)

export default MemberLink
