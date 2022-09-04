import React, { useState } from 'react'
import { MastercardIcon, VisacardIcon } from '../../../assets/icons/icons'
import CardSelector from '../../../components/CardSelector'

const CardDetails = () => {
    enum CardEnum {
      Visa = 'Visa',
      Mastercard = 'Mastercard'
    }
  
    const [selected, setSelected] = useState<CardEnum>(CardEnum.Visa)

  return (
    
    <div className="flex my-6 flex-col md:flex-row">
    <div className="mb-4 w-full md:w-1/4 md:mr-4">
      <p className="text-secText mb-1 text-sm">Card details</p>
      <p className="text-greyText text-sm">
        Select default payment method.
      </p>
    </div>

    <div className="flex-1">
      <div className="">
        <CardSelector
          Icon={VisacardIcon}
          expiry="06/2024"
          selected={selected === CardEnum.Visa}
          onClick={() => setSelected(CardEnum.Visa)}
          cardType="Visa"
          lastDigits={1234}
        />
      </div>

      <div className="my-4">
        <CardSelector
          Icon={MastercardIcon}
          expiry="06/2024"
          cardType="Mastercard"
          selected={selected === CardEnum.Mastercard}
          onClick={() => setSelected(CardEnum.Mastercard)}
          lastDigits={1234}
        />
      </div>
      <div>
        <p className="text-greyText text-sm cursor-pointer">
          + Add new payment method
        </p>
      </div>
    </div>
  </div>
  )
}

export default CardDetails