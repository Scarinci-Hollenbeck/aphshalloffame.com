const Arrow = ({ className, style, onClick }) => (
  <div
    className={className}
    role="button"
    tabIndex={0}
    style={{
      ...style,
      display: 'block',
      color: 'black',
      fontSize: '22px',
    }}
    onKeyPress={() => onClick}
    onClick={onClick}
  />
)

export default Arrow
