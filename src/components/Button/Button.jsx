import classNames from 'classnames'

const Button = ({outline, children, onClick, className}) => {
  return (
    <button onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline
      })}>
      {children}
    </button>
  )
}

export default Button