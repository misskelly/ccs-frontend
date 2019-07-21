import React from 'react';
import Phone from '../../assets/images/icons/phone';
import Text from '../../assets/images/icons/text';
import WalkIn from '../../assets/images/icons/walkIn';



export const Button = () => {
  const propsMock = {
    kind: "call",
    size: "large",
    text: "Call",
    icon: <Phone />
  }
  // console.log(phone)
  return (
    <button type="button"
      className={`${propsMock.kind}-btn ${propsMock.size}`}
      >
      { propsMock.text }
      { propsMock.icon }
      {/* Call
      <Text /> */}
      {/* <Phone />
      <WalkIn /> */}
    </button>
  )
}

export default Button;
