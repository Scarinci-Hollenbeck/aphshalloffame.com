export default function Logo() {
  return (
    <div>
      <h1 className="mb-0">Asbury Park High School</h1>
      <h2 className="mt-0">Distinguished Alumni Hall of Fame</h2>
      <style jsx>
        {`
          div {
            text-align: center;
          }
          h1 {
            color: #386982;
            font-size: 1.7rem;
            font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
          }

          h2 {
            color: #59a7cf;
            font-size: 1.7rem;
            font-family: Georgia, 'Times New Roman', Times, serif;
          }
        `}
      </style>
    </div>
  );
}
