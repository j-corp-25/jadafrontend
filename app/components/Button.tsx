interface ButtonProps {
  text: string
  additionalClasses?: string;
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick, additionalClasses }) => {
  return (


    <button
      className={`bg-jada-pink-base text-jada-text-base px-2 py-2 rounded-lg text-lg font-regular hover:bg-jada-pink ${additionalClasses}`}
      onClick={onClick}
      >
      {text}
    </button>

  )
}

export default Button
